import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('protected');
  this.route('login');
  this.resource('user', {path: 'users/:user_id' }, function() {
    this.route('ratings', function() {
      this.route('new');
    });
  });

  this.route('users', function() {
    this.route('new');
  });

  this.route('maps', function() {
    this.route('index');
  });

  this.route('about', function() {
    this.route('index');
  });

  this.resource('trails', function() {
    this.route('index', {path: '/'});
    this.route('show', {path: '/:trail_id'}, function() {
      this.route('edit');
    });
    this.route('new');
  });


});
