import React from 'react';
import { FlatList, Text, StyleSheet, View, Button } from 'react-native';

const List = ({ points }) => {
  const pointsNameList = points.map((point) => point.name);
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={pointsNameList}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Button title='Close' />
      </View>
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    height: '50%',
  },
  buttons: {},
});
