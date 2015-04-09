// Get user's coordinates if able
// function askForLocation() {
  var lat, lng;

  if (navigator.geolocation) {
    // Fallback coordinates for when Geolocation isn't available/allowed.
    lat = 37.7749295;
    lng = -122.4194155;
    navigator.geolocation.getCurrentPosition(
    // Success
    function(position) {
      debugger;
      lat = position.coords.latitude;
      lng = position.coords.longitude;
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
