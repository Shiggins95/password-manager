import { MMKV } from 'react-native-mmkv';
import mmkvFlipper from 'rn-mmkv-storage-flipper';

if (__DEV__) {
  mmkvFlipper(MMKV);
}
export const storage = new MMKV();

export const setItem = (key: string, value: string) => {
  storage.set(key, value);
};

export const getItem = (key: string) => {
  return storage.getString(key);
};

export const deleteItem = (key: string) => {
  storage.delete(key);
};
