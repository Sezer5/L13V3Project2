<template>
    <div class="card m-3 shadow" style="width: 18rem;">
        <img :src="`${IMG_URL}`+product.thumbnail" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.desc.substr(0,30) }}</p>
            <div class="d-flex justify-content-between align-items-center w-100 mb-3">
                <div class="fw-bold">${{ product.price }}</div>
                <div>Stok: {{ product.qty }}</div>
            </div>
            <div class="d-flex justify-content-between align-items-center w-100 mb-3">
                <a href="#" class="btn btn-primary"><i class="bi bi-cart-plus"></i> Add to Cart</a>
                <router-link :to="'/detail/' + product.slug" class="btn btn-primary"><i class="bi bi-eye"></i> Review</router-link>

            </div>
            
        </div>
    </div>
</template>

<script setup>
import { IMG_URL } from '../helpers/config';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>