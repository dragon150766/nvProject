import { View, Text , Button} from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

const AboutScreen = ({route}) => {

    // const { email } = route.params;

  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
      <AntDesign name='google' size={50} color='#948'/>
      <Text style = {{color:'#448'}}>About Screen</Text>
      {/* <Text style = {{color:'#ca6'}}> Email : {email}</Text> */}
      <Text style = {{color:'#143'}}> Email : {route.params.email}</Text>
      
    </View>
  )
}

export default AboutScreen