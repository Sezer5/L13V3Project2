<template>
 <div class="d-flex">
  <Spinner :isLoading="productStore.isLoading" />
  <Sidebar />
  <ProductList />
 </div>
</template>

<script setup>
import { useProductStore } from '@/stores/useProductStore.js';
import Sidebar from './layouts/Sidebar.vue';
import ProductList from './product/ProductList.vue';
import { onMounted } from 'vue';
import Spinner from './layouts/Spinner.vue';

const productStore = useProductStore();

onMounted(()=> productStore.fetchAllProducts())

</script>

<style scoped>

</style>