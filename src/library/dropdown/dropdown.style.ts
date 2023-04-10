import { StyleSheet } from 'react-native';
import { error, primary10 } from '../../../vars.styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputBox: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: primary10,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  dropdownOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: primary10,
  },
  first: {
    borderTopColor: primary10,
    borderTopWidth: 1,
  },
  error: {
    borderColor: error,
  },
});
