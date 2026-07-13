<template>
  <div class="w-100 d-flex flex-wrap justify-content-between p-1">
    <ProductListItem
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/useProductStore.js";
import { onMounted } from "vue";
import ProductListItem from "./ProductListItem.vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.getAllProducts();
});
</script>

<style scoped>
</style>