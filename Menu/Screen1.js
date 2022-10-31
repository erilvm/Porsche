import React  from 'react'
import { StyleSheet,View,Text } from 'react-native';


function Screen1() {
    return (
      <View style={styles.container}>
        <Text>Screen1</Text>
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


export default Screen1;  