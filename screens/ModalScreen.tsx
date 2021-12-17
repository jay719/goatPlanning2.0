import { StatusBar } from 'expo-status-bar';
import React,  { useEffect, useState} from 'react'
import { Platform, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const handleUsernameText = (text: string) => {
            setUsernameValue(text)
        }

    const handlePasswordText = (text: string) => {                //usually would be event and event.target.value
        setPasswordValue(text)
    } 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, margin:20, height:28 }}
        onChangeText={handleUsernameText}
        value={usernameValue}
        placeholder="Username"
        />
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, margin:20, height:28}}
        secureTextEntry={true}
        onChangeText={handlePasswordText}
        value={passwordValue}
        placeholder="Password"
      /> 
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    
  );
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
