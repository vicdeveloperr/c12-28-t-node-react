import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface User {
  name: string;
  lastName: string;
  email: string;
}

interface UserStore {
  user: User;
  addUser: (obj: User) => void;
}

export const userStore = create(persist<UserStore>(
  (set, get) => ({
    user: {
      name: "",
      lastName: "",
      email: ""
    },

    addUser: (loggedUser: User) => {
      set({ user: { ...get().user, ...loggedUser } })
    },
    // crear funcion para editar los datos del usuario
  }),
  {
    name: 'user-storage',
    storage: createJSONStorage(() => localStorage)
  }
))
