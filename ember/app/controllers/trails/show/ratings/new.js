import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['trails/show'],
  actions: {
    save: function() {
      var rating = this.get('model');
      var trail = this.get('controllers.trails/show').model;
      rating.set('trail', trail);
      // rating.user_id = 1;
      rating.save();
      this.transitionToRoute('trails');
    }
  }
});
