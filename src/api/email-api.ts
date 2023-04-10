import { Email, EmailApiProps } from './email-api.type';
import firestore from '@react-native-firebase/firestore';
import { FirebaseCollections } from '../general-types/general-types';

export class EmailApi {
  userId;
  constructor({ userId }: EmailApiProps) {
    this.userId = userId;
  }

  async getEmails() {
    try {
      const emailsRequest = await firestore().collection(FirebaseCollections.Emails).doc(this.userId).get();
      const { emails } = emailsRequest?.data() || { emails: [] };
      return { success: true, data: emails };
    } catch (e) {
      return { success: false, data: [] };
    }
  }
  async createEmail(newEmail: Email, allEmails: Email[]) {
    const correspondingEmail = allEmails.find((e) => e.email === newEmail.email);
    if (correspondingEmail) {
      return { success: false };
    }
    try {
      await firestore()
        .collection(FirebaseCollections.Emails)
        .doc(this.userId)
        .set({
          emails: [...allEmails, newEmail],
        });
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  }

  async changePrimaryEmail(id: string, allEmails: Email[]) {
    const correspondingEmail = allEmails.find((e) => e.id === id);
    if (!correspondingEmail) {
      return { success: false };
    }
    try {
      await firestore()
        .collection(FirebaseCollections.Emails)
        .doc(this.userId)
        .set({
          emails: allEmails.map((e) => {
            if (e.id === id) {
              return { ...e, primary: true };
            }
            return { ...e, primary: false };
          }),
        });
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  }

  async deleteEmail(id: string, allEmails: Email[]) {
    const correspondingEmail = allEmails.find((e) => e.id === id);
    if (!correspondingEmail) {
      return { success: false };
    }
    try {
      await firestore()
        .collection(FirebaseCollections.Emails)
        .doc(this.userId)
        .set({
          emails: allEmails.filter((e) => e.id !== id),
        });
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  }
}
