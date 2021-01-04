import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ onLongPress, points, showMarkers }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {showMarkers &&
        points.map((point) => {
          return <Marker key={point.name} coordinate={point.coordinate} title={point.name} />;
        })}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '80%',
  },
});
