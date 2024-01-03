import { StyleSheet } from 'react-native';
import { primary, primary20, secondary } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    height: 40,
    backgroundColor: secondary,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: primary20,
    justifyContent: 'center',
  },
  toggle: {
    backgroundColor: primary,
    borderRadius: 18,
    height: 35,
    width: 35,
    position: 'absolute',
    left: 2,
  },
});
