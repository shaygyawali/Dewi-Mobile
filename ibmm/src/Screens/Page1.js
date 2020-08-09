import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        View,
        SafeAreaView,
        TextInput,
        TouchableOpacity,
        Button
 } from 'react-native';
 import { Header, Text, ThemeConsumer } from 'react-native-elements';
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack'
 import { AsyncStorage } from 'react-native'
 import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';
 import { NavigationEvents } from 'react-navigation';
 import { useFocusEffect } from '@react-navigation/native';
 import Logo from '../components/Logo';




 export default class Page1 extends React.Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      currGPA: 0.00,
      currCredHr: 0,
      goalPd: '',
      goalPdYr: false,
      goalPdPd: false,
      goalPdYrCol : '#2fbcd5',
      goalPdPdCol : '#2fbcd5',
      sd1Col:'#2fbcd5',
      sd2Col:'#2fbcd5',
      sd3Col:'#2fbcd5',
      sd4Col:'#2fbcd5',
      sd1:false,
      sd2:false,
      sd3:false,
      sd4:false,
      schoolDivid: 0,
    }
  } 

  async setDivid(){
    if(this.state.sd1){
      this.setState({schoolDivid : 1});
      await AsyncStorage.setItem('schoolDivid', '1')
    }

    else if(this.state.sd2){
      this.setState({schoolDivid : 2});
      await AsyncStorage.setItem('schoolDivid', '2')
    }

    else if(this.state.sd3){
      this.setState({schoolDivid : 3});
      await AsyncStorage.setItem('schoolDivid', '3')
    }

    else if(this.state.sd4){
      this.setState({schoolDivid : 4});
      await AsyncStorage.setItem('schoolDivid', '4')
    }
  }

  async goalPd(){
    if(this.state.goalPdYr){
      this.setState({goalPd : 'year'});
      await AsyncStorage.setItem('goalPd', 'year')
    }

    else if(this.state.goalPdPd){
      this.setState({goalPd : 'period'});
      await AsyncStorage.setItem('goalPd', 'period')}

  }

  async onSubmit(navigation) { 
     //await this.setDivid()
     await this.goalPd()
     await AsyncStorage.setItem('currGPA', this.state.currGPA.toString())
     await AsyncStorage.setItem('currCredHr', this.state.currCredHr.toString())
     navigation.push('Page2')
  }

  changeSd1(colorr){
    if(this.state.sd1Col == '#2fbcd5' && this.state.sd1 == false){
    this.setState({sd1Col: colorr})
    this.setState({sd1: true})
    this.setState({sd2Col: '#2fbcd5'})
    this.setState({sd2: false})
    this.setState({sd3Col: '#2fbcd5'})
    this.setState({sd3: false})
    this.setState({sd4Col: '#2fbcd5'})
    this.setState({sd4: false})
  }
    else{
      this.setState({sd1Col: '#2fbcd5'})
      this.setState({sd1: false})
      this.setState({sd2Col: '#2fbcd5'})
      this.setState({sd2: false})
      this.setState({sd3Col: '#2fbcd5'})
      this.setState({sd3: false})
      this.setState({sd4Col: '#2fbcd5'})
      this.setState({sd4: false})
    }
  }

  changeSd2(colorr){
    if(this.state.sd2Col == '#2fbcd5' && this.state.sd2 == false){
      this.setState({sd2Col: colorr})
      this.setState({sd2: true})
      this.setState({sd1Col: '#2fbcd5'})
      this.setState({sd1: false})
      this.setState({sd3Col: '#2fbcd5'})
      this.setState({sd3: false})
      this.setState({sd4Col: '#2fbcd5'})
      this.setState({sd4: false})
    }

      else{
        this.setState({sd1Col: '#2fbcd5'})
        this.setState({sd1: false})
        this.setState({sd2Col: '#2fbcd5'})
        this.setState({sd2: false})
        this.setState({sd3Col: '#2fbcd5'})
        this.setState({sd3: false})
        this.setState({sd4Col: '#2fbcd5'})
        this.setState({sd4: false})
      }
  }

  changeSd3(colorr){
    if(this.state.sd3Col == '#2fbcd5' && this.state.sd3 == false){
      this.setState({sd3Col: colorr})
      this.setState({sd3: true})
      this.setState({sd1Col: '#2fbcd5'})
      this.setState({sd1: false})
      this.setState({sd4Col: '#2fbcd5'})
      this.setState({sd4: false})
      this.setState({sd2Col: '#2fbcd5'})
      this.setState({sd2: false})
    }

      else{
        this.setState({sd1Col: '#2fbcd5'})
        this.setState({sd1: false})
        this.setState({sd2Col: '#2fbcd5'})
        this.setState({sd2: false})
        this.setState({sd3Col: '#2fbcd5'})
        this.setState({sd3: false})
        this.setState({sd4Col: '#2fbcd5'})
        this.setState({sd4: false})
      }
  }

  changeSd4(colorr){
    if(this.state.sd4Col == '#2fbcd5' && this.state.sd4 == false){
      this.setState({sd4Col: colorr})
      this.setState({sd4: true})
      this.setState({sd1Col: '#2fbcd5'})
      this.setState({sd1: false})
      this.setState({sd3Col: '#2fbcd5'})
      this.setState({sd3: false})
      this.setState({sd2Col: '#2fbcd5'})
      this.setState({sd2: false})
    }

      else{
        this.setState({sd1Col: '#2fbcd5'})
        this.setState({sd1: false})
        this.setState({sd2Col: '#2fbcd5'})
        this.setState({sd2: false})
        this.setState({sd3Col: '#2fbcd5'})
        this.setState({sd3: false})
        this.setState({sd4Col: '#2fbcd5'})
        this.setState({sd4: false})
      }
  }

  changeGoalPdYr(colorr){
    if(this.state.goalPdYrCol == '#2fbcd5' && this.state.goalPdYr == false){
      this.setState({goalPdYrCol: colorr})
      this.setState({goalPdYr: true})
      this.setState({goalPdPdCol: '#2fbcd5'})
      this.setState({goalPdPd: false})
    }
      else{
      this.setState({goalPdYrCol: '#2fbcd5'})
      this.setState({goalPdYr: false})
      this.setState({goalPdPdCol: '#2fbcd5'})
      this.setState({goalPdPd: false})
      }
  }

  changeGoalPdPd(colorr){
    if(this.state.goalPdPdCol == '#2fbcd5' && this.state.goalPdPd == false){
      this.setState({goalPdPdCol: colorr})
      this.setState({goalPdPd: true})
      this.setState({goalPdYrCol: '#2fbcd5'})
      this.setState({goalPdYr: false})
    }

      else{
      this.setState({goalPdYrCol: '#2fbcd5'})
      this.setState({goalPdYr: false})
      this.setState({goalPdPdCol: '#2fbcd5'})
      this.setState({goalPdPd: false})
      }
  }


    

  


  render(){
      return(
        <View style = {styles.container}>
            <Text h4 style ={styles.logoText}> NOT SO QUICK! </Text> 
            <Text h4 style ={styles.logoText2}>LET'S GET TO KNOW YOU A BIT MORE</Text>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="CURRENT GPA"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={currGPA => this.setState({currGPA})}
                value = {this.state.currGPA}/>
             <TextInput style={styles.inputBox2} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="COMPLETED CREDIT HOURS"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={currCredHr => this.setState({currCredHr})}
                value = {this.state.currCredHr}/>


            <Text style ={styles.dividText}>MY SCHOOL YEAR IS DIVIDED INTO :</Text>
            <View style = {styles.sems}>
                <TouchableOpacity style={{
                            width: 50,
                            height: 50,
                            backgroundColor: this.state.sd1Col,//#b61826 #26c6da
                            marginTop: 10,
                            marginHorizontal: 15,
                            paddingVertical: 12,
                            borderColor: 'black',
                            borderWidth: 2}
                          }
                          onPress={() => 
                            this.changeSd1('#ef5350')
                            }>
                    <Text style = {styles.buttonText}> 1 </Text> 
                </TouchableOpacity>
                <TouchableOpacity style={{
                            width: 50,
                            height: 50,
                            backgroundColor: this.state.sd2Col,//#b61826 #26c6da
                            marginTop: 10,
                            marginHorizontal: 15,
                            paddingVertical: 12,
                            borderColor: 'black',
                            borderWidth: 2}
                          }
                          onPress={() => 
                            this.changeSd2('#ef5350')
                            }>
                    <Text style = {styles.buttonText}> 2 </Text> 
                </TouchableOpacity>
                <TouchableOpacity style={{
                            width: 50,
                            height: 50,
                            backgroundColor: this.state.sd3Col,//#b61826 #26c6da
                            marginTop: 10,
                            marginHorizontal: 15,
                            paddingVertical: 12,
                            borderColor: 'black',
                            borderWidth: 2}
                          }
                          onPress={() => 
                            this.changeSd3('#ef5350')
                            }>
                    <Text style = {styles.buttonText}> 3 </Text> 
                </TouchableOpacity>
                <TouchableOpacity style={{
                          width: 50,
                          height: 50,
                          backgroundColor: this.state.sd4Col,//#b61826 #26c6da
                          marginTop: 10,
                          marginHorizontal: 15,
                          paddingVertical: 12,
                          borderColor: 'black',
                          borderWidth: 2}
                        }
                        onPress={() => 
                          this.changeSd4('#ef5350')
                          }>
                    <Text style = {styles.buttonText}> 4 </Text> 
                </TouchableOpacity>
            </View>

            <Text style ={styles.dividText}>I WANT TO SET A GOAL FOR :</Text>

            <View style = {styles.goalInc}>
            <TouchableOpacity style={{
                        width: 150,
                        height: 50,
                        backgroundColor: this.state.goalPdYrCol,//#b61826 #26c6da
                        marginVertical: 20,
                        marginHorizontal: 1.5,
                        alignItems: "center",
                        justifyContent: 'center',
                        borderColor: "black",
                        borderWidth: 2}}

                        onPress={() => 
                          this.changeGoalPdYr('#ef5350')
                      }>
                <Text style = {styles.buttonText}> THIS YEAR </Text> 
            </TouchableOpacity>
            <TouchableOpacity style={
                        {width: 150,
                        height: 50,
                        backgroundColor: this.state.goalPdPdCol,
                        marginVertical: 20,
                        marginHorizontal: 1.5,
                        alignItems: "center",
                        justifyContent: 'center',
                        borderColor: "black",
                        borderWidth: 2}}
                      
                        onPress={() => 
                          this.changeGoalPdPd('#ef5350')
                      }>
                <Text style = {styles.buttonText2}> THIS GRADING PD </Text> 
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={ async () => 
                {
                await this.onSubmit(this.props.navigation)
                }}>
                <Text style = {styles.buttonText}> SUBMIT </Text> 
            </TouchableOpacity>
        </View>
      )
                }
  }


  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2fbcd5',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'black',
        paddingTop: 60
    },
    logoText:{
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 100
    },
    logoText2:{
        fontWeight: '200',
        textAlign: "center"
    },
    inputBox:{
       width: 300,
       height: 40,
       backgroundColor: 'rgba(255,255,255,0.3)',
       fontSize: 16,
       color: '#ffffff',
       marginTop: 50,
       paddingVertical: 12,
       paddingHorizontal: 12
    },
    inputBox2:{
        width: 300,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        fontSize: 16,
        color: '#ffffff',
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 40
     },
    button:{
      width: 300,
      backgroundColor: '#2fbcd5',//#b61826 #26c6da
      marginVertical: 10,
      paddingVertical: 12,
      borderColor: 'black',
      borderWidth: 2
    },
    buttonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center',
  },
  buttonText2:{
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
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
  },
  sems:{
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0,
    marginBottom: 40
  },
  goalInc:{
    flexDirection: 'row',
    alignContent: 'center',
    borderTopColor: 'black',
    borderWidth: 0,
    marginTop:-10
  },
  dividText:{
      fontSize: 18,
      justifyContent: "flex-end",
      borderColor: "black",

  }
  })