define(function(require) {
  var Model = require('app/model');
  var View  = require('app/view');
  
  return {
    model : new Model(),
    view  : new View(),
    
    save : function() {
      this.model.save();
    }
    
  };
  
});