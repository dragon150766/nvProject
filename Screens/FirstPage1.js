import {Text, View, Button } from 'react-native'
import React from 'react'
import nStyle from '../Style/nStyle'


function FirstPage({ navigation}){
 

  return(
    <>
      <View style={nStyle.container}>
        <Text style={nStyle.textBottomStyle}>This is FirstPage</Text>
        <Button
        title='go to second page' 
        onPress={() => { navigation.navigate('SecondPage')
        }}/>
        <Button
        title='go to third page' 
        onPress={() => { navigation.navigate('ThirdPage')
        }}/>

      </View>
      <View style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</View>
    </>
  );

}

export default FirstPage

