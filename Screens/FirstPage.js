import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

const FirstPage = ({navigation,route}) => {
    const [postText,setPostText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of </Text>
      <Text style={{fontSize: 25,  textAlign: 'center'}}>Technology</Text>
      <Text style={styles.textStyle}>Please insert your name to pass it to second screen</Text>
      <TextInput style={{height:50,padding:10,color:'red',textAlign:'center',backgroundColor:'#f651'}}
        multiline
        placeholder='Plese text here'
        onChangeText={setPostText}
        value={postText}
      />
      <View style={styles.container}>
      <Button style={{margin:10}}
        title='go next' 
        onPress={() => { navigation.navigate('SecondPage',{post: postText})
        }}
        //pass params back to home screen function
      />
      </View>
      </View>
      <Text style={{position: 'absolute', left: 0, right: 0, bottom: 0 , textAlign:'center'}}>www.tni.ac.th</Text>
    </>
    
    
  )
}

export default FirstPage

const styles = StyleSheet.create({
      container: {  flex: 1,  alignItems: 'center',  padding: 20,  }, 
      heading: {  fontSize: 25,  textAlign: 'center',  marginVertical: 10,  },  textStyle: {  textAlign: 'center',  fontSize: 16,  marginVertical: 10,  }, 
    }); 