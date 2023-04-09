import firestore from '@react-native-firebase/firestore';
import { FirebaseCollections, PasswordList } from '../general-types/general-types';

export const getPasswords = async (userId: string): Promise<PasswordList | undefined> => {
  try {
    return (await firestore().collection(FirebaseCollections.Passwords).doc(userId).get()).data() as PasswordList;
  } catch (e) {
    console.log('error retrieving passwords', e);
    return undefined;
  }
};

export const savePasswords = async (userId: string, data: PasswordList) => {
  try {
    await firestore().collection(FirebaseCollections.Passwords).doc(userId).set(data);
    return true;
  } catch (e) {
    console.log('error saving passwords', e);
    return false;
  }
};

export const passwordRealtimeUpdates = (userId: string, callback: (passwords: PasswordList) => void) => {
  return firestore()
    .collection(FirebaseCollections.Passwords)
    .doc(userId)
    .onSnapshot((documentSnapshot) => {
      callback(documentSnapshot.data() as PasswordList);
    });
};
