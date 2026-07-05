import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from '@/components/helpers/config';

export const useProductDetailStore = defineStore('productdetail', {
  state: () => ({ 
    product:null,
    isLoading:false
   }),
  getters: {
    
  },
  actions: {
    async fetchProductsByTerm(term){
        this.isLoading=true
        try {
            const response = await axios.get(`${BASE_URL}/products/${term}/term`)
            this.product = response.data.data[0]
            this.isLoading=false
        } catch (error) {
            console.log(error);
            this.isLoading=false
        }
    },
  },
})