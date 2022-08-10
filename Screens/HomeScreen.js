import { View, Text ,Button } from 'react-native'
import React from 'react'

import{Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
      <AntDesign name='alipay-square' size={50} color='blue'/>
      <Text style = {{color:'#448'}}>Home Screen</Text>
      <Button 
      color={'#687'}
      title='About Me' 
      onPress={() => navigation.navigate('About', {
        email:'reactnavite.tni.ac.th'}
        )}
      />
      
    </View>
  )
}

export default HomeScreen