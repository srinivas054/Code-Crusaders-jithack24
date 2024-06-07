import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity ,Linking,View,Image,Dimensions} from 'react-native';
import React, { useState } from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function FlashScreen({navigation}) {
 

  return (
    <KeyboardAwareScrollView
 style={styles.container}>
      <Text style={styles.paragraph}>
       REPORT ILLEGAL PARKED VEHICLES
      </Text>
         <Image
        source={require('../assets/cars2.jpg')}
        style={{ height: 170, width: 170, marginTop: 20,alignSelf:'center',borderRadius:30}}
      />
            <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.submit} >
            <Text style={{color:'white',fontSize:16,alignSelf:'center'}}>Create a Report</Text>
            </TouchableOpacity>

             <TouchableOpacity onPress={()=>navigation.navigate('QNA')} style={styles.submit} >
            <Text style={{color:'white',fontSize:16,alignSelf:'center'}}>QNA</Text>
            </TouchableOpacity>
          
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
   
    marginTop:screenHeight/8
   
  },
  paragraph: {

    fontSize: 20,
    fontWeight: 'BOLD',
    textAlign: 'center',
    color:'red'
  },

  submit:{
    alignSelf:'center',
    backgroundColor:'#FFA585',
    borderRadius:20,
    height:40,
   width:120,
    justifyContent:'center',
    alignContent:'center',
    margin:10,
  }
});
