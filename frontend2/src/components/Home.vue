<template>
  <div class="d-flex">
    <Spinner :isLoading="productsStore.isLoading" />
    <Sidebar />
    <ProductList />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Sidebar from "./layouts/Sidebar.vue";
import Spinner from "./layouts/Spinner.vue";
import ProductList from "./product/ProductList.vue";
import { useProductsStore } from "@/stores/useProductsStore.js";

const productsStore = useProductsStore();

onMounted(() => productsStore.getAllProducts());
</script>

<style scoped>
</style>