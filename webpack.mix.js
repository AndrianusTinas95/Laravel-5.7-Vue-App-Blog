const mix = require('laravel-mix');


mix.js([
   'resources/js/app.js',
   // 'resources/admin/vendors/jquery/dist/jquery.min.js',
   // 'resources/admin/vendors/popper.js/dist/umd/popper.min.js',
   // 'resources/admin/vendors/bootstrap/dist/js/bootstrap.min.js',
   'resources/admin/assets/js/main.js',
   // 'resources/admin/vendors/chart.js/dist/Chart.bundle.min.js',
   // 'resources/admin/assets/js/dashboard.js',
   // 'resources/admin/assets/js/widgets.js',
   // 'resources/admin/vendors/jqvmap/dist/jquery.vmap.min.js',
   // 'resources/admin/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js',
   // 'resources/admin/vendors/jqvmap/dist/maps/jquery.vmap.world.js',
   // 'public/js/admin.js',
   // 'resources/admin/vendors/datatables.net/js/jquery.dataTables.min.js',
   // 'resources/admin/vendors/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
   // 'resources/admin/vendors/datatables.net-buttons/js/dataTables.buttons.min.js',
   // 'resources/admin/vendors/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
   // 'resources/admin/vendors/jszip/dist/jszip.min.js',
   // 'resources/admin/vendors/pdfmake/build/pdfmake.min.js',
   // 'resources/admin/vendors/pdfmake/build/vfs_fonts.js',
   // 'resources/admin/vendors/datatables.net-buttons/js/buttons.html5.min.js',
   // 'resources/admin/vendors/datatables.net-buttons/js/buttons.print.min.js',
   // 'resources/admin/vendors/datatables.net-buttons/js/buttons.colVis.min.js',
   // 'resources/admin/assets/js/init-scripts/data-table/datatables-init.js',

],
   'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .styles([
      'resources/admin/vendors/bootstrap/dist/css/bootstrap.min.css',
      'resources/admin/vendors/font-awesome/css/font-awesome.min.css',
      'resources/admin/vendors/themify-icons/css/themify-icons.css',
      'resources/admin/vendors/flag-icon-css/css/flag-icon.min.css',
      'resources/admin/vendors/selectFX/css/cs-skin-elastic.css',
      'resources/admin/vendors/jqvmap/dist/jqvmap.min.css',
      'resources/admin/assets/css/style.css',
   ], 'public/css/app.css')
   .browserSync('http://localhost:8000');