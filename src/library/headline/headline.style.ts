import { StyleSheet } from 'react-native';
import { bottomTextSpacing, text } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  default: {
    color: text,
    fontWeight: '900',
  },
  margin: {
    marginBottom: bottomTextSpacing,
  },
  title: {
    fontSize: 46,
    lineHeight: 52,
  },
  subtitle: {
    fontSize: 36,
    lineHeight: 42,
  },
  heading: {
    fontSize: 24,
    lineHeight: 30,
  },
  subheading: {
    fontSize: 18,
    lineHeight: 24,
  },
});
