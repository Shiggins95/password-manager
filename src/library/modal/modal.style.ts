import { StyleSheet } from 'react-native';
import { background, horizontalPadding, modalBackdrop } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: modalBackdrop,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalPadding,
  },
  content: {
    width: '100%',
    backgroundColor: background,
    padding: horizontalPadding,
    borderRadius: 10,
  },
});
