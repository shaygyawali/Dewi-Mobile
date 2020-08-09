import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        StatusBar,
        TextInput, 
        AsyncStorage
 } from 'react-native';




 import Logo from '../components/Logo';
 import SignUpForm from '../components/SignUpForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
 
 export default class SignUp extends React.Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name : '',
      phoneNum: '',
      teacher: false,
      email: '',
      password: '',
      buttonColor: '#bbbf95',
      go: false}
      console.log('IM AT THE SIGNUP')
  }


  signin(navigation){
  console.log('im at signup')
  navigation.navigate('LI')
  }
  
  changeTeach(colorr){
    if(this.state.buttonColor == '#bbbf95' && this.state.teacher == false){
    this.setState({buttonColor: colorr})
    this.setState({teacher: true})}
    else{
      this.setState({buttonColor: '#bbbf95'})
      this.setState({teacher: false})
    }
  }

  async signupp(){
    console.log(this.state)
    await this.fetcher(this.state.first_name, this.state.last_name, 
                      this.state.phoneNum, this.state.teacher, 
                      this.state.email, this.state.password)
    console.log('from signup')
    console.log(this.state)
    if(this.state.go){
    await AsyncStorage.setItem('firstName', this.state.first_name)
    await AsyncStorage.setItem('lastName', this.state.last_name)
    await AsyncStorage.setItem('email', this.state.email)
}
    await this.canGo(this.props.navigation)
  }

  canGo(navigation){
    console.log('doing canGo from signup')
    if(this.state.go){
      console.log('heading to login page')
      AsyncStorage.setItem('initForm', false)
      navigation.push('LI')
    }
    else{
      alert('NAH!')
    }
  }

  async fetcher(first_name, last_name, phoneNum, teacher, email, password){
    var self = this
    console.log('fetching')
    try{
    await fetch('http://127.0.0.1:8000/auth/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'first_name': first_name,
      'last_name': last_name,
      'phone_number' : phoneNum,
      'is_teacher' : teacher,
      'email' : email,
      'password' : password
    })})
    .then((response) => response.json())
    .then((json) =>{ 
      console.log(json)
      var arrer = json
      try{
        if(json.phone_number != this.state.phoneNum){
          console.log('here')
          alert('INVALID LOGIN CREDENTIALS')
        }
        else if(json.email != this.state.email){
          console.log('here1')
          alert('INVALID EMAIL')
        }
        else{
          console.log('here2')
          this.setState({go: true})
          console.log(this.state.go)
        }}
      catch{
          console.log('error!!!!!')
        }})
    .catch((error) => {
      console.error(error);
    })
    console.log('done fetching')
  }
catch(err){
  console.log(err)
}}

   render(){
     return(
       <View style = {styles.container}>
         <Logo/>
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
                onChangeText={email => this.setState({ email})}
                value = {this.state.first_email1}/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Phone Number"
                placeholderTextColor="#ffffff"
                onChangeText={phoneNum => this.setState({ phoneNum})}
                value = {this.state.phoneNum}/>
             <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Password"
                placeholderTextColor="#ffffff"
                onChangeText={password => this.setState({ password})}
                value = {this.state.password}/>
              <TouchableOpacity style={{width: 200,
                      borderRadius: 25,
                      marginVertical: 10,
                      paddingVertical: 12,
                      backgroundColor: this.state.buttonColor}}
                      onPress={() => 
                      this.changeTeach('#a6c100')
                      }>
                <Text style = {styles.buttonTextTeach}> I am a teacher </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                      onPress={async () => 
                        await this.signupp()
                        }>
                <Text style = {styles.buttonText}> Sign Up </Text>
            </TouchableOpacity>
         <View style = {styles.signupTextCont}>
      <Text style = {styles.signupText}> Already have an account?</Text>
           <TouchableOpacity onPress = { () => this.signin(this.props.navigation)}> 
              <Text style = {styles.signupButton}> Log In</Text>
           </TouchableOpacity>
         </View>
       </View> 
     )
   }
 }

 const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#ef5350',
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
  backgroundColor: '#2fbcd5', //#b61826 #26c6da #1e828f
  borderRadius: 25,
  marginVertical: 10,
  paddingVertical: 12

},
buttonTeach:{
  width: 200,
 //#b61826 #26c6da
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
buttonTextTeach:{
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