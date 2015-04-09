import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('protected');
  this.route('login');

  this.resource('users', function() {
    this.route('index', {path: '/'});
    this.route('new');
  });

  this.resource('user', {path: '/users/:user_id'}, function() {
    this.route('index', {path: '/'});
  });

  this.route('maps', function() {
    this.route('index');
  });

  this.route('about', function() {
    this.route('index');
  });

  this.resource('trails', function() {
    this.route('index', {path: '/'});
    this.route('new');
    this.route('show', {path: '/:trail_id'}, function() {
      this.route('edit');
    });
  });

});
