<template>
  <div class="p-3">
    <div class="card" style="max-width: 300px">
      <img
        :src="`${IMAGE_URL}` + data.product.thumbnail"
        class="card-img-top"
        alt="Product Image"
      />
      <div class="card-body">
        <h5 class="card-title">{{ data.product.name }}</h5>
        <p class="card-text">{{ data.product.desc.substr(0, 30) }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0">${{ data.product.price }}</span>
          <div>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-half text-warning"></i>
            <small class="text-muted">(4.5)</small>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between bg-light">
        <router-link
          class="btn btn-primary btn-sm"
          :to="'/productdetail/' + data.product.slug"
          >Add to Cart</router-link
        >
        <button class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IMAGE_URL } from "@/helpers/config";

const data = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>