import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      var trail = this.get('model');
      trail.save();
      this.transitionToRoute('trails');
    }
  }
});
