define(function(require) {
  var Backbone = require('backbone');
  
  return Backbone.Model.extend({
    onSave : function() {
      this.save();
    }
  });
  
});