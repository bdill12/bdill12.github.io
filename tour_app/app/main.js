requirejs.config({
  paths: {
    'text': '../bower_components/requirejs-text/text',
    'durandal':'../bower_components/durandal/js',
    'plugins' : '../bower_components/durandal/js/plugins',
    'transitions' : '../bower_components/durandal/js/transitions',
    'moment': '../bower_components/moment/min/moment.min',
    'knockout': '../bower_components/knockout.js/knockout',
    'jquery': '../bower_components/jquery/jquery.min',
    'sweetalert': '../bower_components/sweetalert/dist/sweetalert.min'
        }
});


define(function (require) {
   var system = require('durandal/system'),
       app = require('durandal/app');

   system.debug(true);

   app.title = 'WB Studios Tour Hollywood';

   app.configurePlugins({
     router: false,
     dialog: false
   });

   app.start().then(function() {
     app.setRoot('shell');
   });
});

