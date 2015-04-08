import Ember from 'ember';

export default Ember.Controller.extend({
  authenticator: 'simple-auth-authenticator:devise',
  actions: {
    save: function(){
      var user = this.get('model');
      user.save();
      this.transitionToRoute('login');
    }
  }
});
