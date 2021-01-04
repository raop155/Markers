import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const Panel = ({ handleShowList, showList }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={handleShowList} title='List' />
      <Button title='Show/Hide' />
    </View>
  );
};

export default Panel;

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
