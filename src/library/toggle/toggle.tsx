import React, { FC, useEffect, useMemo, useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { ToggleProps } from './toggle.type';
import { styles } from './toggle.style';
import Value = Animated.Value;
import { background, secondary, secondary10 } from '../../../vars.styles';

const Toggle: FC<ToggleProps> = ({ value, handleChange }) => {
  // region state variables
  const left = new Animated.Value(0);
  const right = new Animated.Value(0);
  const [color, setColor] = useState(value ? secondary : background);
  // endregion

  // region useEffects & useMemos
  const translate = useMemo<Value>(() => {
    return value ? left : right;
  }, [value]);

  useEffect(() => {
    if (value) {
      Animated.sequence([
        Animated.timing(left, {
          toValue: -0.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(left, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
      const listener = left.addListener((v) => {
        if (v.value >= 0.5) {
          setColor(secondary);
        }
      });
      return () => {
        left.removeListener(listener);
      };
    }
  }, [left, value]);

  useEffect(() => {
    if (!value) {
      Animated.sequence([
        Animated.timing(right, {
          toValue: -0.18,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(right, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      const listener = right.addListener((v) => {
        if (v.value >= 0.5) {
          setColor(secondary10);
        }
      });
      return () => {
        right.removeListener(listener);
      };
    }
  }, [right, value]);
  // endregion

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleChange} style={[styles.container, { backgroundColor: color }]}>
      <Animated.View
        style={[
          styles.toggle,
          {
            transform: [
              {
                translateX: translate.interpolate({
                  inputRange: [0, 1],
                  outputRange: value ? [0, 34] : [36, 0],
                }),
              },
            ],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default Toggle;
