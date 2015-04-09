import Ember from 'ember'

export default Ember.Route.extend({
<<<<<<< HEAD
  model: function(params) {
=======
  model: function() {
>>>>>>> abc2ee647f2ebdaf5205b55504fa15ca132df3bd
    return this.store.find('rating');
  }
});
