import Ember from "ember";

export default Ember.Route.extend({
  activate: function() {
    alert("activated!");
    Ember.$('body').addClass('video');
  },

  deactivate: function() {
    Ember.$('body').removeClass('video');
  }
});
