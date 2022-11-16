import React  from 'react'
import { StyleSheet, Text, View } from 'react-native'

function EventosScreen() {
    return (
      <View style={styles.container}>
        <Text> Hola eventos screen</Text>
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

export default EventosScreen;  