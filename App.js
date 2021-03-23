import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import ImagesPage from './components/ImagesPage';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>RAMIRO APP.JS</Text>
    //   <StatusBar style="auto" />
      <Main />
    //   <ImagesPage />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeComponent: {
    flex: 1,
    backgroundColor: '#ABABAB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
