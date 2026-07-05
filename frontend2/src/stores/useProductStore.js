import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from '@/components/helpers/config';

export const useProductStore = defineStore('product', {
  state: () => ({ 
    products:[],
    colors:[],
    sizes:[],
    isLoading:false
   }),
  getters: {
    
  },
  actions: {
    async fetchAllProducts(){
        this.isLoading=true
        try {
            const response = await axios.get(`${BASE_URL}/products`)
            this.products = response.data.data
            this.colors = response.data.colors
            this.sizes = response.data.sizes
            this.isLoading=false
        } catch (error) {
            console.log(error);
            this.isLoading=false
        }
    },
    async fetchProductsByColor(color){
        this.isLoading=true
        try {
            const response = await axios.get(`${BASE_URL}/products/${color}/color`)
            this.products = response.data.data
            this.colors = response.data.colors
            this.sizes = response.data.sizes
            this.isLoading=false
        } catch (error) {
            console.log(error);
            this.isLoading=false
        }
    },
    async fetchProductsBySize(size){
        this.isLoading=true
        try {
            const response = await axios.get(`${BASE_URL}/products/${size}/size`)
            this.products = response.data.data
            this.colors = response.data.colors
            this.sizes = response.data.sizes
            this.isLoading=false
        } catch (error) {
            console.log(error);
            this.isLoading=false
        }
    },

    
  },
})