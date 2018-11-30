import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TrombiTabNavigator from '../navigation/TrombiTabNavigator';

export default class TrombiScreen extends React.Component {
  static navigationOptions = {
    title: 'Palo Club',
    headerStyle: {
      backgroundColor: '#05CC98',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <TrombiTabNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});