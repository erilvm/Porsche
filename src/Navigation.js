import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';
import PasswordScreen from '../Screen/PasswordScreen';
import DrawerNavigator from '../src/DrawerNavigator';
import Bottom from '../src/Bottom';


const Stack = createStackNavigator();


export default function Navigation() {
  
  return (

    <Stack.Navigator initialRouteName="LoginScreen">
      
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
    
         <Stack.Screen
         //nombre con el cual se va a llamar el screen 
          name="Contraseña"
          component={PasswordScreen}
          // Hiding header for Splash Screen
          options={{headerShown: true}}
      
        />
       
        <Stack.Screen
         //nombre con el cual se va a llamar el screen 
          name="Home"
          component={Bottom}
          //component={DrawerNavigator}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />

          
      </Stack.Navigator>


  );
}

