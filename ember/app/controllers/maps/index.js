import Ember from 'ember';

// Can't seem to get Geolocation to work properly. Shelving this for now.

// Get user's coordinates if able
// function askForLocation() {
  var lat, lng;

  if (navigator.geolocation) {
    // Fallback coordinates for when Geolocation isn't available/allowed.
    lat = 37.7749295;   // San Francisco
    lng = -122.4194155; // San Francisco
    lat = 45.5230622;   // Portland
    lng = -122.6764816; // Portland
    navigator.geolocation.getCurrentPosition(
    // Success
    function(position) {
      // debugger;
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      // map.setCenter(new google.maps.LatLng(lat, lng));
    },
    // Failure
    function() {
      // Some code
    });
  } else {
    // Fallback for UA's witout geolocation
  }
// }

// google.maps.event.addDomListener(window, 'load', askForLocation);

export default Ember.ArrayController.extend({
  zoom: 8,
  lat: lat,
  lng: lng
});
