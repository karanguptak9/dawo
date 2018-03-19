import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Landingscreen from './app/screens/Landingscreen.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Landingscreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
});