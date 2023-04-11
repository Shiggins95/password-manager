import { StyleSheet } from 'react-native';
import { horizontalPadding, pagePaddingTop, primary10, primary20, secondary } from '../../../vars.styles';

export const styles = StyleSheet.create({
  container: {
    paddingTop: pagePaddingTop,
    paddingHorizontal: horizontalPadding,
  },
  primaryLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: primary20,
    borderRadius: 10,
    width: '30%',
  },
  primaryButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: secondary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: secondary,
  },
  emailRow: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: primary10,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 9,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  right: {
    flex: 1,
  },
  emailSmall: {
    width: '70%',
  },
  confirmModalContent: {
    alignItems: 'center',
  },
});
