import { MMKV } from 'react-native-mmkv';
import { StorageKey } from '../general-types/general-types';

export const storage = new MMKV({
  id: 'passwordmanager',
  encryptionKey: 'co.uk.stephenhiggins.passwordmanager',
});

export const setItem = (key: StorageKey, value: string) => {
  storage.set(key, value);
};

export const getItem = (key: StorageKey) => {
  return storage.getString(key);
};

export const deleteItem = (key: StorageKey) => {
  storage.delete(key);
};
