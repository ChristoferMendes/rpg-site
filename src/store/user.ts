import { create } from "zustand";

interface User {
  user: {
    id: number | undefined;
    name: string;
    email: string;
  }
  actions: {
    
  }
}

export const useUserStore = create<User>(set => ({
  user: {
    id: NaN,
    email: '',
    name: '',
  },
  actions: {

  }
}))