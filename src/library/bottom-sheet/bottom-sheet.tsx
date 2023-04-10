import React, { FC, useEffect } from 'react';
import { Animated, Dimensions, Modal, TouchableOpacity, View } from 'react-native';
import { styles } from './bottom-sheet.style';
import { BottomSheetProps } from './bottom-sheet.type';
import Headline from '../headline/headline';
import { HeadlineType } from '../headline/headline.type';

const { height } = Dimensions.get('window');
const BottomSheet: FC<BottomSheetProps> = ({ size, title, children, handleClose }) => {
  // region state variables
  const translateY = new Animated.Value(0);
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  // endregion

  // region useEffects
  useEffect(() => {
    Animated.timing(translateY, {
      useNativeDriver: true,
      duration: 500,
      toValue: 1,
    }).start();
  }, [translateY]);
  // endregion

  return (
    <Modal visible transparent animationType="fade">
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={[{ height: `${100 - (size || 60)}%` }, styles.top]}
          onPress={() => handleClose()}
        />
        <Animated.View
          style={[
            {
              height: `${size || 60}%`,
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [height, 0],
                  }),
                },
              ],
            },
            styles.sheet,
          ]}
        >
          {!!title && <Headline type={HeadlineType.Subheading} text={title} />}
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
