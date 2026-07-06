<template>
  <div class="d-flex flex-wrap">
    <ProductListItem
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "@/stores/useProductsStore.js";
import ProductListItem from "./ProductListItem.vue";

const productsStore = useProductsStore();

onMounted(() => productsStore.getAllProducts());
</script>

<style scoped>
</style>