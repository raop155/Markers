import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Map, ModalView, Panel } from './components';
import Constants from 'expo-constants';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Map />
      <ModalView isOpen={isOpen} />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
