import { create } from 'zustand'

const API_URL = 'http://localhost:3001'

interface User {
  name: string;
  lastName: string;
  email: string;
}

interface Category {
  idCategory: number;
  name: string;
  description: string;
  state: boolean;
}

type userStore = {
  userData: User,
  getUser: () => void
}

export const useUserStore = create<userStore>()((set) => ({
  userData: {
    name: "",
    lastName: "",
    email: ""
  },

  getUser: () => {
    fetch(`${API_URL}/mail`)
      .then(response => response.json())
      .then(data => {
        set(() => ({ userData: data.data }))
      })
      .catch(error => console.log(error))
  },
}))

export const categoriesStore = create((set) => ({
  categories: [],

  getCategories: async () => {
    const categories = await axios.get(`${API_URL}/categories`)

    set(() => ({ categories: categories }))
  }
}))

export const productsStore = create((set) => ({
  products: [],

  getProducts: async () => {
    const products = await axios.get(`${API_URL}/products`)

    set(() => ({ products: products }))
  }
}))
