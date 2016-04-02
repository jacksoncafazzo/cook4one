import Ember from 'ember';

export default Ember.Component.extend({
  updateIngredientForm: false,
  actions: {
    updateIngredientForm() {
      this.set('updateIngredientForm', true);
    },
    update(ingredient) {
      var params = {
        measurement: this.get('measurement'),
        units: this.get('units'),
        name: this.get('name'),
        source: this.get('source'),
        recipe: this.get('recipe'),
      };
      this.set('updateIngredientForm', false);
      this.set('measurement', "");
      this.set('units', "");
      this.set('name', "");
      this.set('source', "");
      this.sendAction('update', ingredient, params);
    }
  }
});
