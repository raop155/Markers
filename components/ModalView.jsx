import React from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';

const ModalView = (props) => {
  const { isOpen } = props;

  return (
    <Modal animationType='slide' transparent={true} visible={isOpen}>
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>😃</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default ModalView;
