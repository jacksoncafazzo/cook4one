import DS from 'ember-data';

export default DS.Model.extend({
  measurement: DS.attr(),
  units: DS.attr(),
  name: DS.attr(),
  source: DS.attr(),
  recipe: DS.belongsTo('recipe', { async: true })
});
