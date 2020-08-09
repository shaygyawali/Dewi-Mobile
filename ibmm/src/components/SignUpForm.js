import React, {Component, Fragment, useStåte} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        TextInput,
        TouchableOpacity,
        CheckBox
 } from 'react-native';





 
 export default class SignUpForm extends React.Component<{}>{
  constructor(props){
    super(props);
    this.state = {
        first_name : '',
        last_name : '',
        phone_number: '',
        is_teacher: false,
        email1: '',
        id: 0
    }
  }

    render(){
      return(
        <View style = {styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="First Name"
                placeholderTextColor="#ffffff"
                onChangeText={first_name => this.setState({ first_name})}
                value = {this.state.first_name}/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Last Name"
                placeholderTextColor="#ffffff"
                onChangeText={last_name => this.setState({ last_name})}
                value = {this.state.last_name}/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor="#ffffff"
                onChangeText={email1 => this.setState({ email1})}
                value = {this.state.first_email1}/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Phone Number"
                placeholderTextColor="#ffffff"
                onChangeText={phone_number => this.setState({ phone_number})}
                value = {this.state.phone_number}/>
            <TouchableOpacity style={styles.button}>
                <Text style = {styles.buttonText}> Sign In </Text>
            </TouchableOpacity>
        </View>
      )
    }
  }


  const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    inputBox:{
       width: 300,
       height: 40,
       backgroundColor: 'rgba(255,255,255,0.3)',
       borderRadius: 25,
       paddingHorizontal: 16,
       fontSize: 16,
       color: '#ffffff',
       marginVertical: 10
    },
    button:{
      width: 300,
      backgroundColor: '#26c6da', //#b61826 #26c6da
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12

    },
    buttonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  }
  })