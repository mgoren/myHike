import DS from 'ember-data';

var attr = DS.attr;

var User = DS.Model.extend({
  email: attr('string'),
  password: attr('string'),
  password_confirmation: attr('string')
});

export default User;