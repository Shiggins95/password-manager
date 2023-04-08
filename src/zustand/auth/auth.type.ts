import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthState {
  user?: FirebaseAuthTypes.UserCredential;
  setUser: (user: FirebaseAuthTypes.UserCredential) => void;
}
