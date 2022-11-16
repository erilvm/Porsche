//import React  from 'react';  
import React, { Component } from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import EventosScreen from "../Drawer/EventosScreen";
import AdmiScreen from "../Drawer/AdmiScreen";
import DrawerNavigator from '../src/DrawerNavigator';
import Drawer2 from '../src/Drawer2';
import Drawer3 from '../src/Drawer3';
import Drawer4 from '../src/Drawer4';
//import InicioScreen from '../Drawer/InicioScreen';
import { Icon } from 'react-native-elements';
import MenuNavigation from '../src/MenuNavigation';
import { Platform, TouchableOpacity,  Alert, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function Bottom (){

    const  navigation = useNavigation();

    const  screenOptions = (route, color) => {     
        let iconName
        switch (route.name) {
            case "Inicio":
            iconName = "home"
            break;

            case "Screen1":
            iconName = "calendar"
            break;

            
            case "Screen2":
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

             <Tab.Screen name="Inicio" 
             component={DrawerNavigator} 
             //component={InicioScreen} 
             options={{
             headerShown: false, 
             
             headerLeft: ({color, size, focused}) => {
                return(
                <TouchableOpacity  onPress={() =>navigation.openDrawer()}>   
                <Icon
                name={Platform.OS == 'menu' ? 'menu' : 'menu'}
                size={28}
                color= '#000000' 
                style={{marginLeft: 16}}/>

         </TouchableOpacity>
                );
             },
             }}  
             />
             <Tab.Screen name="Screen1" component={Drawer2} options={{headerShown: false }}/>
             <Tab.Screen name="Screen2" component={Drawer3} options={{title:'Screen2', headerShown: false}} />
             <Tab.Screen name="MenuNavigation" component={Drawer4} options={{headerShown: false}} />
       </Tab.Navigator>

        );  
    }  


    export default Bottom;

    const styles = StyleSheet.create({
        tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#BBA9BB',
            height: 55,  
        },
    });
