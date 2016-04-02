import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('ingredient', {path: '/ingredient/:ingredient_id'});
  this.route('recipe', {path: '/recipe/:recipe_id'});
});

export default Router;
