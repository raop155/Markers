import React from 'react';
import { FlatList, Text, StyleSheet, View, Button } from 'react-native';

const List = ({ points, setIsOpen }) => {
  const pointsNameList = points.map((point) => point.name);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={pointsNameList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.buttons}>
        <Button title='Close' onPress={() => setIsOpen(false)} />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 450,
    justifyContent: 'space-between',
  },
  list: {
    flex: 1,
  },
  item: {
    height: 43,
    justifyContent: 'center',
    padding: 15,
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  buttons: {
    padding: 10,
  },
});
