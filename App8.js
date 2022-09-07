import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react';
import FirstPage1 from './Screens/FirstPage1';
import SecondPage1 from './Screens/SecondPage1';
import ThirdPage1 from './Screens/ThirdPage1';






const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle:{backgroundColor:'#965'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold', fontSize:25}
        }}
      >
        <Stack.Screen name='FirstPage1' component={FirstPage1}/>
        <Stack.Screen name='SecondPage1' component={SecondPage1}/>
        <Stack.Screen name='ThirdPage1' component={ThirdPage1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




