import React  from 'react'
import { StyleSheet,View,Text } from 'react-native';


function AdmiScreen() {
    return (
      <View style={styles.container}>
        <Text>Hola Admin</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    
    }
    });


export default AdmiScreen;  