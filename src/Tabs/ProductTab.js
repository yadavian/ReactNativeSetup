import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../Screens/FeedScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

const Tab = createBottomTabNavigator();
export default function ProductTab({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailScreen} />
    </Tab.Navigator>
  );
}
