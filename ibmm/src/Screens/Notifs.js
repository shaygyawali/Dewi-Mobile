import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        StatusBar, AsyncStorage, Button
 } from 'react-native';

 import Logo from '../components/Logo';
 import SignUpForm from '../components/SignUpForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';


 
 export default class Notifs extends React.Component<{}>{


   render(){
     return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button 
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
        />
      </View>
     )
   }
 }


