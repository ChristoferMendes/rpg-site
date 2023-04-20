import { create } from "zustand";

interface AuthStore {
  auth: boolean;
  actions: {
    login: () => void;
    logout: () => void;
  }
}

export const useAuthStore = create<AuthStore>(set => {
  const userAuth = localStorage.getItem('@auth')

  return {
    auth: userAuth === 'true',
    actions: {
      login: () => {
        localStorage.setItem('@auth', 'true')
        return set(({ auth: true }))
      },
      logout: () => {
        localStorage.setItem('@auth', 'false')
        return set({ auth: false })
      }
    }
  }
})