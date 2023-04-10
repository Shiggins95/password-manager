import React, { FC, useEffect } from 'react';
import { Animated, Dimensions, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { SideTrayProps } from './side-tray.type';
import { styles } from './side-tray.style';

const { width } = Dimensions.get('window');

const SideTray: FC<SideTrayProps> = ({ side, children, handleClose }) => {
  const translateX = new Animated.Value(0);
  const modifier = side === 'left' ? -1 : 1;
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [translateX]);
  return (
    <Modal visible transparent animationType="fade">
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.content,
              side === 'left' ? styles.left : styles.right,
              {
                width: (width / 5) * 4,
                transform: [
                  {
                    translateX: translateX.interpolate({
                      inputRange: [0, 1],
                      outputRange: [width * modifier, side === 'left' ? 0 : width / 5],
                    }),
                  },
                ],
              },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SideTray;
