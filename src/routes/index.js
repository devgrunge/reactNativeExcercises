import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home'
import ShowHour from '../pages/showHour'
import FlatList from '../pages/flatList'
import Photos from '../pages/photos'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />   
        <Tab.Screen name="Show Hour" component={ShowHour} />   
        <Tab.Screen name="Flat List" component={FlatList} /> 
        <Tab.Screen name="Photos" component={Photos} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}