import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondPage = ({navigation,route}) => {
    React.useEffect(() => {
        if(route.params?.post){
          //post update,do something with 'route.params.psot'
          //for example, sent the post to the server
        }
      },[route.params?.post]);

  return (
    <>
    <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of </Text>
        <Text style={{fontSize: 25,  textAlign: 'center'}}>Technology</Text>
        <Text style={styles.textStyle}>Values passed from First page:{route.params?.post}</Text>
    </View>
    <Text style={{position: 'absolute', left: 0, right: 0, bottom: 0 , textAlign:'center'}}>www.tni.ac.th</Text>
    </>
    
  )
}

export default SecondPage

const styles = StyleSheet.create({
    container: {  flex: 1,  alignItems: 'center',  padding: 20,  }, 
    heading: {  fontSize: 25,  textAlign: 'center',  marginVertical: 10,  },  textStyle: {  textAlign: 'center',  fontSize: 16,  marginVertical: 10,  }, 
  }); 