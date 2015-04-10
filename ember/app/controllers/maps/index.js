import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    setLocation: function() {
      if (navigator.geolocation) {
        // Fallback coordinates for when Geolocation isn't available/allowed.
        Ember.set(this, "lat", 37.7749295); // San Francisco
        Ember.set(this, "lng", -122.4194155); // San Francisco
        Ember.set(this, "lat", 45.5230622);
        Ember.set(this, "lng", -122.6764816);
        navigator.geolocation.getCurrentPosition(
        // Success
        function(position) {
          console.log("Geolocation Success");
          console.log("googleMap: " + googleMap);
          Ember.set(this, "lat", position.coords.latitude);
          Ember.set(this, "lng", position.coords.longitude);
        },
        // Failure
        function() {
          console.log("Geolocation Failure");
          Ember.set(this, "lat", 45.5230622);
          Ember.set(this, "lng", -122.6764816);
        });
      } else {
        console.log("Geolocation non-existant");
        Ember.set(this, "lat", 45.5230622);
        Ember.set(this, "lng", -122.6764816);
      }
    }
  },
  zoom: 8
});
