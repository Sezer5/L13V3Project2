<template>
 <div class="p-2 w-100 bg-white border d-flex space-between flex-wrap row">
    <Product v-for="product in productStore.products.slice(0,data.itemCounter)" :key="product.id" :product="product"/>
    <div class="text-center">
      <button class="btn btn-sm btn-dark" @click="loadMoreItem()" v-if="data.itemCounter < productStore.products.length">
         <i class="bi bi-arrow-clockwise"></i> Load More
      </button>
    </div>
 </div>
</template>

<script setup>
import { useProductStore } from '@/stores/useProductStore.js';
import Product from './Product.vue';
import { reactive } from 'vue';

const productStore = useProductStore();

const data = reactive({
   itemCounter:3,
})


const loadMoreItem = () =>{
   data.itemCounter+=3
}

</script>

<style scoped>

</style>