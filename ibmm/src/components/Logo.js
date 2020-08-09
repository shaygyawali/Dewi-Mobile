import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        Image
 } from 'react-native';
 
 export default class Logo extends React.Component<{}>{
    render(){
      return(
        <View style = {styles.container}>
            <Image style={{width: 80, height: 80}}
                source = {require('../img/icon.png')}/>
            <Text style ={styles.logoText}>dewi</Text>
        </View>
      )
    }
  }


  const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    logoText:{
        marginVertical: 15,
        fontSize: 35,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: 'bold',
    }
  })