export enum FirebaseCollections {
  Passwords = 'passwords',
}

export interface Password {
  password: string;
  iv: string;
}

export interface PasswordList {
  passwords: Password[];
}

export enum StorageKey {
  Key = 'key',
}
