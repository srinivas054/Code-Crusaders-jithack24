import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity ,Linking,View,Image,Dimensions} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default function QNA({navigation}) {
 
   
  return (
    <KeyboardAwareScrollView
 style={styles.container}>
  <TouchableOpacity style={{alignSelf: "flex-start", margin: 20,marginTop:45}} onPress={() => navigation.navigate('FlashScreen')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.paragraph}>
     QNA

      </Text>
        
                 
           <Text style={{fontsize:30,alignSelf:'center',fontWeight:'bold',marginTop:10}}>PRE-ANSWERED QNA</Text>
        
           <Text style={styles.question}> Q) WHY SHOULD WE REPORT FROM HERE? </Text>
           
           <Text>ANS) THERE IS NO RISK OR DRAWBACKS FOR YOU WHILE REPORTING TO THE POLICE FROM HERE AS YOU ARE PROTECTED FROM CORRUPT COPS AND ITS HASSLE FREE AND HELP IS GARENTEED</Text>
        
           <Text style={styles.question}>Q) WHY SHOULD YOU REPORT ILLEGAL CARS?</Text>
           
            <Text>ANS) IT IS OUR DUTY AS RESPONSIBLE CITIZENS TO FOLLOW RULES AND REPORT IT TO AUTHORITES WHEN IT IS BROKEN</Text>
        
            <Text style={styles.question}>Q) HOW WOULD I KNOW WHAT HAPPENED AFTER THE REPORT</Text>
         
            <Text>ANS) THE POLICE INVERTIGATE AND RESPOND BACK AFTER TAKING VALID ACTION TO YOUR REPORT</Text>
        
            <Text style={styles.question}>Q) SHOULD I BE AFRAID TO COMPLIAN TO THE POLICE</Text>
            
            <Text>ANS) NO THE POLICE ARE THERE TO HELP YOU WHEN NEEDED THERE IS NO NEED TO BE AFRAID AS LONG AS YOU ARE FOLLOWING THE LAW</Text>
        
            <Text style={styles.question}>Q) HOW LONG WOULD IT TAKE BEFORE THE POLICE TAKE ACTION</Text>
            
            <Text>ANS) THE POLICE WILL RESPOND AS QUICKLY AS THEY CAN</Text>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#ffffff',
   
  },
  paragraph: {

    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'red'
  },
  
  question:{
    color:'blue',
    marginBottom:5,
    marginTop:10, 
    textAlign:'center'
  }
});
