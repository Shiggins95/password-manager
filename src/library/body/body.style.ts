import { StyleSheet } from 'react-native';
import { bottomTextSpacing, text } from '../../../vars.styles';

export const styles = StyleSheet.create({
  default: {
    color: text,
  },
  normal: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bold: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 24,
  },
  small: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  boldSmall: {
    fontSize: 12,
    fontWeight: '900',
    lineHeight: 20,
  },
  link: {
    fontSize: 16,
    fontWeight: '900',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    lineHeight: 28,
  },
  linkSmall: {
    fontSize: 12,
    fontWeight: '900',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    lineHeight: 24,
  },
  margin: {
    marginBottom: bottomTextSpacing,
  },
});
