
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 /**
  * import * as React from 'react';
import 'react-native-gesture-handler';
import { Component } from 'react';
import { AppRegistry, Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';
import LoginScreen from "./src/Screens/LoginScreen";
import {Details} from "./src/Screens/Details";
import {SULStudent} from './src/Screens/SULStudent';

function HomeScreen({navigation}){

    return(
        <View>
            <View>
            <Button title= "Student"
            onPress ={() => navigation.navigate('SULStudent')}
            ></Button>
            </View>
            <View>
            <Button title = "Teacher"
            onPress = {() => {this.props.navigation.navigate('SULTeacher')}}
            ></Button>
            </View>
        </View>
    );
    }





const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen' }} />
        <Stack.Screen name = "Details" component={Details}/>
         <Stack.Screen name = "LoginScreen" component={LoginScreen}/>
         <Stack.Screen name = "SULStudent" component={SULStudent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  buttonz: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },




  });


//export default class App extends Component {
	//render() {
		//return <LoginScreen />;
	//}

//}

export default App;
 
  */



 import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        View,
        SafeAreaView,
        StatusBar,
        AppRegistry
 } from 'react-native';

 import Routes from './src/Routes';

 console.disableYellowBox = true;
 
 export class App extends React.Component<{}>{
     render(){
         return(
             <View style = {styles.container}>
                 <StatusBar backgroundColor="pink" barStyle="light-content" />
                 <Routes/>
             </View>
         );
     }
 }
 
 const styles = StyleSheet.create({
     container:{
         backgroundColor: '#a5d6a7',
         flex: 1,
         justifyContent: 'center'
     }
 
 
 })
 

 export default App;