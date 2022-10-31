import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from 'react-native-elements';
import Bottom from "../src/Bottom";
import Screen1 from "../Menu/Screen1";
import Screen2 from "../Menu/Screen2";
import Screen3 from "../Menu/Screen3";
import Screen4 from "../Menu/Screen4";
import CustomDrawer from '../component/CustomDrawer';


const Drawer = createDrawerNavigator();

function DrawerNavigator(){


    
    const screenOptions = (route, color) => {     
        let iconName
        switch (route.name) {
            case "InicioDrawer":
            iconName = "home"
            break;

            case "Screen1":
            iconName = "calendar-blank"
            break;

            
            case "Screen2":
            iconName = "clipboard-text"
            break;

            
            case "Screen3":
            iconName = "account"
            break;

            case "Screen4":
            iconName = "account"
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
       
            initialRouteName="InicioDrawer"

            screenOptions={({ route }) => ({
            drawerActiveBackgroundColor: '#E36B2C',
            drawerActiveTintColor: 'white',
            headerShown:false,
            drawerLabelStyle:{
            marginLeft: -20,
            },
            drawerIcon: ({ color }) => screenOptions(route, color)
        })}>
        
            <Drawer.Screen name="InicioDrawer" component={Bottom} options={{title:'InicioDrawer'}}/>
            <Drawer.Screen name="Screen1" component={Screen1} options={{title:'Catalogo', headerShown: true}}/>
            <Drawer.Screen name="Screen2" component={Screen2} options={{title:'Inicio2', headerShown: true}}/>
            <Drawer.Screen name="Screen3" component={Screen3} options={{title:'Administración', headerShown: true}}/>
            <Drawer.Screen name="Screen4" component={Screen4} options={{title:'Inicio3', headerShown: true}}/>
        </Drawer.Navigator>
    );
}


export default DrawerNavigator;