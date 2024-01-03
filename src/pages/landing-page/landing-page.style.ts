import { StyleSheet } from 'react-native';
import { horizontalPadding, pagePaddingTop } from '../../../../encropass/vars.styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pagePaddingTop,
    paddingHorizontal: horizontalPadding,
    justifyContent: 'space-between',
  },
});
