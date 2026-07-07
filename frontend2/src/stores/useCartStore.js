import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from '@/helpers/config'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    cartItems:[]
   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})