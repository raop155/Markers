import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Input = ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
});
