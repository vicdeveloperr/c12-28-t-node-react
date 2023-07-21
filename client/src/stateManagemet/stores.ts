import { create } from 'zustand'
import axios, { AxiosResponse } from 'axios'

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

export const userStore = create((set) => ({
  user: null,

  getUser: () => {
    const user = axios.get(`${API_URL}/mail`)

    set(() => ({ user: user }))
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
