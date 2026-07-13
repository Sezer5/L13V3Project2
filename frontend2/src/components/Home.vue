<template>
  <div class="mt-3 d-flex justify-content-between">
    <Sidebar />
    <ProductList />
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/useProductStore.js";
import Sidebar from "./layout/Sidebar.vue";
import ProductList from "./product/ProductList.vue";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.getAllProducts();
});
</script>

<style scoped>
</style>