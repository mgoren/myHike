import DS from 'ember-data';

var attr = DS.attr;

var Rating = DS.Model.extend({
  difficulty: attr('number'),
  funness: attr('number'),
  notes: attr('string'),
  user: DS.belongsTo('user', { async: true }),
  trail: DS.belongsTo('trail', { async: true })
});

export default Rating;
