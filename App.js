/* import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer'; */

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Timer from './components/Timer';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducer from "./reducer"

let store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}></View>
      <Provider store={store}>
        <Timer></Timer>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
