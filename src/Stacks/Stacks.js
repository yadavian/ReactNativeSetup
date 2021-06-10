import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import ProductTab from '../Tabs/ProductTab';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Product" component={ProductTab} />
    </Stack.Navigator>
  );
}
