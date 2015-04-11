import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('trail');
  },
  actions: {
    loading: function() {
      this.controllerFor('maps.index').send('getLocation');
    }
  }
});
