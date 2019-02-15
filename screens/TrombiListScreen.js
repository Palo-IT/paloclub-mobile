import React from 'react';
import { ScrollView, StyleSheet, View, FlatList, Text } from 'react-native';
import UserList from '../components/UserList'

export default class TrombiListScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
    <View style={styles.container}>
       <View style={styles.container}>
        <UserList data={sampleData} />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});


const sampleData = [
  {
    name: { title: 'mr', first: 'Kevin', last: 'Seysen' },
    email: 'kseysen@epalo-it.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mrs', first: 'asuncion', last: 'gomez' },
    email: 'asuncion.gomez@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    },
    nat: 'ES',
  },
  {
    name: { title: 'miss', first: 'gilcenira', last: 'ribeiro' },
    email: 'gilcenira.ribeiro@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
  },
]
