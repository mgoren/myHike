import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function(){
      var trail = this.get('model');
      trail.save();
      this.transitionToRoute('trails');
    }
  }
});
