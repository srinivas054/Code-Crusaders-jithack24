import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity ,Linking,View,Image,Dimensions} from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Stack = createStackNavigator();
import FlashScreen from './screens/FlashScreen'
import Register from './screens/Register'
import QNA from './screens/QNA'

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;
const email_auth="dcblore@aspgov.in"
export default function App() {
 
   
  return (


     <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
         
          <Stack.Screen name="FlashScreen" component={FlashScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="QNA" component={QNA} />
          

        </Stack.Navigator>
      </NavigationContainer>



   
  );
}


