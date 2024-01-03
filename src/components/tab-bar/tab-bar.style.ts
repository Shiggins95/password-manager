import { StyleSheet } from 'react-native';
import { primary, secondary } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    width: '100%',
    height: 75,
    backgroundColor: primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderTopColor: secondary,
  },
  iconContainer: {
    alignItems: 'center',
    height: 75,
    justifyContent: 'center',
  },
});
