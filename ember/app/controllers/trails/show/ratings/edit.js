import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function() {
      var rating = this.get('model');
      rating.save();
      this.transitionToRoute('trails');
    }
  }
});
