// @ts-nocheck

import { create, StateCreator } from 'zustand';
import { AuthState } from './auth.type';
import zustandFlipper from 'react-native-flipper-zustand';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const useAuthStore = create<AuthState>()(
  zustandFlipper(
    (set) =>
      ({
        user: undefined,
        userId: '',
        setUser: (user: FirebaseAuthTypes.UserCredential) => set((state) => ({ ...state, user })),
        setUserId: (userId: string) => set((state) => ({ ...state, userId })),
      } as StateCreator<AuthState>),
  ),
);
