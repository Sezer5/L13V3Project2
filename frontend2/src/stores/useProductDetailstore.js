import { BASE_URL } from '@/components/helpers/config'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductDetailStore = defineStore('productdetail', {
  state: () => ({ 
    product:null,
    isLoading:false
   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getProductDetail(slug){
        this.isLoading=true
        try {
            const response = await axios.get(`${BASE_URL}products/${slug}/productdetail`)
            this.product = response.data.data
            this.isLoading=false
        } catch (error) {
            console.log(error)
            this.isLoading=false
        }
    },

  },
})