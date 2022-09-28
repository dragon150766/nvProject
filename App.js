import * as React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreenDrwaer from "./Screens/HomeScreenDrwaer";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductScreen from "./Screens/ProductScreen";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(97, 201, 246)",
    background: "rgb(300, 300, 300)",
    card: "rgb(158, 177, 213)",
    text: "rgb(144, 130, 250)",
    border: "rgb(80, 138, 222)",
    notification: "rgb(80, 138, 222)",
  },
};

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      /> */}
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Yoggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}


function CustomDrawerContent(props) {

  return (
   
    <SafeAreaView style={{flex:1}}>
      <Image source={require('./assets/react_logo.png')} style={styles.sideMenuProfileIcon}/>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
    </SafeAreaView>
    
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  
  return (
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
      <Drawer.Screen name="Home" component={HomeScreenDrwaer} />
      <Drawer.Screen name="Product" component={ProductScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  sideMenuProfileIcon: {
  resizeMode: 'center',
  width: 100,
  height: 100,
  borderRadius: 100 / 2,
  alignSelf: 'center',
  },
})