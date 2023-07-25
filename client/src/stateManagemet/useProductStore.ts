import { create } from "zustand"
import { persist } from 'zustand/middleware'

import { SERVER_URL } from "../utils/constants";

interface Product {
  idProduct: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  category: {
    name: string;
  }
  topic_1: string;
  detail_1: string;
  topic_2?: string,
  detail_2?: string,
  topic_3?: string,
  detail_3?: string,
  topic_4?: string;
  detail_4?: string;
  topic_5?: string;
  detail_5?: string;
  topic_6?: string;
  detail_6?: string;
  topic_7?: string;
  detail_7?: string;
  topic_8?: string;
  detail_8?: string;
}

interface ProductStore {
  product: Product;
  products: Product[];
  productsByCategory: Product[];
  search: string;
  setProducts: (products: Product) => void
  setSearch: (search: string) => void;
}

const searchAndSortProducts = (products: Product[], search: string) =>
  products
    .filter(product => product.category.name.includes(search.toLowerCase()))
    .sort((a, b) => a.category.name.localeCompare(b.category.name))


export const useProductStore = create(persist<ProductStore>((set, get) => ({
  product: {
    idProduct: 0,
    name: "",
    description: "",
    price: 0,
    category: {
      name: ""
    },
    stock: 0,
    topic_1: "",
    detail_1: ""
  },
  products: [],
  productsByCategory: [],
  search: "",

  setProducts: (products) => {
    set({
      products: [...products]
    })
  },
  setSearch: (search) => {
    set({ search, products: searchAndSortProducts(get().products, search) })
  }
}), {
  name: "products-storage",
}))

fetch(`${SERVER_URL}/products`)
  .then(res => res.json())
  .then(data => { useProductStore.getState().setProducts(data) })
