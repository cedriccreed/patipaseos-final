const fs = require('fs-extra');
const path = require('path');

// Rutas de origen y destino
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
const staticPath = path.join(__dirname, '..', 'app_mascotas', 'static', 'app_mascotas', 'vendor');

// Crear directorio vendor si no existe
fs.ensureDirSync(staticPath);

// Mapeo de archivos a copiar
const filesToCopy = {
  // Bootstrap CSS y JS
  'bootstrap/dist/css/bootstrap.min.css': 'css/bootstrap.min.css',
  'bootstrap/dist/js/bootstrap.bundle.min.js': 'js/bootstrap.bundle.min.js',
  
  // jQuery
  'jquery/dist/jquery.min.js': 'js/jquery.min.js',
  
  // Popper.js
  'popper.js/dist/umd/popper.min.js': 'js/popper.min.js',
  
  // Font Awesome
  '@fortawesome/fontawesome-free/css/all.min.css': 'css/fontawesome.min.css',
  '@fortawesome/fontawesome-free/webfonts': 'webfonts',
  
  // Animate.css
  'animate.css/animate.min.css': 'css/animate.min.css',
  
  // Moment.js
  'moment/min/moment.min.js': 'js/moment.min.js',
  
  // DateRangePicker
  'daterangepicker/daterangepicker.css': 'css/daterangepicker.css',
  'daterangepicker/daterangepicker.min.js': 'js/daterangepicker.min.js',
  
  // Chart.js
  'chart.js/dist/chart.umd.min.js': 'js/chart.umd.min.js',
  
  // SweetAlert2
  'sweetalert2/dist/sweetalert2.min.css': 'css/sweetalert2.min.css',
  'sweetalert2/dist/sweetalert2.min.js': 'js/sweetalert2.min.js'
};

console.log('📦 Copiando archivos de node_modules a static...\n');

let copiedCount = 0;
let errorCount = 0;

// Copiar cada archivo
Object.entries(filesToCopy).forEach(([source, dest]) => {
  const sourcePath = path.join(nodeModulesPath, source);
  const destPath = path.join(staticPath, dest);
  
  try {
    // Crear directorio de destino si no existe
    fs.ensureDirSync(path.dirname(destPath));
    
    // Copiar archivo o directorio
    if (fs.statSync(sourcePath).isDirectory()) {
      fs.copySync(sourcePath, destPath);
      console.log(`✅ Copiado: ${source} → ${dest}`);
    } else {
      fs.copySync(sourcePath, destPath);
      console.log(`✅ Copiado: ${source} → ${dest}`);
    }
    copiedCount++;
  } catch (error) {
    console.error(`❌ Error copiando ${source}:`, error.message);
    errorCount++;
  }
});

console.log(`\n✨ Proceso completado!`);
console.log(`   ✅ Archivos copiados: ${copiedCount}`);
if (errorCount > 0) {
  console.log(`   ❌ Errores: ${errorCount}`);
}

