import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = ({ onLongPress, points, showMarkers }) => {
  const [location, setLocation] = useState(null);

  const searchLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      return Alert.alert('You do not have the necessary permissions!!');
    }
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    setLocation(location);
  };

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <>
      {!location ? (
        <MapView
          style={styles.map}
          onLongPress={onLongPress}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        >
          {showMarkers &&
            points.map((point) => {
              return <Marker key={point.name} coordinate={point.coordinate} title={point.name} />;
            })}
        </MapView>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color='#0078d7' />
          <Text style={styles.text}>Loading...</Text>
        </View>
      )}
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '80%',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  text: {
    fontSize: 20,
  },
});
