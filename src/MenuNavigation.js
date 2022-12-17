import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Platform, TouchableOpacity,  Alert, StyleSheet, background, View} from 'react-native';
import { Icon } from 'react-native-elements';

import SettingsDetail from '../Drawer/SettingsDetail';
import Settings from '../Drawer/Settings';
import PerfilScreen from '../Drawer/PerfilScreen';



const Stack = createStackNavigator();

export default class MenuNavigation extends Component {


  LogoutDB=()=>{

    var Data ={

    };
    
    var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    };
            
    fetch("http://dtai.uteq.edu.mx/~erinem201/api/Logout.php",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
    })
    this.props.navigation.replace("LoginScreen");

   }


  twoOptionAlertHandler = () => {

    //function to make two option alert
    Alert.alert( 
      //title
      'Salir',
      //body
      '¿Seguro que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          onPress: () => {}
        },
        {
            text: 'Sí',
            onPress: () => {this.LogoutDB()}
          },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };



  render() {
  return (

    //Menu del ultimo boton que es perfil

    <Stack.Navigator > 
        <Stack.Screen name="Perfil" component={PerfilScreen}
         options={{
          title: 'Mi perfil',
          headerShown: true, 
          headerLeft: null,
          
          headerRight: ({color, size, focused}) => {
             return(
        
             <TouchableOpacity  onPress={()=>{this.twoOptionAlertHandler()}}>   
             <Icon
             name={Platform.OS == 'exit-to-app' ? 'exit-to-app' : 'exit-to-app'}
             size={28}
             color= '#000000' 
             style={{marginRight: 13}}/>
             </TouchableOpacity>
           
             );
          },
          }}  
          /> 

        <Stack.Screen  name="Settings" component={Settings} options={{title:'Editar perfil', headerShown: true}}/> 
        <Stack.Screen  name="SettingsDetail" component={SettingsDetail} options={{title:'Perfil automóvil',headerShown: true}}/> 
    
    </Stack.Navigator>
  );
}
}

const styles = StyleSheet.create(
  {
     MainAlertView: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#1769aa", 
      height: 200,
      width: '90%',      
      borderColor: '#fff',
    },

  });