import { StyleSheet } from 'react-native';
import { bottomTextSpacing, primary, secondary } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
  },
  margin: {
    marginBottom: bottomTextSpacing,
  },
  primary: {
    backgroundColor: primary,
    borderColor: primary,
  },
  secondary: {
    backgroundColor: secondary,
    borderColor: secondary,
  },
  tertiary: {
    backgroundColor: 'transparent',
    borderColor: primary,
  },
});
