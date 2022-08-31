import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

function HomeScreen ({navigation}){
  return(  
      <View  style={{flex: 1,alignItems:'center',justifyContent:'center' }}>
      <Text>App</Text>
      <Button
      onPress={() => navigation.navigate('Notifications')}
      title= 'Go to Notifications'
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
      onPress={() => navigation.goBack()} 
      title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Notifications' component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

export default App

const styles = StyleSheet.create({})


