import React, {Component} from 'react';
import { Button, View } from 'react-native';
import LoginForm from './Screens/LoginForm';
import SignUp from './Screens/SignUp';
import HomePage from './Screens/HomePage';
import Settings from './Screens/Settings.js';

import Notifs from './Screens/Notifs';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Stack } from 'react-native-router-flux';


const Drawer = createDrawerNavigator()

export default class HomeRoutes extends Component<{}> {

  constructor(props){
    super(props)
    console.log('goin HomeRoutes')
  } 


  
    render(){
        return(
            <NavigationContainer independent='true' initialRouteName = 'HP'>
            <Drawer.Navigator initialRouteName="HOME PAGE">
              <Drawer.Screen name="HOME PAGE" component={HomePage} />
              <Drawer.Screen name="NOTIFICATIONS" component={Notifs} />
              <Drawer.Screen name="SETTINGS" component={Settings} />
            </Drawer.Navigator>
          </NavigationContainer>
        )
    }
}
