import { StyleSheet } from 'react-native';
import { bottomTextSpacing, error, primary, primary10, text } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  label: {
    color: text,
  },
  placeholder: {
    color: text,
  },
  inputContainer: {
    width: '100%',
  },
  margin: {
    marginBottom: bottomTextSpacing,
  },
  error: {
    color: error,
    borderColor: error,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'transparent',
    backgroundColor: primary10,
    color: text,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 4,
  },
  inputFocussed: {
    borderColor: primary,
  },
});
