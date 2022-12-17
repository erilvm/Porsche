import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Share} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import { Share } from 'react-native-share';

//import files from '../assets/filesBase64';
import { useNavigation } from '@react-navigation/native';



const PerfilScreen = () => {

  const navigation = useNavigation();


  const myCustomShare = async() => {

  const shareOptions = {
   message: 'Se parte del Club Porsche ¡REGISTRATE! http://dtai.uteq.edu.mx/~erinem201/Registro/',
   //url: files.image1
    }

    try {
      const ShareResponse = await Share.share(shareOptions);
      //console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://www.clara.es/medio/2018/03/27/secretos-antiedad-ser-feliz__600x900.jpg',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Yazmin Ayala</Title>
            <Caption style={styles.caption}>Administrador</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Salvador</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>yazmin@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>40</Title>
            <Caption>Seguidores</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>2</Title>
            <Caption>Autos</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
       
        <TouchableRipple  onPress={() => navigation.navigate('Settings')}>
          <View style={styles.menuItem}>
            <Icon name="pencil-box-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Editar perfil</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('SettingsDetail')}>
          <View style={styles.menuItem}>
            <Icon name="car-back" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Perfil del automóvil</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Compatir invitación</Text>
          </View>
        </TouchableRipple>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'pink',
    flex: 1,
  },
    scrollView: {
      backgroundColor: 'white',
      //marginHorizontal: 10,
      marginBottom: 55,
    },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});