import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        StatusBar, AsyncStorage
 } from 'react-native';

 import Logo from '../components/Logo';
 import SignUpForm from '../components/SignUpForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';


 
 export default class Settings extends React.Component<{}>{

    async onLogout(navigation) { 
        try{
            await AsyncStorage.clear();
            AsyncStorage.getItem('token').then(val =>
            {console.log("TOKEN VAL: " + val)})
            navigation.push('LI')
          }
        catch(err){
          console.log(err)
        }
      }
      

   render(){
     return(
       <View style = {styles.container}>
           <TouchableOpacity style={styles.button} 
                onPress = { async () =>
                  {await this.onLogout(this.props.navigation)}}>
                <Text style = {styles.buttonText}> Logout </Text>
            </TouchableOpacity>
         <Text>SETTINGS PAGE</Text>
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
    button:{
        width: 300,
        backgroundColor: '#2fbcd5',//#b61826 #26c6da
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
  
      }
 })

