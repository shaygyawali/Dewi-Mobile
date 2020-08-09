import React, {Component} from 'react';

import LoginForm from './Screens/LoginForm';
import SignUp from './Screens/SignUp';
import HomePage from './Screens/HomePage';
import Settings from './Screens/Settings';
import HomeRoutes from './HomeRoutes';
import Page1 from './Screens/Page1';
import Page2 from './Screens/Page2';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';
import { NavigationEvents } from 'react-navigation';


const Stack = createStackNavigator()

export default class InitSurvey extends Component<{}> {

    render(){
        return(
            <Stack.Navigator initialRouteName='Page1'>
              <Stack.Screen name="Page1" component={Page1} options={{headerShown: false}}/>
              <Stack.Screen name="Page2" component={Page2} options={{headerShown: false}}/>
              <Stack.Screen name="LI" component={LoginForm} options={{headerShown: false}}/>
              <Stack.Screen name="SU" component={SignUp} options={{headerShown: false}}/>
              <Stack.Screen name="HR" component={HomeRoutes} 
            options={{headerShown: false}}/>
          </Stack.Navigator>

        )
    }
}