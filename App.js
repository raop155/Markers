import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Map, ModalView, Panel, Input, List } from './components';
import Constants from 'expo-constants';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [pointTemp, setPointTemp] = useState({});
  const [location, setLocation] = useState('');
  const [points, setPoints] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setPointTemp(nativeEvent.coordinate);
    setShowList(false);
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
  const handleShowList = () => {
    setShowList(true);
    setIsOpen(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Map onLongPress={handleLongPress} />
      <ModalView isOpen={isOpen}>
        {showList ? (
          <>
            <List points={points} />
          </>
        ) : (
          <>
            <Input
              title='Location:'
              placeholder='Insert location'
              onChangeText={handleOnChangeText}
            />
            <View style={styles.buttons}>
              <Button title='Cancel' onPress={cancelSubmit} />
              <Button title='Accept' onPress={handleSubmit} />
            </View>
          </>
        )}
      </ModalView>
      <Panel handleShowList={handleShowList} showList={showList} />
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
