import React, {Component} from 'react';

import LoginForm from './Screens/LoginForm';
import SignUp from './Screens/SignUp';
import HomePage from './Screens/HomePage';
import Settings from './Screens/Settings';
import HomeRoutes from './HomeRoutes';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';
import { NavigationEvents } from 'react-navigation';


const Stack = createStackNavigator()

export default class Routes extends Component<{}> {

    render(){
        return(
            <Stack.Navigator initialRouteName='Settings'>
              <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
              <Stack.Screen name="LI" component={LoginForm} options={{headerShown: false}}/>
              <Stack.Screen name="SU" component={SignUp} options={{headerShown: false}}/>
              <Stack.Screen name="HR" component={HomeRoutes} 
            options={{headerShown: false}}/>
          </Stack.Navigator>

        )
    }
}