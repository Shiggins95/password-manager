import { StyleSheet } from 'react-native';
import { platformConditional } from '../../helpers/style-helpers';
import { horizontalPadding } from '../../../vars.styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: platformConditional(60, 110),
    paddingHorizontal: horizontalPadding,
    justifyContent: 'space-between',
  },
});
