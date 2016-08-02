/**
 * Sample React Native Desktop App
 * https://github.com/ptmt/react-native-desktop
 */
import React from 'react';
import ReactNative from 'react-native-desktop';
import Main from './Main.js';
import MainStore from './store/MainStore.js';
const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = ReactNative;

const pm25 = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <Main store={MainStore}/>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('pm25', () => pm25);
