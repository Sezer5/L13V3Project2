import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();
export const useCartStore = defineStore('cart', {
  state: () => ({ 
    cartItems:[],

   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    addToCart(item){
        let index = this.cartItems.findIndex(product=> product.product_id === item.product_id && product.color === item.color && product.size === item.size)

        // if the product exist

        if(index!==-1){
            toast.info("Product already in your cart!", {
                timeout: 2000
            });
        }else{
            this.cartItems.push(item)
            toast.info("Product added in your cart!", {
                timeout: 2000
            });
        }
    },
    incrementQty(item){
        let index = this.cartItems.findIndex(product=> product.product_id === item.product_id && product.color === item.color && product.size === item.size)

        // if the product exist

        if(index!==-1){
            if(this.cartItems[index].qty === item.maxQty){
                    toast.info("You can not order maximum quantity of product!", {
                    timeout: 2000
                });
            }
        }else{
            this.cartItems.push(item)
            toast.info("Product added in your cart!", {
                timeout: 2000
            });
        }
    }
  },
})