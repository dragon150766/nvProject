import {Text, View, Button } from 'react-native'
import React from 'react'
import { extendStyle } from '../Style/extendStyle';

function FirstPage({ navigation}) {
 return(
    <>
      <View style={extendStyle.container}>
        <Text style={extendStyle.textTopStyle}>This is FirstPage</Text>
        <Button
        title='go to second page' 
        onPress={() => { navigation.navigate('SecondPage1')
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

export default FirstPage

