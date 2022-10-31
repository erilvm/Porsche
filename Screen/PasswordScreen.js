import React, { Component } from 'react'
import { Text, View,  StyleSheet, TextInput,  TouchableOpacity, ImageBackground} from 'react-native';
import Imagen from "../Image/pass.jpg"

export class PasswordScreen extends Component {
  render() {
    return (
   <ImageBackground
          style={{flex: 1}}
          source={Imagen}>

<View style={styles.container}>
      <View style={styles.inputView} >
      <TextInput
      placeholder="Email"
      style={styles.inputText} 
      placeholderTextColor="#00bb2d"
      onChangeText={correo=>this.setState({correo})}/>
      </View>

      <TouchableOpacity 
        style={styles.loginBtn}  
        activeOpacity={0.5}>
        <Text style={styles.loginText}>Recuperar</Text>
      </TouchableOpacity>
      </View>  
   </ImageBackground>
  
 

    )
  }
}


//estilos
const styles= StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
  },  

 
  inputView:{
    width:330,
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    
  },
  inputText:{
    height:80,
    fontSize:17,
    color:"white",
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
  },
  loginText:{
    color:"white",
    fontSize:18,
  },

});

export default PasswordScreen
