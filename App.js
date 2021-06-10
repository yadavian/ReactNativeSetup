// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import DetailScreen from './src/Screens/DetailScreen';
import ProductTab from './src/Tabs/ProductTab';
import Stacks from './src/Stacks/Stacks';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Stacks} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
