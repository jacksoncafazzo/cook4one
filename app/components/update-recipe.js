import Ember from 'ember';

export default Ember.Component.extend({
  updateRecipeForm: false,
  actions: {
    updateRecipeForm() {
      this.set('updateRecipeForm', true);
    },
    update(recipe) {
      var params = {
        name: this.get('name'),
        servings: this.get('servings'),
        cook_time: this.get('cook_time'),
        directions: this.get('directions'),
        image: this.get('image'),
      };
      this.set('updateRecipeForm', false);
      this.sendAction('update', recipe, params);
    }
  }
});
