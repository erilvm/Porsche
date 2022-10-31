import React  from 'react';  
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import EventosScreen from "../Drawer/EventosScreen";
import AdmiScreen from "../Drawer/AdmiScreen";
//import DrawerNavigator from '../src/DrawerNavigator';
import InicioScreen from '../Drawer/InicioScreen';
import { Icon } from 'react-native-elements';
import MenuNavigation from './MenuNavigation';

import { Platform, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';




const Tab = createBottomTabNavigator();


export default function Bottom() {
    const navigation = useNavigation();

    const screenOptions = (route, color) => {     
        let iconName
        switch (route.name) {
            case "Inicio":
            iconName = "home"
            break;

            case "Eventos":
            iconName = "calendar-blank"
            break;

            
            case "Administracion":
            iconName = "clipboard-text"
            break;

            
            case "MenuNavigation":
            iconName = "account"
            break;
        }

        return (
            <Icon
            type="material-community"
            name={iconName}
            size={27}
            color={color}/>
        )
    }
   
       return (  
        <Tab.Navigator 
        initialRouteName="Inicio"

        screenOptions={({ route }) => ({
            tabBarStyle: styles.tabBarStyle,
            tabBarShowLabel:false,
            tabBarActiveTintColor:  "#0000ff",
            tabBarInactiveTintColor:"#333333",
            headerShown:false,
            tabBarIcon: ({ color }) => screenOptions(route, color)
        })}>

             <Tab.Screen name="Inicio" component={InicioScreen} 
             options={{
             headerShown: true, 
             
             headerLeft: ({color, size, focused}) => {
                return(
                <TouchableOpacity onPress={() => navigation.openDrawer()}>   
                <Icon
                name={Platform.OS == 'menu' ? 'menu' : 'menu'}
                size={28}
                color= '#000000' 
                style={{marginLeft: 13}}/>

         </TouchableOpacity>
                );
             },
             }}  
             />
             <Tab.Screen name="Eventos" component={EventosScreen} options={{headerShown: true}} />
             <Tab.Screen name="Administracion" component={AdmiScreen} options={{headerShown: true}} />
             <Tab.Screen name="MenuNavigation" component={MenuNavigation}  options={{headerShown: false}} />
       </Tab.Navigator>

        );  
    }  

    const styles = StyleSheet.create({
        tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#BBA9BB',
            height: 55,  
        },
    });
