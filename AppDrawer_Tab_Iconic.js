import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




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

function HomeScreen ({ navigation }) {
  return(
    <View style={styles.tabViewStyle}>
      <Ionicons name='home' color={'blue'} size={40}/>
      <Text>Home Screen</Text>
    </View>
  )
}

function SettingsScreen ({ navigation }) {
  return(
    <View style={styles.tabViewStyle}>
      <Text>Settings!</Text>
      <Button
      title='Go to Home Screen'
      onPress = { () => {navigation.navigate('Home')} }
      />
    
    </View>
  )
}


function CustomDrawerContent(props) {

  return (
   
    <SafeAreaView style={{flex:1}}>
      
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     
    </DrawerContentScrollView>
    </SafeAreaView>
    
  );
}



function TabNav() {
  return(
    <Tab.Navigator
        
        screenOptions =
        
          {({ route}) => ({tabBarIcon: ({focused, colors, size}) =>{
            let iconName;
            if(route.name ==='Home'){
              iconName = focused?
              'ios-information-circle'
              :'ios-information-circle-outline';
            } else if(route.name === 'Settings'){
              iconName = focused?
              'ios-list-box' 
              :'ios-list';
            }

            return <Ionicons name={iconName} size={size} colors={colors}/>;
          },
          tabBarActiveTintColor:'tomato',
          tabBarInactiveTintColor:'gray',
          headerRight: () => (<Ionicons name="person-add-outline" color={'black'} size={24}/>)
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
        
      </Tab.Navigator>
  )
}

function TabNav2() {
  return(
    <Tab.Navigator
        
        screenOptions =
        
          {({ route}) => ({tabBarIcon: ({focused, colors, size}) =>{
            let iconName;
            if(route.name ==='Home'){
              iconName = focused?
              'ios-information-circle'
              :'ios-information-circle-outline';
            } else if(route.name === 'Settings'){
              iconName = focused?
              'ios-list-box' 
              :'ios-list';
            }

            return <Ionicons name={iconName} size={size} colors={colors}/>;
          },
          tabBarActiveTintColor:'tomato',
          tabBarInactiveTintColor:'gray',
          headerRight: () => (<Ionicons name="person-add-outline" color={'black'} size={24}/>)
        })}
      >
        
        <Tab.Screen name='Settings' component={SettingsScreen}/>
        <Tab.Screen name='Home' component={HomeScreen}/>
      </Tab.Navigator>
  )
}


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
            width: 200,
          },
        }}
      >
        <Drawer.Screen name='Home' component={TabNav} />
        <Drawer.Screen name='Settings' component={TabNav2} />

        
      </Drawer.Navigator>

      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  tabViewStyle:{
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
})