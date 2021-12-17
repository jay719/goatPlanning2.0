import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View, ImageBackground } from '../components/Themed';


export default function LoadingGifScreen() {

    return(
    <ImageBackground source={require('../assets/color-loading.gif')} style={styles.container}>

    </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
