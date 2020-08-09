import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        View,
        SafeAreaView,
        StatusBar, AsyncStorage, Button, TextInput
 } from 'react-native';
 import { Header, Text } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
 import Logo from '../components/Logo';
 import HomeRoutes from '../HomeRoutes';
 import SignUpForm from '../components/SignUpForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
import { createModuleResolutionCache, getTypeParameterOwner } from "typescript";


 const Drawer = createDrawerNavigator();
 
 export default class SignUp extends React.Component<{}>{
  constructor(props){
    super(props);
    this.state={
      semesterGoalGPAupdate: 0.00,
      semesterCreditsUpdate: 0,
      finalPredict: 0.00,
      curGPA: 0.00
    }
    this.dataSetter()
  }


    async onLogout(navigation) { 
        try{
            await AsyncStorage.clear();
            AsyncStorage.getItem('token').then(val =>
            {console.log("TOKEN VAL: " +val)})
            navigation.push('LI')
          }
        catch(err){
          console.log(err)
        }
      }
      
  async dataSetter(){
    await AsyncStorage.getItem('goalPdGPA').then(val =>
      {this.setState({semesterGoalGPAupdate: val})});
      await AsyncStorage.getItem('credsToTake').then(val =>
          {this.setState({semesterCreditsUpdate: val})});
          await AsyncStorage.getItem('currGPA').then(val =>
            {this.setState({finalPredict: val})});
     await AsyncStorage.getItem('currGPA').then(val =>
    {this.setState({curGPA: val})});}

  async calcc(){
    console.log(this.state.semesterGoalGPAupdate)
    if(this.state.semesterGoalGPAupdate == 0 || this.state.semesterGoalGPAupdate == 1){
      finalPredict = this.state.curGPA
    }
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
    var predictQualPts = this.state.semesterCreditsUpdate * this.state.semesterGoalGPAupdate;
    console.log("predictQualPts: " + predictQualPts);
    var totalTestCreds = (currCredHr) + parseFloat(this.state.semesterCreditsUpdate);
    console.log("totalTestCreds: " + totalTestCreds);
    var final1 = (curQualPts + predictQualPts) / totalTestCreds ;
    var final2 = Math.floor(final1 * 100) / 100

    this.setState({finalPredict: final2})
    console.log(final2)
  }
   render(){
     return(
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View style={{
           borderColor: 'black',
           borderWidth: 2,
           marginBottom: 250

         }}>
         <Text h4 style={
           {fontWeight: 'bold',
           justifyContent: "flex-start",
           }}> ✨ WELCOME HOME ✨</Text>
        </View>
      <Text h4 style={{fontWeight: 'bold',
    marginTop:-200}}> CUMILATIVE GPA </Text>
      <Text h1 style = {styles.gpaText}>{this.state.finalPredict}</Text>
      <Text style={{fontSize: 14, marginTop: 20, color: 'grey'}}> UPDATE SEMESTER GOAL </Text>
      <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="NEW GOAL"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={semesterGoalGPAupdate => {this.setState({semesterGoalGPAupdate})
                                                              this.calcc()
                                                          }}
                />

    </View>
     )
   }
 }

 //  <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()} />
 //<Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()} />

 const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ef5350',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width: 300,
        backgroundColor: '#66bb6a',//#b61826 #26c6da
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
      },
    gpaText:{
      fontWeight: 'bold',
      color: '#bde3a1'
    },
    inputBox:{
      width: 110,
      height: 40,
      backgroundColor: 'rgba(239,83,80,0.3)',
      fontSize: 16,
      color: '#ffffff',
      marginTop: 5,
      paddingVertical: 12,
      paddingHorizontal: 12
   }
})