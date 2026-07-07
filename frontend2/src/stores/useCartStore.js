import { defineStore } from 'pinia'
import axios from 'axios'
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
    addItemCart(item) {
      let index = this.cartItems.findIndex(product => product.product_id === item.product_id &&
                                                      product.color === item.color &&
                                                      product.size === item.size
      )
      if(index !== -1){
        toast.success("Product already exist in your cart",{
            timeout:2000
        });
      }else{
        this.cartItems.push(item);
        toast.success("Item added in your cart succesfully",{
            timeout:2000
        });
      }
    },
   incrementItem(item) {
      let index = this.cartItems.findIndex(product => product.product_id === item.product_id &&
                                                      product.color === item.color &&
                                                      product.size === item.size
      )
      if(index !== -1){
        if(this.cartItems[index].qty === item.maxQty)
        toast.success("Product quantity greater than available border",{
            timeout:2000
        });
      }else{
        this.cartItems[index].qty+=1;
        toast.success("Item added in your cart succesfully",{
            timeout:2000
        });
      }
    },
    decrementItem(item) {
      let index = this.cartItems.findIndex(product => product.product_id === item.product_id &&
                                                      product.color === item.color &&
                                                      product.size === item.size
      )
      if(index !== -1){
        this.cartItems[index].qty-=1
        if(this.cartItems[index].qty===0){
            this.cartItems=this.cartItems.filter(product => product.ref !== item.ref)
        }
      }
    },
    removeItem(item) {
      let index = this.cartItems.findIndex(product => product.product_id === item.product_id &&
                                                      product.color === item.color &&
                                                      product.size === item.size
      )
      if(index !== -1){
       
            this.cartItems=this.cartItems.filter(product => product.ref !== item.ref)
        
      }
    },
    clearCart(){
        this.cartItems = [];
    }

  },
})