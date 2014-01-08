// Module for removing Backbone from the global scope

define(["bb-raw"], function(bb) {
  bb.noConflict();       // Remove backbone from the global scope
  return bb;
});