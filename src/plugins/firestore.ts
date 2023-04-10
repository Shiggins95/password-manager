import firestore from '@react-native-firebase/firestore';
import { FirebaseCollections, PasswordList } from '../general-types/general-types';
import { EmailList } from '../api/email-api.type';

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
      callback((documentSnapshot?.data() as PasswordList) || []);
    });
};

export const getEmails = async (userId: string) => {
  try {
    return (await firestore().collection(FirebaseCollections.Emails).doc(userId).get()).data() as EmailList;
  } catch (e) {
    console.log('error retrieving emails', e);
    return undefined;
  }
};

export const saveEmails = async (userId: string, data: EmailList) => {
  try {
    await firestore().collection(FirebaseCollections.Emails).doc(userId).set(data);
    return true;
  } catch (e) {
    console.log('error saving passwords', e);
    return false;
  }
};

export const emailRealtimeUpdates = (userId: string, callback: (emails: EmailList) => void) => {
  return firestore()
    .collection(FirebaseCollections.Emails)
    .doc(userId)
    .onSnapshot((documentSnapshot) => {
      callback((documentSnapshot?.data() as EmailList) || []);
    });
};
