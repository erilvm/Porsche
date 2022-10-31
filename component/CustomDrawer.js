import React  from 'react'
import { StyleSheet,View,Text, ImageBackground, Image, Dimensions} from 'react-native';
import {
   DrawerContentScrollView, 
   DrawerItemList, 
  } from '@react-navigation/drawer';

const {width} = Dimensions.get("screen");

const CustomDrawer = props =>  {
    return (
      <DrawerContentScrollView {... props}>
        <ImageBackground source={require('../assets/drawer.jpg')}  style={{height: 140}}>
          <Image source={require('../assets/user.jpg')} style={styles.userImg} />
        </ImageBackground>
      <View style={styles.drawerlist}>
        <DrawerItemList {... props} />
      </View>
      </DrawerContentScrollView>
    );
  };


  export default CustomDrawer;  


  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },

    userImg: {
      width: 110,
      height: 110,
      borderRadius: 110 / 2,
      position: 'absolute',
      left: width / 2 -110,
      bottom: -110 /2,
      borderWidth: 4,
      borderColor: 'white',
    },
    drawerlist: {
      marginTop: 65,
    }
    });