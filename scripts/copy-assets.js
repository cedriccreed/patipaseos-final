const fs = require('fs-extra');
const path = require('path');

// Rutas de origen (node_modules) y destino (static de Django)
const assets = {
  // Bootstrap
  'bootstrap/dist/css/bootstrap.min.css': 'app_mascotas/static/app_mascotas/css/bootstrap.min.css',
  'bootstrap/dist/js/bootstrap.bundle.min.js': 'app_mascotas/static/app_mascotas/js/bootstrap.bundle.min.js',
  
  // jQuery
  'jquery/dist/jquery.min.js': 'app_mascotas/static/app_mascotas/js/jquery.min.js',
  
  // Popper.js
  'popper.js/dist/umd/popper.min.js': 'app_mascotas/static/app_mascotas/js/popper.min.js',
  
  // Font Awesome
  '@fortawesome/fontawesome-free/css/all.min.css': 'app_mascotas/static/app_mascotas/css/fontawesome.min.css',
  '@fortawesome/fontawesome-free/webfonts': 'app_mascotas/static/app_mascotas/webfonts',
  
  // Animate.css
  'animate.css/animate.min.css': 'app_mascotas/static/app_mascotas/css/animate.min.css',
  
  // Moment.js
  'moment/min/moment.min.js': 'app_mascotas/static/app_mascotas/js/moment.min.js',
  
  // DateRangePicker
  'daterangepicker/daterangepicker.css': 'app_mascotas/static/app_mascotas/css/daterangepicker.css',
  'daterangepicker/daterangepicker.js': 'app_mascotas/static/app_mascotas/js/daterangepicker.js',
  
  // Chart.js
  'chart.js/dist/chart.min.js': 'app_mascotas/static/app_mascotas/js/chart.min.js',
  
  // SweetAlert2
  'sweetalert2/dist/sweetalert2.min.css': 'app_mascotas/static/app_mascotas/css/sweetalert2.min.css',
  'sweetalert2/dist/sweetalert2.min.js': 'app_mascotas/static/app_mascotas/js/sweetalert2.min.js'
};

const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
const staticPath = path.join(__dirname, '..');

console.log('📦 Copiando assets desde node_modules a static...\n');

// Función para copiar archivos
async function copyAssets() {
  let copied = 0;
  let errors = 0;

  for (const [source, dest] of Object.entries(assets)) {
    const sourcePath = path.join(nodeModulesPath, source);
    const destPath = path.join(staticPath, dest);
    const destDir = path.dirname(destPath);

    try {
      // Verificar que el archivo fuente existe
      if (!await fs.pathExists(sourcePath)) {
        console.log(`⚠️  No encontrado: ${source}`);
        errors++;
        continue;
      }

      // Crear directorio de destino si no existe
      await fs.ensureDir(destDir);

      // Copiar archivo o directorio
      const stats = await fs.stat(sourcePath);
      if (stats.isDirectory()) {
        await fs.copy(sourcePath, destPath);
        console.log(`✅ Copiado directorio: ${dest}`);
      } else {
        await fs.copy(sourcePath, destPath);
        console.log(`✅ Copiado: ${dest}`);
      }
      copied++;
    } catch (error) {
      console.error(`❌ Error copiando ${source}:`, error.message);
      errors++;
    }
  }

  console.log(`\n✨ Proceso completado: ${copied} archivos copiados, ${errors} errores`);
}

copyAssets().catch(console.error);

