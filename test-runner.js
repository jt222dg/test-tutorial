define(function(require) {
  
  var $       = require('jquery');
  var jasmine = require('jasmine-html');
                require('jasmine-blanket');
  
  return {
    specs : [],
    
    initialize : function() {
      // data-cover-only
      window.blanket.options('filter', ['app/']);
      
      // data-cover-never
      window.blanket.options('antifilter',['test/','app/view']);
    
      // Test specifications
      this.specs = [];
      
      // App tests
      this.specs.push('spec/app/app.test.js');
      this.specs.push('spec/app/model.test.js');
    },
    
    execute : function() {
      var that = this;
      
      $(function(){
        require(that.specs, function(){
          
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
    }
  };
  
});