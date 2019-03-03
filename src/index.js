import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store';
import Home from './components';

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
