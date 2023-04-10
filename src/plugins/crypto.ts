import Aes from 'react-native-aes-crypto';
import DeviceInfo from 'react-native-device-info';
import { Password, StorageKey } from '../general-types/general-types';
import { getItem } from './storage';

export const generateSalt = async () => {
  return Aes.randomKey(16);
};

export const generateUuid = async () => {
  return Aes.randomKey(32);
};

export const generateKey = async (password: string) => {
  const cost = 5000;
  const length = 256;
  const salt = DeviceInfo.getBundleId();
  return Aes.pbkdf2(password, salt, cost, length);
};

export const encryptData = async (data: string, key: string) => {
  try {
    const iv = await generateSalt();
    const cipher = await Aes.encrypt(data, key, iv, 'aes-256-cbc');
    return { cipher, iv };
  } catch (e) {
    return { error: e, cipher: '', iv: '' };
  }
};

export const decryptData = async ({ cipher, iv }: { cipher: string; iv: string }, key: string) => {
  try {
    const decrypted = await Aes.decrypt(cipher, key, iv, 'aes-256-cbc');
    console.log(`decrypted ${cipher}`, decrypted);
    return { data: decrypted };
  } catch (e) {
    return { error: e, data: '' };
  }
};

export const decryptList = async (passwords: Password[]) => {
  const decryptedList = [];
  for (let i = 0; i < passwords.length; i++) {
    const { password, iv } = passwords[i];
    const { data } = await decryptData({ cipher: password, iv }, getItem(StorageKey.Key) as string);
    decryptedList.push({
      ...passwords[i],
      password: data,
      iv,
    });
  }
  return decryptedList;
};
