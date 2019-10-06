import React from 'react';
import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import HomeScreen from "./src/screens/HomeScreen"
import QRScreen from "./src/screens/QRScreen"
import LoginScreen from "./src/screens/LoginScreen"
import SignupScreen from "./src/screens/SignupScreen"
import ListScreen from "./src/screens/ListScreen"
import DoorScreen from "./src/screens/DoorScreen"
import SettingScreen from "./src/screens/SettingScreen"

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    QR:QRScreen,
    Login : LoginScreen,
    Signup : SignupScreen,
    List:ListScreen,
    Door:DoorScreen,
    Setting:SettingScreen
  },
  {
    initialRouteName:"Login",
    defaultNavigationOptions:{
      title:"myQRcode"
    }
  }
)
export default createAppContainer(navigator);