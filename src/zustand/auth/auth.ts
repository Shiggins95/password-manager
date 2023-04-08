import { create } from 'zustand';
import { AuthState } from './auth.type';

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  setUser: (user: any) => set(() => ({ user })),
}));
