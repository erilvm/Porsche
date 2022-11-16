import React, { Component } from 'react';  
import { StyleSheet, View,Button,TouchableOpacity ,Text} from 'react-native';


export default class PerfilScreen extends Component {  

    render() {  
        return (  
 
            <View style={styles.AppStyle}>  
                
        <TouchableOpacity 
        style={styles.loginBtn}  
        activeOpacity={0.5}
        onPress={()=>{this.props.navigation.navigate("SettingsDetail")}}
        >
        <Text style={styles.loginText}>Settings detallss</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.loginBtn}  
        activeOpacity={0.5}
        onPress={()=>{this.props.navigation.navigate("Settings")}}
        >
        <Text style={styles.loginText}>Settings</Text>
        </TouchableOpacity>
  

            </View>  
        );  
    }  
}  

  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    }, 
    AppStyle:{
        flex: 1,
       // backgroundColor: "#cccccc",
        padding: 20,
        marginTop: 30,
        paddingBottom: 3,
        width: '100%'
      },  
   
    ButtonView: {
        marginTop: 45,
        alignItems: 'center',
        top: 130
    },
    loginBtn:{
        width:"60%",
        backgroundColor:"#fb5b5a",
        borderRadius:35,
        height:50,
        padding: 10,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:70,
        marginRight:70,
        marginTop:30,
        marginBottom:50,
        top:130
      },
})  