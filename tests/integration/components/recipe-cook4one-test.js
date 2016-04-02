import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recipe-cook4one', 'Integration | Component | recipe cook4one', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recipe-cook4one}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recipe-cook4one}}
      template block text
    {{/recipe-cook4one}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
