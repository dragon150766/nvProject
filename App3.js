import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './Screens/FirstPage';
import SecondPage from './Screens/SecondPage';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


