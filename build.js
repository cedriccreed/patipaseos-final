/**
 * Script de build para copiar dependencias de node_modules a static de Django
 * Ejecutar con: npm run build
 */

const fs = require('fs-extra');
const path = require('path');

// Rutas de origen y destino
const nodeModulesPath = path.join(__dirname, 'node_modules');
const staticPath = path.join(__dirname, 'app_mascotas', 'static', 'app_mascotas', 'vendor');

// Archivos y carpetas a copiar
const filesToCopy = {
  // Bootstrap CSS y JS
  'bootstrap/dist/css/bootstrap.min.css': 'bootstrap/css/bootstrap.min.css',
  'bootstrap/dist/css/bootstrap.min.css.map': 'bootstrap/css/bootstrap.min.css.map',
  'bootstrap/dist/js/bootstrap.bundle.min.js': 'bootstrap/js/bootstrap.bundle.min.js',
  'bootstrap/dist/js/bootstrap.bundle.min.js.map': 'bootstrap/js/bootstrap.bundle.min.js.map',
  
  // jQuery
  'jquery/dist/jquery.min.js': 'jquery/jquery.min.js',
  'jquery/dist/jquery.min.map': 'jquery/jquery.min.map',
  
  // Popper.js
  'popper.js/dist/umd/popper.min.js': 'popper/popper.min.js',
  'popper.js/dist/umd/popper.min.js.map': 'popper/popper.min.js.map',
  
  // Font Awesome (usando @fortawesome)
  '@fortawesome/fontawesome-free/css/all.min.css': 'fontawesome/css/all.min.css',
  '@fortawesome/fontawesome-free/webfonts': 'fontawesome/webfonts',
  
  // Animate.css
  'animate.css/animate.min.css': 'animate/animate.min.css',
  
  // Moment.js
  'moment/min/moment.min.js': 'moment/moment.min.js',
  'moment/locale/es.js': 'moment/locale/es.js',
  
  // DateRangePicker
  'daterangepicker/daterangepicker.css': 'daterangepicker/daterangepicker.css',
  'daterangepicker/daterangepicker.min.js': 'daterangepicker/daterangepicker.min.js',
  
  // Chart.js
  'chart.js/dist/chart.min.js': 'chartjs/chart.min.js',
  
  // SweetAlert2
  'sweetalert2/dist/sweetalert2.min.css': 'sweetalert2/sweetalert2.min.css',
  'sweetalert2/dist/sweetalert2.min.js': 'sweetalert2/sweetalert2.min.js'
};

async function copyFiles() {
  console.log('🚀 Iniciando build de dependencias frontend...\n');
  
  try {
    // Crear directorio de destino si no existe
    await fs.ensureDir(staticPath);
    console.log(`✓ Directorio creado: ${staticPath}\n`);
    
    // Copiar cada archivo/carpeta
    let copiedCount = 0;
    for (const [source, dest] of Object.entries(filesToCopy)) {
      const sourcePath = path.join(nodeModulesPath, source);
      const destPath = path.join(staticPath, dest);
      
      // Verificar si el archivo/carpeta existe
      if (await fs.pathExists(sourcePath)) {
        // Crear directorio de destino si es necesario
        await fs.ensureDir(path.dirname(destPath));
        
        // Copiar archivo o carpeta
        await fs.copy(sourcePath, destPath);
        console.log(`✓ Copiado: ${source} → ${dest}`);
        copiedCount++;
      } else {
        console.warn(`⚠ No encontrado: ${source}`);
      }
    }
    
    console.log(`\n✅ Build completado! ${copiedCount} archivos copiados a ${staticPath}`);
    console.log('\n📝 Próximos pasos:');
    console.log('   1. Actualiza base.html para usar los archivos locales');
    console.log('   2. Ejecuta: python manage.py collectstatic (si es necesario)');
    
  } catch (error) {
    console.error('❌ Error durante el build:', error);
    process.exit(1);
  }
}

// Ejecutar el script
copyFiles();

