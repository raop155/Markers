import React from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';

const ModalView = ({ isOpen, children }) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isOpen}>
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    minWidth: '75%',
    height: '65%',
  },
});

export default ModalView;
