import React, { FC } from 'react';
import { Text } from 'react-native';
import { HeadlineProps, HeadlineStyleKey, HeadlineType } from './headline.type';
import { styles } from './headline.style';

const Headline: FC<HeadlineProps> = ({ type, text, noMargin }) => {
  let styleKey: HeadlineStyleKey;
  switch (type) {
    case HeadlineType.Title:
      styleKey = 'title';
      break;
    case HeadlineType.Subtitle:
      styleKey = 'subtitle';
      break;
    case HeadlineType.Heading:
      styleKey = 'heading';
      break;
    case HeadlineType.Subheading:
      styleKey = 'subheading';
      break;
  }
  return <Text style={[styles.default, styles[styleKey], !noMargin ? styles.margin : null]}>{text}</Text>;
};

export default Headline;
