import Ember from 'ember';

export default Ember.Component.extend({
  isCook4One: false,
  actions: {
    showCook4one() {
      this.set('isCook4One', true);
    },
    hideCook4one() {
      this.set('isCook4One', false);
    }
  }
});
