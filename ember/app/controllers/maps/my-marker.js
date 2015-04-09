import Ember from 'ember';
import GoogleMapMarkerController from '../google-map/marker';

export default GoogleMapMarkerController.extend({
  lat: Ember.computed.alias('this.latitude'),
  lng: Ember.computed.alias('this.longitude')
});
