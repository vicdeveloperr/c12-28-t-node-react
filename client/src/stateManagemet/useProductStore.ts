import { create } from "zustand"
import { persist } from 'zustand/middleware'

import { SERVER_URL } from "../utils/constants";
import { Product } from "../types/ProductType";

interface ProductStore {
  product: Product;
  allProducts: Product[];
  searchProducts: Product[];
  search: string;
  setProducts: (products: Product[]) => void
  setSearch: (search: string) => void;
  createProduct: (product: Product) => void;
}

const searchAndSortProducts = (products: Product[], search: string) =>
  products
    .filter(product => product.category.name.toLowerCase().includes(search.toLowerCase()))
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
  allProducts: [],
  searchProducts: [],
  search: "",

  setProducts: (products) => {
    set({
      allProducts: products,
      searchProducts: searchAndSortProducts(products, get().search)
    })
  },
  setSearch: (search) => {
    set({ search, searchProducts: searchAndSortProducts(get().allProducts, search) })
  },
  createProduct: (product) => {
    set({ allProducts: [...get().allProducts, { ...product }] })
  }
}), {
  name: "products-storage",
}))

fetch(`${SERVER_URL}/products`)
  .then(res => res.json())
  .then(data => { useProductStore.getState().setProducts(data) })
