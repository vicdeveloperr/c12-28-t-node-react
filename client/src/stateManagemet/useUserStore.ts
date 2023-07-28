import { create } from 'zustand'
import loadUserData from '../utils/loadUserData';
import { TypeUser } from '../types/types';

interface UserStore {
  userData: TypeUser;
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