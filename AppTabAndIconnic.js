import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(97, 201, 246)",
    background: "rgb(300, 300, 300)",
    card: "rgb(158, 177, 213)",
    text: "rgb(0, 0, 0)",
    border: "rgb(80, 138, 222)",
    notification: "rgb(80, 138, 222)",
  },
};

function HomeScreen () {
  return(
    <View style={styles.tabViewStyle}>
      <Text>Home!</Text>
      
    </View>
  )
}

function SettingsScreen () {
  return(
    <View style={styles.tabViewStyle}>
      <Text>Settings!</Text>
      
    </View>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  tabViewStyle:{
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
})