import { create } from "zustand";

interface LogoutQuestionMarkStore {
  logoutQuestionMark: boolean;
  loggedOut: boolean;
  actions: {
    showLogoutQuestionMark: () => void;
    hideLogoutQuestionMark: () => void;
    showLogoutSuccessful: () => void;
  }
}

export const useLogoutQuestionMarkStore = create<LogoutQuestionMarkStore>(set => {
  return {
    logoutQuestionMark: false,
    loggedOut: false,
    actions: {
      showLogoutQuestionMark: () => {
        return set(({ logoutQuestionMark: true }))
      },
      hideLogoutQuestionMark: () => {
        return set(({ logoutQuestionMark: false }))
      },
      showLogoutSuccessful: () => {
        return set(({ loggedOut: true }))
      }
    }
  }
})