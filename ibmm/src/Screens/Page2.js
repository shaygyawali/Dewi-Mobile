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
      credsTOtake: 0,
      goalPdGPA: 0,
      cumilativePrediction: 0,
      fallSemCol: '#ef5350',
      springSemCol: '#ef5350',
      fallSem: false,
      springSem: false
    }
  } 

  async calcCumil(){
    var currGPA = 0.0;
    var currCredHr = 0.00;
    await AsyncStorage.getItem('currGPA').then(val =>
    {currGPA = parseFloat(val)});
    await AsyncStorage.getItem('currCredHr').then(val =>
        {currCredHr = parseFloat(val);
        console.log(val)});
    console.log(currGPA + " " + currCredHr)
    var curQualPts = currGPA * currCredHr;
    console.log("curQualPts: " + curQualPts)
    var predictQualPts = this.state.credsTOtake * this.state.goalPdGPA;
    console.log("predictQualPts: " + predictQualPts);
    var totalTestCreds = (currCredHr) + parseFloat(this.state.credsTOtake);
    console.log("totalTestCreds: " + totalTestCreds);
    var final1 = (curQualPts + predictQualPts) / totalTestCreds ;
    var final2 = Math.floor(final1 * 100) / 100

    this.setState({cumilativePrediction: final2})
    console.log(final2)
  }

  changeFallSem(colorr){
    if(this.state.fallSemCol == '#ef5350' && this.state.fallSem == false){
    this.setState({fallSemCol: colorr})
    this.setState({fallSem: true})
    this.setState({springSemCol: '#ef5350'})
    this.setState({springSem: false})
  }
    else{
      this.setState({fallSemCol: '#ef5350'})
      this.setState({fallSem: false})
      this.setState({springSemCol: '#ef5350'})
      this.setState({springSem: false})

    }
  }

  changeSpringSem(colorr){
    if(this.state.springSemCol == '#ef5350' && this.state.springSem == false){
      this.setState({springSemCol: colorr})
      this.setState({springSem: true})
    this.setState({fallSemCol: '#ef5350'})
    this.setState({fallSem: false})
  }
    else{
      this.setState({fallSemCol: '#ef5350'})
      this.setState({fallSem: false})
      this.setState({springSemCol: '#ef5350'})
      this.setState({springSem: false})

    }
  }

  async onSubmit(navigation){
    await AsyncStorage.setItem('credsToTake', this.state.credsTOtake.toString())
    await AsyncStorage.setItem('goalPdGPA', this.state.goalPdGPA.toString())
    navigation.navigate('HR')

  }




 


    

  


  render(){
      return(
        <View style = {styles.container}>
            <Text h4 style ={styles.logoText}> BEAR WITH ME </Text> 
            <Text h4 style ={styles.logoText2}>JUST NEED A BIT MORE INFO : )</Text>
            <Text style ={styles.dividText}> IM IN OR STARTING MY :</Text>
            <View style = {styles.sems}>
                <TouchableOpacity style={{
                            width: 150,
                            height: 100,
                            backgroundColor: this.state.fallSemCol,//#b61826 #26c6da
                            marginTop: 10,
                            marginHorizontal: 15,
                            paddingVertical: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: 'black',
                            borderWidth: 2}
                          }
                          onPress={() => 
                            this.changeFallSem('#2fbcd5')
                            }>
                    <Text style = {styles.buttonText}> FALL SEMESTER </Text> 
                </TouchableOpacity>
                <TouchableOpacity style={{
                            width: 150,
                            height: 100,
                            backgroundColor: this.state.springSemCol,//#b61826 #26c6da
                            marginTop: 10,
                            marginHorizontal: 15,
                            paddingVertical: 12,
                            borderColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2}
                          }
                          onPress={() => 
                            this.changeSpringSem('#2fbcd5')
                            }>
                    <Text style = {styles.buttonText}> SPRING SEMESTER </Text> 
                </TouchableOpacity>
            </View>

            <Text style ={styles.dividText}> SEMESTER CREDIT HOURS: </Text>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="CREDS"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={credsTOtake => this.setState({credsTOtake})}
                value = {this.state.credsTOtake}/>
             <Text style ={styles.dividText}> GOAL SEMESTER GPA</Text>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="GOAL"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={goalPdGPA => { this.setState({goalPdGPA});
                                                this.calcCumil();}}
                value = {this.state.goalPdGPA}/>
             <Text style ={styles.cumilText}> RESULTING CUMILATIVE GPA </Text>
             <Text style={styles.predictText}> {this.state.cumilativePrediction} </Text>

       
                     
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
        backgroundColor: '#ef5350',
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
       width: 100,
       height: 40,
       backgroundColor: 'rgba(255,255,255,0.3)',
       fontSize: 16,
       color: '#ffffff',
       marginTop: 5,
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
      backgroundColor: '#ef5350',//#b61826 #26c6da
      marginVertical: 10,
      paddingVertical: 12,
      borderColor: 'black',
      borderWidth: 2,
      marginTop: 40
    },
    buttonText:{
      fontSize: 20,
      fontWeight: 'bold',
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
      marginTop: 25,
      fontSize: 18,
      justifyContent: "flex-end",
      borderColor: "black",
  },
  cumilText:{
      marginTop: 12,
      fontSize: 13
  },
  predictText:{
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold'
  }
  })