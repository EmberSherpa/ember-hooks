# ember-hooks

EmberCLI addon that provides an Ember Component Mixin for logging Glimmer hooks and actions triggered by a component.

![http://g.recordit.co/MdFOEnvvQn.gif](http://g.recordit.co/MdFOEnvvQn.gif)

**This library is provided for debugging purposes only.**

## Use intructions

Mixin the provided mixin and watch the console logs.

```
import Ember from 'ember';
import Hooks from 'ember-hooks';

export default Ember.Component.extend(Hooks, {
  
});
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
