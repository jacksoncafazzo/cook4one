import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(ingredient, params) {
      this.sendAction('update', ingredient, params);
    },
    delete(ingredient) {
      if (confirm('Are you sure you want to delete this ingredient?')) {
        this.sendAction('destroyIngredient', ingredient);
      }
    }
  }
});
