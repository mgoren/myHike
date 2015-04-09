import Ember from 'ember';

export default Ember.ArrayController.extend({
  showSearch: false,
  actions: {
    setShowSearch: function() {
      Ember.set(this, 'showSearch', true);
    },
    hideSearchBox: function() {
      Ember.set(this, 'search', '')
      Ember.set(this, 'showSearch', false);
    }
  },
  trails: (function() {
      if (this.get('search')) {
        return this.get('searchedTrails');
      } else {
        return this;
      }
    }).property('search', 'searchedTrails'),
    searchedTrails: (function() {
      var search;
      search = this.get('search').toLowerCase();
      return this.filter((function(_this) {
        return function(trail) {
          return trail.get('name').toLowerCase().indexOf(search) !== -1;
        };
      })(this));
    }).property('search', '@each.name')
});
