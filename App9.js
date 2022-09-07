import * as React from "react";
import { Button, View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";


const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(97, 201, 246)',
    background:'rgb(80, 138, 222)',
    card:'rgb(158, 177, 213)',
    text:'rgb(144, 130, 250)',
    border:'rgb(80, 138, 222)',
    notification:'rgb(80, 138, 222)'
  }
}

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      /> */}
      <Text>Feed Screen</Text>
      <Button
      title="Open drawer"
      onPress={() => navigation.openDrawer()}
      />
      <Button
      title="Yoggle drawer"
      onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
}

function Article({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
      label="Close drawer" 
      onPress={() => props.navigation.closeDrawer()} 
      />
      <DrawerItem 
      label="Toggle drawer" 
      onPress={() => props.navigation.toggleDrawer()} 
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions ={{
        drawerStyle:{
          backgroundColor:'white',
          width:200
        }
      }}
    >
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App () {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}