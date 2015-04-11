import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getLocation: function() {
      var lat, lng;
      var map = this;
      if (navigator.geolocation) {
        // Fallback coordinates in case something goes horribly wrong.
        lat = 37.7749295;   // San Francisco
        lng = -122.4194155; // San Francisco
        navigator.geolocation.getCurrentPosition(
          // getLocation Success
          function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            map.setProperties({lat: lat, lng: lng});
          },
          // getLocation Failure
          function() {
            lat = 34.0522342;   // Los Angeles
            lng = -118.2436849; // Los Angeles
            map.setProperties({lat: lat, lng: lng});
          },
          // getLocation Settings
          { maximumAge: 60000,
            timeout: 7000,
            enableHighAccuracy: true
          });
      } else {
        // getLocation not available
        lat = 37.7749295;   // San Francisco
        lng = -122.4194155; // San Francisco
        map.setProperties({lat: lat, lng: lng});
      }
      // Ensure the googleMap object has something to work with when initially
      // loaded.
      map.setProperties({lat: lat, lng: lng});
    }
  },
  zoom: 8
});
