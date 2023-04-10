import { StyleSheet } from 'react-native';
import { background, horizontalPadding, modalBackdrop } from '../../../vars.styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: modalBackdrop,
  },
  top: {
    width: '100%',
  },
  sheet: {
    backgroundColor: background,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: horizontalPadding,
  },
});
