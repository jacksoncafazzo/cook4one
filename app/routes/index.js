import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      recipes: this.store.findAll('recipe'),
      ingredients: this.store.findAll('ingredient'),
      userIngredients: this.store.findAll('userIngredients')
    });
  },
  actions: {
    update(recipe, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          recipe.set(key,params[key]);
        }
      });
      recipe.save();
      this.transitionTo('index');
    },
    saveRecipe(params) {
      var newRecipe = this.store.createRecord('recipe', params);
      newRecipe.save();
      console.log(newRecipe);
      this.transitionTo('index');
    },
    saveIngredient(params) {
      var newIngredient = this.store.createRecord('ingredient', params);
      newIngredient.save();
      console.log("this is your new ingredient", newIngredient);
      this.transitionTo('index');
    },
    destroyIngredient(ingredient) {
      ingredient.destroyRecord();
      this.transitionTo('index');
    },
    destroyRecipe(recipe) {
      recipe.destroyRecord();
      this.transitionTo('index');
    }

  }
});
