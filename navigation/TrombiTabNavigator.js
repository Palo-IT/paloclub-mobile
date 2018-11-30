import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TrombiListScreen from '../screens/TrombiListScreen';
import TrombiMapScreen from '../screens/TrombiMapScreen';


const TrombiListStack = createStackNavigator({
  Settings: TrombiListScreen,
});

TrombiListStack.navigationOptions = {
  tabBarLabel: 'Liste',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const TrombiMapStack = createStackNavigator({
  Settings: TrombiMapScreen,
});

TrombiMapStack.navigationOptions = {
  tabBarLabel: 'Carte',
  title: 'Header title',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default createMaterialTopTabNavigator({
  TrombiListStack,
  TrombiMapStack,
}, {
  tabBarOptions: {
    activeTintColor: '#05CC98',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#fff',
    },
    indicatorStyle: {
      backgroundColor: '#05CC98',
    },
  },
}
);
