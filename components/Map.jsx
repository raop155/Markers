import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = ({ onLongPress }) => {
  return <MapView style={styles.map} onLongPress={onLongPress} />;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '80%',
  },
});
