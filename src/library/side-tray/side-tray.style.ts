import { StyleSheet } from 'react-native';
import { background, modalBackdrop, pagePaddingTop, primary } from '../../../vars.styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: modalBackdrop,
  },
  content: {
    height: '100%',
    backgroundColor: background,
    paddingTop: pagePaddingTop,
  },
  left: {
    borderRightWidth: 2,
    borderRightColor: primary,
  },
  right: {
    borderLeftWidth: 2,
    borderLeftColor: primary,
  },
});
