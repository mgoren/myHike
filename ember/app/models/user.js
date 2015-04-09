import DS from 'ember-data';

var attr = DS.attr;

var User = DS.Model.extend({
  email: attr('string', { async: true }),
  password: attr('string', { async: true }),
  password_confirmation: attr('string', { async: true }),
  ratings: DS.hasMany('rating', { async: true })
});

export default User;
