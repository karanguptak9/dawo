import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Landingscreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <View style = {styles.logoContainer}>
          
          </View>
       
        <View style = {styles.loginContainer}>
          
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B14F6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  
  logoContainer: {
    flex: 1,
    alignItems: 'center'

  },
});




/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/