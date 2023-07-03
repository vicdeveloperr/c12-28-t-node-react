import {create} from 'zustand'



interface CounterState {
    count:number
    pokemones:number
    title:string
    carrito: object
}

export const useCounterStore = create<CounterState>(() => ({
    count: 10,
    title: "titulo",
    pokemones: 150,
    carrito:{}
  }))