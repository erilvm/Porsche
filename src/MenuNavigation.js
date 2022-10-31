import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsDetail from '../Drawer/SettingsDetail';
import Settings from '../Drawer/Settings';
import PerfilScreen from '../Drawer/PerfilScreen';


const Stack = createStackNavigator();

function MenuNavigation() {
 
  return (

    //Menu del ultimo boton que es perfil

    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Perfil" component={PerfilScreen}/> 
        <Stack.Screen  name="Settings" component={Settings} options={{headerShown: true}}/> 
        <Stack.Screen  name="SettingsDetail" component={SettingsDetail} options={{headerShown: true}}/> 
    </Stack.Navigator>
  );
}

export default MenuNavigation;

