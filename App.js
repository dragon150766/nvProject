import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


function HomeScreen({ navigation,route }){
  React.useEffect(() => {
    if(route.params?.post){
      //post update,do something with 'route.params.psot'
      //for example, sent the post to the server
    }
  },[route.params?.post]);

  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button 
      title='Create Post'
      color={'#739'}
      onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{color:'#45e7',margin:10}}>Post:{route.params?.post}</Text>

    </View>
  );

}

function CreatePostScreen({ navigation,route }){
  const [postText,setPostText] = React.useState('');

  return(
    // use fragment
    <> 
    <TextInput style={{height:200,padding:10,backgroundColor:'White',textAlign:'center'}}
    multiline
    placeholder='Plese text here'
    onChangeText={setPostText}
    value={postText}
    />
    <Button title='Done' onPress={() => {
      //pass params back to home screen function
      navigation.navigate('Home',{post: postText})
      }}
    />

    </>
    
  );

}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle:{backgroundColor:'#965'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold', fontSize:25}
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


