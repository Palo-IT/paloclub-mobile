import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import TrombiScreen from '../screens/TrombiScreen'
import TrombiTabNavigator from './TrombiTabNavigator';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ActivitiesStack = createStackNavigator({
  Activities: ActivitiesScreen,
});

ActivitiesStack.navigationOptions = {
  tabBarLabel: 'Activities',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const ProfilStack = createStackNavigator({
  Profil: ActivitiesScreen,
});

ProfilStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const TrombiStack = createStackNavigator({
  Settings: TrombiTabNavigator,
});

TrombiStack.navigationOptions = {
  tabBarLabel: 'Trombi',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  TrombiStack,
  ProfilStack,
  ActivitiesStack,
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
});
