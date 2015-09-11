import Ember from 'ember';

const {
  on
} = Ember;

export default Ember.Mixin.create({
  // called by the rendered
  // called everytime that bound property is changed
  // coalesced by run loop
  didReceiveAttrs: logNoSuper('didReceiveAttrs'),
  // before rendering begins
  // called by the renderer
  // unreleted to attribute changes
  willRender: log('willRender'),
  // called once when component rendered initially
  // setup jquery plugin
  didInsertElement: log('didInsertElement'),
  // called after attrs changed after initial render
  // called before DOM is updated (pre-render)
  didUpdateAttrs: log('didUpdateAttrs'),
  // about to change DOM, (not 100%)
  // might be called when there are no changes to DOM
  willUpdate: log('willUpdate'),
  // 2nd and future renders
  // post update
  didUpdate: log('didUpdate'),
  // called everytime that changes are made (no matter what causes the rerender)
  didRender: log('didRender'),
  // when element is being torn down
  willDestroyElement: log('willDestroyElement'),
  // DOM element is removed
  didDestroyElement: log('didDestroyElement'),

  instrumentActions: on('init', instrumentActions)
});

function log(hook) {
  return function() {
    this._super(...arguments);
    const name = this.elementId || this.construtor.toString();
    console.log(`${name} called ${hook} hook with`, arguments);
  };
}

function logNoSuper(hook) {
  return function() {
    const name = this.elementId || this.construtor.toString();
    console.log(`${name} called ${hook} hook with`, arguments);
  };
}

function instrumentActions(){
  let actions = this._actions;
  if (!actions) {
    return;
  }
  Object.keys(actions).forEach(function(actionName){
    const callback = actions[actionName];
    actions[actionName] = function() {
      const name = this.elementId || this.construtor.toString();
      console.log(`${name} called action ${actionName} with `, arguments);
      return callback.apply(this, arguments);
    };
  });
}
