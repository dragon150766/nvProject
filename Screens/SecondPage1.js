import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import styles from '../Style/Style';

function SecondPage({ navigation}){
 

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is SecondPage</Text>
        <Button
        title='go to first page' 
        onPress={() => { navigation.navigate('FirstPage')
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

export default SecondPage

