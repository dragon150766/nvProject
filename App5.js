import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react';
import FirstPage from './Screens/FirstPage1';
import SecondPage from './Screens/SecondPage1';
import ThirdPage from './Screens/ThirdPage1';






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
        <Stack.Screen name='FirstPage' component={FirstPage}/>
        <Stack.Screen name='SecondPage' component={SecondPage}/>
        <Stack.Screen name='ThirdPage' component={ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




