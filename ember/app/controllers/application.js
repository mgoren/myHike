import Ember from "ember";

export default Ember.Controller.extend({
  hasVideo: function() {
    var currentPath = this.get('currentPath');
    return currentPath === "index";
  }.property()
});
