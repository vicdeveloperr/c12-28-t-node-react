import { create } from 'zustand'

import { SERVER_URL } from '../utils/constants';

interface Category {
  idCategory: number;
  name: string;
  description: string;
  state: boolean;
}

interface CategoryState {
  categories: Category[];
  setCategories: (data: Array<Category>) => void;
}

export const useCategoriesStore = create<CategoryState>((set) => ({
  categories: [],
  setCategories: (data: Array<Category>) => {
    set({ categories: [...data] }, false)
  },

}))

fetch(`${SERVER_URL}/categories`)
  .then(res => res.json())
  .then(data => useCategoriesStore.getState().setCategories(data))
