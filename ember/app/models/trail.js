import DS from 'ember-data';

// var attr = DS.attr;

var Trail = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  location: DS.attr('string')
});

export default Trail;
