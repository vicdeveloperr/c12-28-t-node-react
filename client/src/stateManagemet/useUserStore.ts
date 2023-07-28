import { create } from 'zustand'
import loadUserData from '../utils/loadUserData';

interface User {  
  user: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: number;
  role: { name: string };
}

interface UserStore {
  userData: User;
}

export const useUserStore = create<UserStore>()(() => {
  loadUserData();
  const loadUserDataStorage = JSON.parse(localStorage.userData  as string);
  
  return ({
    userData: {
      user: loadUserDataStorage.user,
      email: loadUserDataStorage.email,
      firstName: loadUserDataStorage.firstName,
      lastName: loadUserDataStorage.lastName,
      phone: loadUserDataStorage.phone,
      role: loadUserDataStorage.role.name
    }
  }
)});