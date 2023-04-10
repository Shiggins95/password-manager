export enum FirebaseCollections {
  Passwords = 'passwords',
  Emails = 'emails',
}

export interface Password {
  id: string;
  password: string;
  iv: string;
  website: string;
  username?: string;
  email?: string;
}

export interface PasswordList {
  passwords: Password[];
}

export enum StorageKey {
  Key = 'key',
}
