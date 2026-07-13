import { BASE_URL } from '@/helpers/config'
import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

const toast = useToast();

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    cartItems:[],
    isLoading:false
   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    addProductToCart(item){
      
      toast.success(`${item.color.name} added`, {
        timeout: 2000
      });
    }
  },
})