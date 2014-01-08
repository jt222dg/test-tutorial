require.config({

  // Base path
  baseUrl: 'lib/',

  // Other paths, relative to base path
  paths: {
    // Base folder paths
    app               : '../app',
    spec              : '../spec',
    
    // Lib paths
    jquery            : 'jquery/jquery.min',
    'bb-raw'          : 'backbone/backbone.min',
    backbone          : 'backbone/backbone-module',
    underscore        : 'underscore/underscore.min',
    jasmine           : 'jasmine/jasmine',
    'jasmine-html'    : 'jasmine/jasmine-html',
    'jasmine-blanket' : 'jasmine/jasmine-blanket',
    'test-runner'     : '../test-runner'
  },
  
  shim: {
    'bb-raw' : {
      deps    : ['underscore', 'jquery'],
      exports : 'Backbone'
    },
    'underscore' : {
      exports : '_'
    },
    jasmine : {
      exports : 'jasmine'
    },
    'jasmine-html' : {
      deps    : ['jasmine'],
      exports : 'jasmine'
    },
    'jasmine-blanket' : {
      deps    : ['jasmine'],
      exports : 'jasmine'
    }
  }
});

require(['test-runner'], function(Testrunner) {
  Testrunner.initialize();
  Testrunner.execute();
});
