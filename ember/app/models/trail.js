import DS from 'ember-data';

// var attr = DS.attr;

var Trail = DS.Model.extend({
  name: DS.attr('string', { async: true }),
  description: DS.attr('string', { async: true }),
  latitude: DS.attr('number', { async: true }),
  longitude: DS.attr('number', { async: true }),
  location: DS.attr('string', { async: true }),
  ratings: DS.hasMany('rating', { async: true })
});

export default Trail;
