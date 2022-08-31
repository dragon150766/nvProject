import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react';




function FirstPage({ navigation}){
 

  return(
    <>
      <View style={style.container}>
        <Text style={style.textTopStyle}>This is FirstPage</Text>
        <Button
        title='go to second page' 
        onPress={() => { navigation.navigate('SecondPage')
        }}/>
        <Button
        title='go to third page' 
        onPress={() => { navigation.navigate('ThirdPage')
        }}/>

      </View>
      <View style={style.textBottomStyle}>Thai-Nichi Institute of Technology</View>
    </>
  );

}

function SecondPage({ navigation}){
 

  return(
    <>
      <View style={style.container}>
        <Text style={style.textTopStyle}>This is SecondPage</Text>
        <Button
        title='go to first page' 
        onPress={() => { navigation.navigate('FirstPage')
        }}/>
        <Button
        title='go to third page' 
        onPress={() => { navigation.navigate('ThirdPage')
        }}/>

      </View>
      <View style={style.textBottomStyle}>Thai-Nichi Institute of Technology</View>
    </>
  );

}

function ThirdPage({ navigation}){

  return(
    <>
      <View style={style.container}>
        <Text style={style.textTopStyle}>This is ThirdPage</Text>
        <Button
        title='go to first page' 
        onPress={() => { navigation.navigate('FirstPage')
        }}/>
        <Button
        title='go to second page' 
        onPress={() => { navigation.navigate('SecondPage')
        }}/>

      </View>
      <View style={style.textBottomStyle}>Thai-Nichi Institute of Technology</View>
    </>
  );

}


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

const style = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textTopStyle:{
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 16
    },
    textBottomStyle:{
      fontSize: 16,
      textAlign: 'center',
      color: 'gray',
      marginBottom: 16
    }
})


