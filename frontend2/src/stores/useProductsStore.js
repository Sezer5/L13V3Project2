import { BASE_URL } from '@/helpers/config'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', {
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
        const response = await axios.get(`${BASE_URL}/products`)
        this.products=response.data.data
        this.colors=response.data.colors
        this.sizes=response.data.sizes
        this.isLoading=false
      } catch (error) {
        console.log(error)
        this.isLoading=false
      }
    },
    async getProductsWithColor(color){
      this.isLoading=true
      try {
        const response = await axios.get(`${BASE_URL}/products/${color}/color`)
        this.products=response.data.data
        this.colors=response.data.colors
        this.sizes=response.data.sizes
        this.isLoading=false
      } catch (error) {
        console.log(error)
        this.isLoading=false
      }
    },
    async getProductsWithSize(size){
      this.isLoading=true
      try {
        const response = await axios.get(`${BASE_URL}/products/${size}/size`)
        this.products=response.data.data
        this.colors=response.data.colors
        this.sizes=response.data.sizes
        this.isLoading=false
      } catch (error) {
        console.log(error)
        this.isLoading=false
      }
    },
    async getProductsWithTerm(term){
      this.isLoading=true
      try {
        const response = await axios.get(`${BASE_URL}/products/${term}/term`)
        this.products=response.data.data
        this.colors=response.data.colors
        this.sizes=response.data.sizes
        this.isLoading=false
      } catch (error) {
        console.log(error)
        this.isLoading=false
      }
    },
  },
})