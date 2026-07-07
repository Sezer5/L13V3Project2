<template>
  <div class="p-1 d-flex flex-wrap">
    <ProductListItem
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/useProductStore.js";
import ProductListItem from "./ProductListItem.vue";

const productStore = useProductStore();
</script>

<style scoped>
</style>