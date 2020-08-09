import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        StatusBar,
 } from 'react-native';

 import Logo from '../components/Logo';
 import LoginForm from './LoginForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationEvents } from 'react-navigation';
import { useFocusEffect } from '@react-navigation/native';


 /*


 export default class LoginScreen extends React.Component<{}>{

    signup(navigation){
      navigation.navigate('SU')
    }

    

   render(){

   /*
 useFocusEffect(
      React.useCallback(() => {
        console.log('focusinf')
  
        return () => {
          console.log('unfocusing')
        };
      }, [])
    );
   */
  

  return(
    <View style = {styles.container}>
    </View> 
  )
}
}

const styles = StyleSheet.create({
container:{
   backgroundColor: '#ef5350',
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
},

})

*/