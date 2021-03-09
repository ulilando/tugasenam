import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {firebase, firestore, storage} from "firebase";
import {db} from "./firebase/config"


export default class App extends Component {

  storeHighScore = (userId, score) => {
    db
      .database()
      .ref('users/' + userId)
      .set({
        highscore: score,
      });
   }
  
  storeFireStore = () =>{

     db.firestore().collection("characters").doc("mario").set({}
    employment: "plumber",
    outfitColor : "red",
    specialAttack : "fireball"
});
}

   componentDidMount (){
     this.storeHighScore("1234",80)
 }
   render(){
  return (
    <View>/
    <Text>Hello</Text>
    </View>
  
  )
 }  
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : "center",
    justifyContent : 'center',

  },
});

