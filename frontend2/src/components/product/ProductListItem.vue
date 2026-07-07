<template>
  <div class="card m-2 shadow" style="width: 18rem">
    <img
      :src="`${IMG_URL}` + product.thumbnail"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <router-link :to="'/productdetail/' + product.slug"
        ><h5 class="card-title">{{ product.name }}</h5></router-link
      >
      <hr />
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <div
            v-for="color in product.colors"
            :key="color.id"
            :style="{
              backgroundColor: color.name,
              width: '10px',
              height: '10px',
              borderRadius: '10px',
              margin: '0px 3px',
            }"
          ></div>
        </div>
        <div>
          <span
            v-for="size in product.sizes"
            :key="size.id"
            class="badge bg-secondary mx-1"
            >{{ size.name }}</span
          >
        </div>
      </div>
      <p class="card-text" v-dompurify-html="product.desc.substr(0, 50)"></p>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <a href="#" class="btn btn-primary">
            <i class="bi bi-eye"></i>
          </a>
        </div>
        <div>
          <h3>${{ product.price }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IMG_URL } from "../helpers/config";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>