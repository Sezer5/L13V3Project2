import { BASE_URL } from '@/helpers/config'
import axios from 'axios'
import { defineStore } from 'pinia'


export const useProductStore = defineStore('product', {
  state: () => ({ 
    products:[],
    colors:[],
    sizes:[],
    isLoading:false
   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getAllProducts(){
      this.isLoading=true
      try {
        const response = await axios.get(`${BASE_URL}/api/products`)
        this.products = response.data.data
        this.colors = response.data.colors
        this.sizes = response.data.sizes
        this.isLoading=false
      } catch (error) {
        console.log(error)
        this.isLoading=false
      }
    }
  },
})