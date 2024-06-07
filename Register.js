import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity ,Linking,View,Image,Dimensions} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const email_auth="dcblore@aspgov.in"
export default function FlashScreen({navigation}) {
 
   const [email, setEmail] = useState('');
  const [name, setName] = useState('');
   const [location, setLocation] = useState('');
   const [description, setDescription] = useState('');
    const sendEmail = () => {
   
    Linking.openURL('mailto:'+email_auth+'?body=Hello sir, '+description+' and the location of this vehicle is '+location+' ')

   
  };
  return (
    <KeyboardAwareScrollView
 style={styles.container}>
  <TouchableOpacity style={{alignSelf: "flex-start", margin: 30}} onPress={() => navigation.navigate('FlashScreen')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.paragraph}>
       REPORT ILLEGAL PARKED VEHICLES.
      </Text>
         <Image
        source={require('../assets/cars2.jpg')}
        style={{ height: 170, width: 170, marginTop: 20,alignSelf:'center',borderRadius:30}}
      />
         <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
        style={styles.input}
      />
          
         </View>   
            <TouchableOpacity onPress={()=>sendEmail()} style={styles.submit} >
            <Text style={{color:'white',fontSize:16,alignSelf:'center'}}>Submit Report</Text>
            </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginTop:10
   
  },
  paragraph: {

    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'red'
  },
   input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    padding: 5,
    color: '#000000',
    alignSelf:'center'
  },

  wrapper:{
    margin:20,
  },
  submit:{
    alignSelf:'center',
    backgroundColor:'black',
    borderRadius:20,
    height:40,
   width:120,
    justifyContent:'center',
    alignContent:'center',
  }
});
