import React, { FC } from 'react';
import { Modal as RNModal, View } from 'react-native';
import { ModalProps } from './modal.type';
import { styles } from './modal.style';

const Modal: FC<ModalProps> = ({ animationType, children }) => {
  return (
    <RNModal visible transparent animationType={animationType || 'fade'}>
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
      </View>
    </RNModal>
  );
};

export default Modal;
