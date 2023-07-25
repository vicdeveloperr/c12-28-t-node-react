import { create } from 'zustand'

interface Category {
  idCategory: number;
  name: string;
  description: string;
  state: boolean;
}

interface CategoryState {
  categories: Category[];
  fetchCategories: () => Promise<void>;
}

const API_URL = "http://localhost:3001"

export const useCategories = create<CategoryState>((set, get) => ({
  categories: [],
  fetchCategories: async () => {
    const res = await fetch(`${API_URL}/categories`)
    const data = await res.json()

    set({ categories: [...get().categories, data] }, false)
  },

}))
