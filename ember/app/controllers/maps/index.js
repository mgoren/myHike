import Ember from 'ember';

export default Ember.ArrayController.extend({
  zoom: 8,
  // Default initial map view to Portland
  lat: 45.5230622,
  lng: -122.6764816
});
