import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import User = FirebaseAuthTypes.User;

export interface AuthState {
  user?: User;
  setUser: (user: FirebaseAuthTypes.User) => void;
  setUserId: (userId: string) => void;
  userId: string;
}
