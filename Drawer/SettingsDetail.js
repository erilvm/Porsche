import React  from 'react'
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native';


const  SettingsDetails = ({navigation})=> {
    return (
      <View style={styles.container}>
        <Text>Perfil del automóvil</Text>


        <TouchableOpacity 
        style={styles.loginBtn}  
        activeOpacity={0.5}
        //onPress={()=>{this.RegDataInDB()}}
        onPress={()=>navigation.goBack()}
        >
        <Text style={styles.loginText}>Salir</Text>
        </TouchableOpacity>

      </View>

      
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    
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
      top:-130
    },
    });


export default SettingsDetails;  