import Ember from 'ember';

export default Ember.Component.extend({
  areDirectionsShowing: false,
  actions: {
    delete(recipe) {
      if (confirm('Are you sure you want to delete this recipe?')) {
            this.sendAction('destroyRecipe', recipe);
      }
    },
    update(recipe, params) {
      this.sendAction('update', recipe, params);
    },
    directionsShow: function() {
      this.set('areDirectionsShowing', true);
    },
    directionsHide: function() {
      this.set('areDirectionsShowing', false);
    }

  }
});
