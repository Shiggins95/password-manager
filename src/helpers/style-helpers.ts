import { Platform } from 'react-native';

export const platformConditional = (android: number | string, ios: number | string) => {
  return Platform.OS === 'android' ? android : ios;
};
