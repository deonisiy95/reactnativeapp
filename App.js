import React, {Component} from 'react';
import Router from './src/navigators';
import {Provider} from 'react-redux';
import store from './src/store';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
