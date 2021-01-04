import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Map, ModalView, Panel, Input } from './components';
import Constants from 'expo-constants';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [pointTemp, setPointTemp] = useState({});
  const [location, setLocation] = useState('');
  const [points, setPoints] = useState([]);

  const handleLongPress = ({ nativeEvent }) => {
    setPointTemp(nativeEvent.coordinate);
    setIsOpen(true);
  };
  const handleOnChangeText = (t) => {
    setLocation(t);
  };
  const cancelSubmit = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    const newPoint = { name: location, ...pointTemp };
    setPoints([...points, newPoint]);
    setLocation('');
    setIsOpen(false);
  };

  // console.log(points);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Map onLongPress={handleLongPress} />
      <ModalView isOpen={isOpen}>
        <Input title='Location:' placeholder='Insert location' onChangeText={handleOnChangeText} />
        <View style={styles.buttons}>
          <Button title='Cancel' onPress={cancelSubmit} />
          <Button title='Accept' onPress={handleSubmit} />
        </View>
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
  buttons: {
    // backgroundColor: '#000',
    height: 75,
    justifyContent: 'space-between',
  },
});
