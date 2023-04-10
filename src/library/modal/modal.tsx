import React, { FC } from 'react';
import { Modal as RNModal, TouchableWithoutFeedback, View } from 'react-native';
import { ModalProps } from './modal.type';
import { styles } from './modal.style';

const Modal: FC<ModalProps> = ({ animationType, children, handleClose }) => {
  return (
    <RNModal visible transparent animationType={animationType || 'fade'}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.container}>
          <View style={styles.content}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

export default Modal;
