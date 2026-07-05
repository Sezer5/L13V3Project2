<template>
 <div class="d-flex">
  <Sidebar />
  <div class="p-2 w-100 bg-white border d-flex space-between flex-wrap row">
    <h1>Register Page</h1>
 </div>
 </div>
</template>

<script setup>
import { useProductStore } from '@/stores/useProductStore.js';
import Sidebar from './layouts/Sidebar.vue';
import { onMounted } from 'vue';

const productStore = useProductStore();

onMounted(()=> productStore.fetchAllProducts())

</script>

<style scoped>

</style>