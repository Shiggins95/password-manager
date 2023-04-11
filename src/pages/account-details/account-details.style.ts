import { StyleSheet } from 'react-native';
import { background, horizontalPadding, primary, primary10, primary20 } from '../../../vars.styles';

export const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalPadding,
    backgroundColor: primary10,
    paddingBottom: horizontalPadding + 10,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
  },
  container: {
    paddingHorizontal: horizontalPadding,
  },
  signOut: {
    borderColor: primary20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: horizontalPadding,
  },
  bottom: {
    marginTop: -10,
    flex: 1,
    backgroundColor: background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: horizontalPadding,
    shadowColor: primary10,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  link: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: primary10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
