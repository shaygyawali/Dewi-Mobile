import React, 
{
  Platform,
 StyleSheet,
 Text,
 View,
 SafeAreaView,
 TextInput,
 TouchableOpacity,
 Button, Component
} from 'react';

import LoginForm from './Screens/LoginForm';
import SignUp from './Screens/SignUp';
import HomePage from './Screens/HomePage';
import HomeRoutes from './HomeRoutes';
import InitSurvey from './InitSurvey';


import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { ThemeConsumer } from 'react-native-elements';
import Notifs from './Screens/Notifs';


const Stack = createStackNavigator()


export default class Routes extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      userToken : '',
      isLoading : true}
      this.router()
  }
  
 async router(){
        console.log("stack screen did mountt")
        var signedIn = false;
        await ((AsyncStorage.getItem('token').then(val =>{
            console.log("value " + val)
        if (val != null && val != '' ){
            console.log(1)
            this.setState({userToken: val})
              this.setState({isLoading: false})}
        else{
            console.log(0)
            this.setState({isLoading: false})}
        }
        ))) 
        console.log('rendering again, loading: ' + this.state.isLoading)
    }

  

    render(){
      if(this.state.isLoading){
        return <Notifs/> 
      }
        return(
            <NavigationContainer>
            <Stack.Navigator>
            {this.state.userToken == ''? ( <>
            <Stack.Screen name="LI" component={LoginForm} 
            options={{headerShown: false}}/>
            <Stack.Screen name="SU" component={SignUp} options={{headerShown: false}}  />
            <Stack.Screen name="HR" component={HomeRoutes} 
            options={{headerShown: false}}/>
            <Stack.Screen name="IS" component={InitSurvey} 
            options={{headerShown: false}}/>
            
              </>
            ) : ( <>
            <Stack.Screen name="HR" component={HomeRoutes} 
            options={{headerShown: false}}/>
            <Stack.Screen name="LI" component={LoginForm} 
            options={{headerShown: false}}/>
            <Stack.Screen name="SU" component={SignUp} options={{headerShown: false}}  />
            <Stack.Screen name="IS" component={InitSurvey} 
            options={{headerShown: false}}/>
            </>)} 
          </Stack.Navigator>
          </NavigationContainer>
        )
    }
}


//((AsyncStorage.getItem('token').then(val =>{if (val == null 
//|| val == undefined 
//|| val ==''){return true}})))

//((AsyncStorage.getItem('token').then(val =>{if (val != null 
//|| val != undefined 
//|| val !=''){return true}})))