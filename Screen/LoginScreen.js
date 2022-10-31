import React, { Component } from 'react';
import { Alert,  StyleSheet, View,  ScrollView, Text, TextInput, TouchableOpacity, Button, Image,
  KeyboardAvoidingView, Pressable} from 'react-native';
import { Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Video, AVPlaybackStatus } from "expo-av";

import LightVideo from '../videoFile/Video.mp4';


export default class LoginScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      check:false,
      correo : '',
      contrasenia : '',
      secureTextEntry : true,
    };
    
  }

  CheckBoxText(){
    this.setState({
      check:!this.state.check,
    })
}



//app
  render() {
    
    return (

      <View style={styles.container}>

        <Video
        source={LightVideo}
        style={styles.backgroundVideo}
        shouldPlay={true}
        isLooping={true}
        isMuted={true}
        resizeMode="cover"
        />

          <View style={styles.fondo}>
          <KeyboardAvoidingView
          >
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/Logo.png')}
                style={{
                  width: 280,
                  height: 290,
                  top:-90,
                  resizeMode: 'contain',
                
                }}
              />
          </View>
  
  <View style={styles.inputView} >
           <Icon name="envelope" size={20} color="white" 
            style={styles.inputIcon}/>

            <TextInput
            placeholder="Email"
            style={styles.inputText} 
            placeholderTextColor="#00bb2d"
            onChangeText={correo=>this.setState({correo})}/>
   </View>

   <View style={styles.inputView}>

       <Icon name="lock" size={25} color="white" 
            style={styles.inputIcon}/>
        <TextInput
           placeholder="Contraseña"
           style={styles.inputText}
           secureTextEntry={this.state.secureTextEntry ? true : false}
           placeholderTextColor="#00bb2d"
           onChangeText={contrasenia=>this.setState({contrasenia})}
          />     
            <Icon name={this.state.secureTextEntry  ? "eye-slash" : "eye"}
            size={25} color="white"
            onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}
            style={styles.iconsalida}/>     
   </View>



          <View style={styles.boton}>
            <Checkbox 
            color='blue'
            uncheckedColor='blue'
            status={this.state.check ? 'checked' : 'unchecked'}
            //value={this.state.check} onChange={()=>this.CheckBoxText()}
            onPress={() =>this.setState({check: !this.state.check})}
            />
            <Text style={styles.recuerda}>Recuerdame</Text>
          </View>
          

        
        
        <TouchableOpacity
         onPress={()=>{this.props.navigation.navigate("Contraseña")}}>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

      
        
        <TouchableOpacity 
        style={styles.loginBtn}  
        activeOpacity={0.5}
        //onPress={()=>{this.RegDataInDB()}}
        onPress={()=>{this.props.navigation.navigate("Home")}}
        >
        <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
  
        </KeyboardAvoidingView>   
      </View>

  
</View>    
           
    );
  }
}


//estilos
const styles= StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',  
    }, 
    
    inputIcon:{
      position:'absolute',
      top:13,
      left:17,
    },

    boton:{
      position:'absolute',
      top:296,
      left:18,
    },
    recuerda:{
      top:-30,
      left:40,
      fontSize:15,
      justifyContent:"center",
      color:"white"
    },
    
    iconsalida:{
      position:'absolute',
      top:13,
      left:265,
    },
    fondo: {  
      backgroundColor: 'black',
      width:330,
      height:480,
      borderRadius:35,
      opacity:0.8
  }, 
 
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40,
      
    },
    inputView:{
      width:298,
      backgroundColor:"#465881",
      borderRadius:35,
      height:50,
      left:15,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      top:-130
      
      
    },
    inputText:{
      height:80,
      fontSize:17,
      color:"white",
      left:27,
    },
    forgot:{
      color:"yellow",
      fontSize:15,
      //justifyContent:"center",
      textAlign: 'center',
      left:-4,
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
    loginText:{
      color:"white",
      fontSize:18,
    },
  });