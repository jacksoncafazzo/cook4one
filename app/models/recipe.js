import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  servings: DS.attr(),
  cook_time: DS.attr(),
  directions: DS.attr(),
  image: DS.attr(),
  ingredients: DS.hasMany('ingredient', { async: true })
});
