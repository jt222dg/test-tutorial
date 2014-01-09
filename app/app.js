define(function(require) {
  var Model = require('app/model');
  
  return {
    model : new Model(),
    
    save : function() {
      this.model.save();
    }
    
  };
  
});