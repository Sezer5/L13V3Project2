<template>
  <div class="mt-3 d-flex justify-content-between">
    <Sidebar />
    <div class="container py-5">
      <div class="row">
        <!-- Product Images -->
        <div class="col-md-6 mb-4">
          <div class="card">
            <img
              :src="`${BASE_URL}/` + productDetailStore.product?.thumbnail"
              class="card-img-top"
              alt="Product Image"
            />
            <div class="card-body">
              <div class="row g-2">
                <div class="col-3">
                  <img
                    :src="
                      `${BASE_URL}/` + productDetailStore.product?.thumbnail
                    "
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
            <span class="text-muted text-decoration-line-through"
              >${{ productDetailStore.product?.price * 1.2 }}</span
            >
            <span class="badge bg-danger ms-2">25% OFF</span>
          </div>

          <div class="mb-3">
            <div class="d-flex align-items-center">
              <div class="text-warning me-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div>
              <span class="text-muted">(128 reviews)</span>
            </div>
          </div>

          <p class="mb-4">
            {{ productDetailStore.product?.desc }}
          </p>

          <!-- Color Selection -->
          <div class="mb-4 d-flex justify-content-between">
            <div>
              <h6 class="mb-2">Color:</h6>
              <div class="btn-group" role="group">
                <div
                  v-for="color in productDetailStore.product?.colors"
                  :key="color.id"
                  :style="{
                    backgroundColor: color.name,
                    width: '30px',
                    height: '30px',
                    margin: '0px 10px',
                  }"
                  class="color-swatch"
                  :class="{ chosenColor: data.chosenColor?.id === color.id }"
                  @click="setChosenColor(color)"
                ></div>
              </div>
            </div>
            <div>
              <h6 class="mb-2">Size:</h6>
              <div class="btn-group" role="group">
                <div
                  v-for="size in productDetailStore.product?.sizes"
                  :key="size.id"
                  class="size-option"
                  :class="{ 'active-size': data.chosenSize?.id === size.id }"
                  @click="setChosenSize(size)"
                >
                  {{ size.name }}
                </div>
              </div>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-4">
            <div class="d-flex align-items-center">
              <label class="me-2">Quantity:</label>
              <input
                type="number"
                id="stackedInput"
                class="form-control"
                value="1"
                style="width: 20%"
              />
            </div>
          </div>

          <!-- Actions -->
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              type="button"
              @click="
                cartStore.addProductToCart({
                  color: data.chosenColor,
                  size: data.chosenSize,
                })
              "
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
import { useProductStore } from "@/stores/useProductStore.js";
import Sidebar from "@/components/layout/Sidebar.vue";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useProductDetailStore } from "@/stores/useProductDetailStore";
import { BASE_URL } from "@/helpers/config";
import { useCartStore } from "@/stores/useCartStore";

const productStore = useProductStore();
const productDetailStore = useProductDetailStore();
const parameter = useRoute().params.slug;
const cartStore = useCartStore();
const data = reactive({
  chosenColor: null,
  chosenSize: null,
});

const setChosenColor = (color) => {
  data.chosenColor = color;
};

const setChosenSize = (size) => {
  data.chosenSize = size;
};

onMounted(() => {
  productStore.getAllProducts();
  productDetailStore.getProductByTerm(parameter);
});
</script>

<style scoped>
/* Renk Kutucukları */
.color-swatch {
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  display: inline-block;
}

.color-swatch:hover {
  transform: scale(1.1);
}

.color-swatch.chosenColor {
  border-color: #333; /* Seçilenin etrafında siyah çerçeve */
  box-shadow: 0 0 0 2px #fff inset; /* İç içe şık bir görünüm */
}

/* Beden Seçimi */
.size-option {
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  transition: all 0.2s ease;
  user-select: none;
}

.size-option:hover {
  background-color: #f8f9fa;
  border-color: #0d6efd;
}

.size-option.active-size {
  background-color: #0d6efd;
  color: white;
  border-color: #0d6efd;
  font-weight: bold;
}
</style>