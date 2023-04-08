// @ts-nocheck

import { create, StateCreator } from 'zustand';
import { AuthState } from './auth.type';
import zustandFlipper from 'react-native-flipper-zustand';

export const useAuthStore = create<AuthState>()(
  zustandFlipper(
    (set) =>
      ({
        user: undefined,
        setUser: (user: any) => set(() => ({ user })),
      } as StateCreator<AuthState>),
  ),
);
