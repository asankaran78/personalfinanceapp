import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import logo from './assets/images/Login.JPG';
import enter from './assets/images/Enter.JPG';


console.log(logo); // /logo.84287d09.png


const YourApp = () => {
  return (

      <View style={styles.container}>
      <img src={logo} alt="Logo" />
        <TouchableOpacity>
        <img src={enter} alt="Login" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default YourApp;