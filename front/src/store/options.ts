import { create } from "zustand";

export type Option = 'ABILITIES' | 'INVENTORY' | 'STORY'

interface OptionsStore {
  currentOption: Option
  actions: {
    changeCurrentOption: (option: 'ABILITIES' | 'INVENTORY' | 'STORY') => void
  }
}

export const useOptionsStore = create<OptionsStore>((set) => ({
  currentOption: 'ABILITIES',
  actions: {
    changeCurrentOption: (option) => set({ currentOption: option }),
  },
}))