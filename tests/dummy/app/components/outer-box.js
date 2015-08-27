import Ember from 'ember';
import ComponentHooks from 'ember-hooks';

export default Ember.Component.extend(ComponentHooks, {
  classNames: ['outer-box'],
  didReceiveAttrs() {
    this._super(...arguments);
    // copy received value into private property
    this.set('_color', this.get('color'));
  },
  actions: {
    changeColor(color) {
      this.set('_color', color);
    },
    resetColor() {
      this.set('_color', this.get('color'));
    }
  }
});
