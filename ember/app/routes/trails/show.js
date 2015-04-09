// this is all optional - it does this automatically

import Ember from 'ember';

var TrailsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('trail', params.trail_id)
  }
});

export default TrailsShowRoute;
