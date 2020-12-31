import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <MapView style={styles.map} />
      <Modal animationType='slide' transparent={true} visible={isOpen}>
        <View style={styles.center}>
          <View style={styles.modalView}>
            <Text>😃</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  map: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
