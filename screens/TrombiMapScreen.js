import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { MapView } from 'expo';


export default class TrombiMapScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 48.866667,
        longitude: 2.333333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
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