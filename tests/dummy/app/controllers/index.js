import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeColor(color) {
      this.set('color', color);
    }
  }
});
