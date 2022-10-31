import React  from 'react'
import { StyleSheet,View,Text } from 'react-native';


function InicioScreen() {
    return (
      <View style={styles.container}>
        <Text>Hola estas inicio (slider de eventos)</Text>
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


export default InicioScreen;  