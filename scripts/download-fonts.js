const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, '..', 'app_mascotas', 'static', 'app_mascotas', 'fonts');
const cssFile = path.join(__dirname, '..', 'app_mascotas', 'static', 'app_mascotas', 'css', 'fonts.css');

// URLs de las fuentes a descargar
const fontFiles = [
  // Inter
  { url: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZg.ttf', name: 'inter-300.ttf', weight: 300, family: 'Inter' },
  { url: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf', name: 'inter-400.ttf', weight: 400, family: 'Inter' },
  { url: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf', name: 'inter-500.ttf', weight: 500, family: 'Inter' },
  { url: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf', name: 'inter-600.ttf', weight: 600, family: 'Inter' },
  { url: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf', name: 'inter-700.ttf', weight: 700, family: 'Inter' },
  // Poppins
  { url: 'https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLDz8V1s.ttf', name: 'poppins-300.ttf', weight: 300, family: 'Poppins' },
  { url: 'https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrFJA.ttf', name: 'poppins-400.ttf', weight: 400, family: 'Poppins' },
  { url: 'https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9V1s.ttf', name: 'poppins-500.ttf', weight: 500, family: 'Poppins' },
  { url: 'https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6V1s.ttf', name: 'poppins-600.ttf', weight: 600, family: 'Poppins' },
  { url: 'https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7V1s.ttf', name: 'poppins-700.ttf', weight: 700, family: 'Poppins' },
];

// Crear directorio de fuentes si no existe
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Función para descargar un archivo
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Función principal
async function downloadFonts() {
  console.log('📥 Descargando fuentes de Google Fonts...\n');
  
  const downloadedFonts = [];
  
  for (const font of fontFiles) {
    const filepath = path.join(fontsDir, font.name);
    
    // Si el archivo ya existe, saltarlo
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Ya existe: ${font.name}`);
      downloadedFonts.push(font);
      continue;
    }
    
    try {
      console.log(`⬇️  Descargando: ${font.name} (${font.family} ${font.weight})`);
      await downloadFile(font.url, filepath);
      downloadedFonts.push(font);
      console.log(`   ✅ Descargado: ${font.name}\n`);
    } catch (error) {
      console.error(`   ❌ Error descargando ${font.name}:`, error.message);
    }
  }
  
  // Generar CSS con @font-face
  let cssContent = '/* Fuentes locales - Inter y Poppins */\n\n';
  
  for (const font of downloadedFonts) {
    cssContent += `@font-face {\n`;
    cssContent += `  font-family: '${font.family}';\n`;
    cssContent += `  font-style: normal;\n`;
    cssContent += `  font-weight: ${font.weight};\n`;
    cssContent += `  font-display: swap;\n`;
    cssContent += `  src: url('../fonts/${font.name}') format('truetype');\n`;
    cssContent += `}\n\n`;
  }
  
  // Guardar CSS
  fs.writeFileSync(cssFile, cssContent);
  
  console.log(`\n✅ Fuentes descargadas en: ${fontsDir}`);
  console.log(`✅ CSS creado en: ${cssFile}`);
  console.log(`📦 Total: ${downloadedFonts.length} archivos de fuente`);
}

downloadFonts().catch(console.error);
