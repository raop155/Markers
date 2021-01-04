import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Map, ModalView, Panel } from './components';
import Constants from 'expo-constants';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [points, setPoints] = useState([]);
  const handleLongPress = ({ nativeEvent }) => {
    setPoints([...points, { coordinate: nativeEvent.coordinate }]);
  };

  console.log(points);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Map onLongPress={handleLongPress} />
      <ModalView isOpen={isOpen}>
        <Text>Lalalang</Text>
      </ModalView>
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
