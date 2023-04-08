import React, { FC, useEffect, useState } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import Body from '../body/body';
import { BodyType } from '../body/body.type';
import { styles } from './snackbar.style';
import { SnackbarProps } from './snackbar.type';
import Icon from '../icon/icon';
import { error, success, warning } from '../../../vars.styles';

const { height } = Dimensions.get('window');

const Snackbar: FC<SnackbarProps> = ({ text, type, timeout, callback }) => {
  // region mapping
  const iconMapping = {
    Error: <Icon name="exclamationcircleo" provider="AntDesign" color={error} size={32} />,
    Warning: <Icon name="warning" provider="AntDesign" color={warning} size={32} />,
    Success: <Icon name="checkcircle" provider="AntDesign" color={success} size={32} />,
  };
  const styleMapping = {
    Error: styles.error,
    Warning: styles.warning,
    Success: styles.success,
  };
  const colorMapping = {
    Error: error,
    Warning: warning,
    Success: success,
  };
  // endregion

  // region state variables
  const timeoutValue = timeout || 2 * 1000;
  const translateY = new Animated.Value(0);
  const fade = new Animated.Value(0);
  const [timeoutId, setTimeoutId] = useState<any>();
  // endregion

  // region useEffects
  useEffect(() => {
    setTimeoutId(
      setTimeout(() => {
        callback();
      }, timeoutValue),
    );
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 1,
      duration: 100,
      // easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(fade, {
      toValue: 1,
      delay: timeoutValue - 500,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [translateY, fade]);
  // endregion

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fade.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 1],
                outputRange: [height, height - 100],
              }),
            },
          ],
        },
      ]}
    >
      <View style={[styles.content, styleMapping[type]]}>
        <View style={styles.left}>{iconMapping[type]}</View>
        <View style={styles.right}>
          <Body type={BodyType.Bold} text={text} color={colorMapping[type]} />
        </View>
      </View>
    </Animated.View>
  );
};

export default Snackbar;
