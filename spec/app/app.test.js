define(function(require) {
  
  var App = require('app/app');
  
  var jasmine  = require('jasmine-html');
  var _        = require('underscore');
  var Backbone = require('backbone');
  
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
    
    env.describe('App.model databsae operations', function() {
      
      env.it('app.save() calls BackBone.sync()', function() {
        
        this.spec.spyOn(Backbone, 'sync').andCallFake(function() {
        });
        
        App.save();
        
        this.spec.expect(Backbone.sync).toHaveBeenCalled();
        
      });
      
    });
  });
  
});