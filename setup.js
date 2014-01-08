require.config({

  baseUrl: 'lib/',

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
    'jasmine-blanket' : 'jasmine/jasmine-blanket'
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

require(['jquery', 'backbone', 'jasmine-html', 'jasmine-blanket'], function($, backbone, jasmine, blanket) {
  
  console.log(jasmine);
  console.log(backbone);
  
  // data-cover-only (everything that is tested)
  // include this in code coverage
  window.blanket.options('filter', ['app/']);
  
  // data-cover-never (testing specs and certain view / event specific classes)
  // dont't include this in code coverage
  window.blanket.options(
    'antifilter',
    ['test/',]
  );

  // 
  var specs = [];
  
  // App tests
  specs.push('spec/app/app.test.js');
  specs.push('spec/app/model.test.js');
  
  $(function(){
    require(specs, function(){
      
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 250;
      
      var htmlReporter = new jasmine.HtmlReporter();
      jasmineEnv.addReporter(htmlReporter);
      
      jasmineEnv.specFilter = function (spec) {
          return htmlReporter.specFilter(spec);
      };
      
      jasmineEnv.addReporter(new jasmine.BlanketReporter());
      jasmineEnv.currentRunner().execute();
    });
  });
});
