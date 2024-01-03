import { StyleSheet } from 'react-native';
import { error, horizontalPadding, success, warning } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: horizontalPadding,
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    padding: horizontalPadding,
    borderRadius: 10,
    borderWidth: 2,
  },
  success: {
    borderColor: success,
  },
  error: {
    borderColor: error,
  },
  warning: {
    borderColor: warning,
  },
  left: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
