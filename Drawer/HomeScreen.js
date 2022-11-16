import React  from 'react'
import { StyleSheet,View,Text } from 'react-native';


function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Hola estas home (slider de eventos)</Text>
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


export default HomeScreen;  