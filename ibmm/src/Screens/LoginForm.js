import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        TextInput,
        TouchableOpacity,
        Button
 } from 'react-native';
 
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack'
 import { AsyncStorage } from 'react-native'
 import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';
 import { NavigationEvents } from 'react-navigation';
 import { useFocusEffect } from '@react-navigation/native';
 import Logo from '../components/Logo';
 import InitSurvey from '../InitSurvey';



 export default class LoginForm extends React.Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : '',
      token: ''}
   this.getData();
  } 

      
      getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          const email = await AsyncStorage.getItem('email');
          if (value !== null) {
            this.setState({token : value})
            console.log(value)
          }
          if (email  !== null) {
            this.setState({email : email})
            console.log(email)
          }
          if (password  !== null) {
            this.setState({password : password})
            console.log(password)
          }
        
        } catch (error) {
          // Error retrieving data
        }
      };

    async onSubmit() { 
        try{
          console.log(this.state)
          await this.fetcher(this.state.password, this.state.email)
          console.log(this.state)
          await AsyncStorage.setItem('token', this.state.token)
        } 
        catch(err){
          console.log(err)
        }
      }

      async fetcher(password, email){
        var self = this
        console.log('fetching')
        await fetch('http://127.0.0.1:8000/auth/token/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'password': password,
          'email': email
        })})
        .then((response) => response.json())
        .then((json) =>{ 
          if(json.auth_token != undefined || json.auth_token != null){
          console.log('json setting')
           self.setState({
            token : json.auth_token});
          }
          else{
            alert("I LOVE YOU ITS OKAY")
          }})
        .catch((error) => {
          console.error(error);
        })
      }
  
    async goHS(navigation) {
        //AsyncStorage.getItem('token').then(val =>
        //{console.log("TOKEN VAL: " +val)})
        console.log("state token " + this.state.token)
        if(this.state.token != null && this.state.token != '' && this.state.token != undefined){
          AsyncStorage.getItem('initForm').then(val =>
            {if(val){
              console.log("GOIN TRUE")
              navigation.push('HR', {screen: 'HOME PAGE'} )
            }
             else{
              navigation.push('IS')
             }

          
          })
      }
        else{
          console.log("GOING FALSE 2")
          alert('its okay!!! ily babe ur doing great')
    }}


    signup(navigation){
      console.log('im at the login page')
      navigation.push('SU')
    }    

  render(){
      return(
        <View style = {styles.container}>
            <Logo/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={email => this.setState({email})}
                value = {this.state.email}/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={password => this.setState({password})}
                value = {this.state.password}
                />
            <TouchableOpacity style={styles.button} onPress={ async () => 
                {
                await this.onSubmit()
                await this.goHS(this.props.navigation)
                }}>
                <Text style = {styles.buttonText}> Sign In </Text> 
            </TouchableOpacity>
            <View style = {styles.signupTextCont}>
              <Text style = {styles.signupText}> Don't have an account yet?</Text>
               <TouchableOpacity onPress={ () =>
                     this.signup(this.props.navigation)}>
                  <Text style = {styles.signupButton}> Sign Up
                  </Text>
                </TouchableOpacity>
         </View>
        </View>
      )
                }
  }


  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ef5350',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox:{
       width: 300,
       height: 40,
       backgroundColor: 'rgba(255,255,255,0.3)',
       borderRadius: 25,
       paddingHorizontal: 12,
       fontSize: 16,
       color: '#ffffff',
       marginVertical: 10
    },
    button:{
      width: 300,
      backgroundColor: '#2fbcd5',//#b61826 #26c6da
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12

    },
    buttonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  },
  signupTextCont:{
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupButton:{
    color: "#ffffff",
    fontSize: 16,
    fontWeight: '500'
  },
  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  }
  })