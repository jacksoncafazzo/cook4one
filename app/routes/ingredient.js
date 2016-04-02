import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ingredient', params.ingredient_id);
  },
  actions: {
    update(ingredient, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          ingredient.set(key,params[key]);
        }
      });
      ingredient.save();
      this.transitionTo('ingredient');
    }
  }
});
