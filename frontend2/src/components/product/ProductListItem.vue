<template>
  <div class="card m-2" style="max-width: 320px">
    <img
      :src="`${BASE_URL}/` + product.thumbnail"
      class="card-img-top"
      alt="Product Image"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.desc.substr(0, 50) }}...<router-link>Show More</router-link>
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="h5 mb-0">${{ product.price }}</span>
        <div class="d-flex">
          <div
            v-for="color in product.colors"
            :key="color.id"
            :style="{
              backgroundColor: color.name,
              width: '10px',
              height: '10px',
              borderRadius: '10px',
              margin: '0px 1px',
            }"
          ></div>
        </div>
        <div class="d-flex">
          <span
            class="badge bg-light border text-black"
            v-for="size in product.sizes"
            :key="size.id"
            :class="{ margin: '0px 1px' }"
            >{{ size.name }}</span
          >
        </div>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between bg-light">
      <router-link
        class="btn btn-outline-primary btn-sm w-50"
        :to="`productDetail/` + product.slug"
      >
        <i class="bi bi-eye"></i>
      </router-link>
      <button class="btn btn-outline-secondary btn-sm w-50">
        <i class="bi bi-heart"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { BASE_URL } from "@/helpers/config";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>