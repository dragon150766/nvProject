import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { extendStyle } from '../Style/extendStyle';

function SecondPage({ navigation}){
 

  return(
    <>
      <View style={extendStyle.container}>
        <Text style={extendStyle.textTopStyle}>This is SecondPage</Text>
        <Button
        title='go to first page' 
        onPress={() => { navigation.navigate('FirstPage1')
        }}/>
        <Button
        title='go to third page' 
        onPress={() => { navigation.navigate('ThirdPage1')
        }}/>

      </View>
      <View style={extendStyle.textBottomStyle}>Thai-Nichi Institute of Technology</View>
    </>
  );

}

export default SecondPage

