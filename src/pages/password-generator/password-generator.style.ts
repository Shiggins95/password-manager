import { StyleSheet } from 'react-native';
import { horizontalPadding, pagePaddingTop } from '../../../vars.styles';

export const styles = StyleSheet.create({
  container: {
    paddingTop: pagePaddingTop,
    paddingHorizontal: horizontalPadding,
  },
  slider: {
    width: '100%',
    height: 50,
  },
  lengthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  length: {
    marginLeft: 10,
  },
  passwordOutputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: horizontalPadding,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 88,
  },
  passwordOutput: {
    width: '80%',
  },
  copyToClipboard: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
