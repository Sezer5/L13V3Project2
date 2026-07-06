import { BASE_URL } from '@/helpers/config'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductDetailsStore = defineStore('productdetail', {
  state: () => ({ 
    product:null,
    isLoading:false
   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getProductsWithTerm(slug){
      this.isLoading=true
      try {
        const response = await axios.get(`${BASE_URL}/products/${slug}/productdetail`)
        this.product=response.data.data
        this.isLoading=false
      } catch (error) {
        console.log(error)
        this.isLoading=false
      }
    },
  },
})