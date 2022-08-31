import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../Style/Style';

function ThirdPage({ navigation}){

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is ThirdPage</Text>
        <Button
        title='go to first page' 
        onPress={() => { navigation.navigate('FirstPage')
        }}/>
        <Button
        title='go to second page' 
        onPress={() => { navigation.navigate('SecondPage')
        }}/>

      </View>
      <View style={styles.textBottomStyle}>Thai-Nichi Institute of Technology.</View>
    </>
  );

}

export default ThirdPage

