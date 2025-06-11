import { create } from "zustand";

interface User {
  email: string;
}

interface UserState {
  userDetails?: User;
  setUserDetails: (userDetails: User) => void;
  token?: string;
  setToken: (token: string) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  userDetails: undefined,
  setUserDetails: (userDetails) =>
    set((state) => ({ userDetails: { ...state.userDetails, ...userDetails } })),
  token: undefined,
  setToken: (token) => set(() => ({ token })),
}));
