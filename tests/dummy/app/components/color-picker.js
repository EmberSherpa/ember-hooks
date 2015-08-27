import Ember from 'ember';
import ComponentHooks from 'ember-hooks';

const {
  on,
  run
} = Ember;

export default Ember.Component.extend(ComponentHooks, {
  initializePlugin: on('didInsertElement', function(){
    this.$('.color-picker').spectrum({
      color: this.get('color'),
      change: run.bind(this, this.changeColor)
    });
  }),
  didUpdate() {
    const color = this.get('color');
    this.$('.color-picker').spectrum('set', color);
    this._super(...arguments);
  },
  changeColor(color) {
    this.send('changeColor', color.toHexString());
  },
  willDestroyElement() {
    this.$('.color-picker').spectrum('destroy');
    this._super(...arguments);
  },
  actions: {
    changeColor(color) {
      this.sendAction('on-select', color);
    }
  }
});
