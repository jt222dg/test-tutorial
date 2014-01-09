define(function(require) {
  
  var App = require('app/app');
  
  var jasmine  = require('jasmine-html');
  var _        = require('underscore');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/collection/scores", function() {
    
    env.beforeEach(function() {
      this.spec = env.currentSpec;
    });
    
    env.afterEach(function() {
      this.spec = undefined;
    });
      
    env.describe('definition and instantiation', function() {
      
      env.it('is defined', function() {
        this.spec.expect(App).toBeDefined();
      });
      
    });
  });
  
});