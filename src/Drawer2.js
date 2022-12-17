import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from 'react-native-elements';

import Screen1 from "../Menu/Screen1";
import EventosScreen from "../Drawer/EventosScreen";
import Screen2 from "../Menu/Screen2";
import Screen3 from "../Menu/Screen3";
import Screen4 from "../Menu/Screen4";

//import Bottom from '../src/Bottom'
import CustomDrawer from '../component/CustomDrawer';
import InicioScreen from "../Drawer/InicioScreen";


const Drawer = createDrawerNavigator();

function Drawer2(){


    
    const screenOptions = (route, color) => {     
        let iconName
        switch (route.name) {
            case "InicioDrawer2":
            iconName = "home"
            break;

            case "Pag1":
            iconName = "account-group"
            break;

            
            case "Pag2":
            iconName = "account-multiple"
            break;

            
            case "Pag3":
            iconName = "clipboard-text"
            break;

            case "Pag4":
            iconName = "image-text"
            break;
        }

        return (
            <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}/>
        )
    }

    return (
        <Drawer.Navigator

            drawerContent={props => <CustomDrawer {... props} />}
       
            initialRouteName="Pag1"

            screenOptions={({ route }) => ({
            drawerActiveBackgroundColor: '#E36B2C',
            drawerActiveTintColor: 'white',
            headerShown:true,
            headerStyle: {backgroundColor: '#00BCD4'},
            headerTintColor: 'white',
            drawerLabelStyle:{
            marginLeft: -20,
            },
            drawerIcon: ({ color }) => screenOptions(route, color)
        })}>
            <Drawer.Screen name="InicioDrawer2" component={InicioScreen} options={{title:'Inicio', headerShown: true}}/>
            <Drawer.Screen name="Pag1" component={EventosScreen} options={{title:'Eventos', headerShown: true}}/>
            <Drawer.Screen name="Pag2" component={Screen2} options={{title:'Miembros', headerShown: true}}/>
            <Drawer.Screen name="Pag3" component={Screen3} options={{title:'Administración', headerShown: true}}/>
            <Drawer.Screen name="Pag4" component={Screen4} options={{title:'Catalogo', headerShown: true}}/>
        </Drawer.Navigator>
    );
}


export default Drawer2;