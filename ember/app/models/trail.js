import DS from 'ember-data';

var attr = DS.attr;

var Trail = DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  latitude: attr('number'),
  longitude: attr('number'),
  location: attr('string')
});

export default Trail;
