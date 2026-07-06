<template>
  <div class="d-flex">
    <Spinner :isLoading="productDetailStore.isLoading" />
    <Sidebar />
    <div class="container p-5">
      <div class="row">
        <!-- Product Images -->
        <div class="col-md-6 mb-4">
          <div class="card">
            <img
              :src="`${IMAGE_URL}` + productDetailStore.product?.thumbnail"
              class="card-img-top"
              alt="Product Image"
            />
            <div class="card-body">
              <div class="row g-2">
                <div class="col-3">
                  <img
                    src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    class="img-thumbnail"
                    alt="Thumbnail 1"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    class="img-thumbnail"
                    alt="Thumbnail 2"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://images.unsplash.com/photo-1451859757691-f318d641ab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    class="img-thumbnail"
                    alt="Thumbnail 3"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://images.unsplash.com/photo-1490915785914-0af2806c22b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    class="img-thumbnail"
                    alt="Thumbnail 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="col-md-6">
          <h1 class="h2 mb-3">{{ productDetailStore.product?.name }}</h1>
          <div class="mb-3">
            <span class="h4 me-2"
              >${{ productDetailStore.product?.price }}</span
            >
          </div>

          <div class="mb-3">
            <div class="d-flex align-items-center">
              <div class="text-warning me-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <span class="text-muted">(128 reviews)</span>
            </div>
          </div>

          <p
            class="mb-4"
            v-dompurify-html="productDetailStore.product?.desc"
          ></p>

          <!-- Color Selection -->
          <div class="mb-4 d-flex justify-content-start">
            <div class="border p-3">
              <h6 class="mb-2">Color</h6>
              <div class="btn-group" role="group">
                <div
                  v-for="color in productDetailStore.product?.colors"
                  :key="color.id"
                  :style="{
                    backgroundColor: color.name,
                    width: '20px',
                    height: '20px',
                    margin: '0px 10px',
                    borderRadius: '10px',
                  }"
                  :class="`${
                    data.chosenColor?.id === color.id
                      ? 'border shadow rounded'
                      : ''
                  }`"
                  @click="setChoosenColor(color)"
                ></div>
              </div>
            </div>
            <div class="border p-3">
              <h6 class="mb-2">Sizes</h6>
              <div class="btn-group" role="group">
                <span
                  v-for="size in productDetailStore.product?.sizes"
                  :key="size.id"
                  :class="`${
                    data.chosenSize?.id === size.id
                      ? 'badge bg-success mx-1 shadow'
                      : 'badge bg-secondary mx-1 shadow'
                  }`"
                  @click="setChoosenSize(size)"
                  >{{ size.name }}</span
                >
              </div>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-4">
            <div class="d-flex align-items-center">
              <label class="me-2">Quantity:</label>
              <input
                type="number"
                class="form-control w-auto"
                value="1"
                :min="1"
                :max="productDetailStore.product?.qty"
                v-model="data.qty"
              />
            </div>
          </div>

          <!-- Actions -->
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              type="button"
              :disabled="!data.chosenColor || !data.chosenSize"
            >
              Add to Cart
            </button>
            <button class="btn btn-outline-secondary" type="button">
              <i class="far fa-heart me-2"></i>Add to Wishlist
            </button>
          </div>

          <!-- Additional Info -->
          <div class="mt-4">
            <div class="d-flex align-items-center mb-2">
              <i class="fas fa-truck text-primary me-2"></i>
              <span>Free shipping on orders over $50</span>
            </div>
            <div class="d-flex align-items-center mb-2">
              <i class="fas fa-undo text-primary me-2"></i>
              <span>30-day return policy</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-shield-alt text-primary me-2"></i>
              <span>2-year warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import Sidebar from "../layouts/Sidebar.vue";
import Spinner from "../layouts/Spinner.vue";
import { useProductsStore } from "@/stores/useProductsStore.js";
import { useRoute } from "vue-router";
import { useProductDetailsStore } from "@/stores/useProductDetailStore.js";
import { IMAGE_URL } from "@/helpers/config.js";

const productsStore = useProductsStore();
const productDetailStore = useProductDetailsStore();
const route = useRoute();

const data = reactive({
  chosenColor: null,
  chosenSize: null,
  qty: 1,
});

onMounted(() => {
  productsStore.getAllProducts();
  productDetailStore.getProductsWithTerm(route.params.slug);
});

// set chosen color by user

const setChoosenColor = (color) => {
  data.chosenColor = color;
};

const setChoosenSize = (size) => {
  data.chosenSize = size;
};
</script>

<style scoped>
</style>