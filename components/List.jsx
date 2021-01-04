import React from 'react';
import { FlatList, Text, StyleSheet, View, Button } from 'react-native';

const List = ({ points, setIsOpen }) => {
  const pointsNameList = points.map((point) => point.name);
  return (
    <>
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
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    // height: '50%',
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 20,
  },
  buttons: {
    // paddingBottom: 15,
    padding: 10,
  },
});
