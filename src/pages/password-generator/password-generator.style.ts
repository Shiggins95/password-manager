import { StyleSheet } from 'react-native';
import { horizontalPadding, pagePaddingTop, primary10 } from '../../../vars.styles';

export const styles = StyleSheet.create({
  container: {
    paddingTop: pagePaddingTop,
    paddingHorizontal: horizontalPadding,
  },
  sliderContainer: {
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 50,
  },
  labelsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  passwordOutputContainer: {
    backgroundColor: primary10,
    flexDirection: 'row',
    paddingHorizontal: horizontalPadding,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 88,
    marginBottom: 20,
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
  toggleSection: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: primary10,
    borderBottomWidth: 1,
  },
  first: {
    borderTopColor: primary10,
    borderTopWidth: 1,
  },
  last: {
    marginBottom: 20,
  },
});
