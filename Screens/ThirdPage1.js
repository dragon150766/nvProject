import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { extendStyle } from '../Style/extendStyle';

function ThirdPage({ navigation}){

  return(
    <>
      <View style={extendStyle.container}>
        <Text style={extendStyle.textTopStyle}>This is ThirdPage</Text>
        <Button
        title='go to first page' 
        onPress={() => { navigation.navigate('FirstPage1')
        }}/>
        <Button
        title='go to second page' 
        onPress={() => { navigation.navigate('SecondPage1')
        }}/>

      </View>
      <View style={extendStyle.textBottomStyle}>Thai-Nichi Institute of Technology.</View>
    </>
  );

}

export default ThirdPage

