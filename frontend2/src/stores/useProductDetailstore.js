import { BASE_URL } from '@/helpers/config'
import axios from 'axios'
import { defineStore } from 'pinia'


export const useProductDetailStore = defineStore('productDetail', {
  state: () => ({ 
    product:null,
    isLoading:false
   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getProductByTerm(term){
      this.isLoading=true
      try {
        const response = await axios.get(`${BASE_URL}/api/products/${term}/term`)
        this.product = response.data.data[0]
        this.isLoading=false
      } catch (error) {
        console.log(error)
        this.isLoading=false
      }
    }
  },
})