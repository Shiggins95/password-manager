import React, { FC } from 'react';
import { Text } from 'react-native';
import { BodyProps, BodyType } from './body.type';
import { styles } from './body.style';

const Body: FC<BodyProps> = ({ type, text, margin, color }) => {
  let styleKey: 'normal' | 'bold' | 'small' | 'boldSmall' | 'link' | 'linkSmall';
  switch (type) {
    case BodyType.Normal:
      styleKey = 'normal';
      break;
    case BodyType.Bold:
      styleKey = 'bold';
      break;
    case BodyType.Small:
      styleKey = 'small';
      break;
    case BodyType.BoldSmall:
      styleKey = 'boldSmall';
      break;
    case BodyType.Link:
      styleKey = 'link';
      break;
    case BodyType.LinkSmall:
      styleKey = 'linkSmall';
      break;
  }
  return <Text style={[styles[styleKey], margin ? styles.margin : null, color ? { color } : null]}>{text}</Text>;
};

export default Body;
