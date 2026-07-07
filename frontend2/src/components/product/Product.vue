<template>
  <div class="d-flex">
    <Sidebar />

    <div class="container-fluid p-4">
      <Spinner :isLoading="productDetailStore.isLoading" />

      <div
        v-if="!productDetailStore.isLoading && productDetailStore.product"
        class="row"
      >
        <!-- Sol: Ürün Resmi -->
        <div class="col-md-5 mb-4">
          <div class="card border-0 shadow-sm p-2">
            <img
              :src="`${IMG_URL}` + productDetailStore.product?.thumbnail"
              class="img-fluid rounded"
              alt="Ürün Resmi"
            />
          </div>
        </div>

        <!-- Sağ: Ürün Bilgileri -->
        <div class="col-md-7 ps-md-5">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <h2 class="fw-bold">{{ productDetailStore.product?.name }}</h2>
            <span class="badge bg-light text-dark border"
              >#{{ productDetailStore.product?.id }}</span
            >
          </div>

          <h3 class="text-primary fw-bold mb-4">
            $ {{ productDetailStore.product?.price }}
          </h3>

          <p class="text-muted mb-4">
            {{
              productDetailStore.product?.desc ||
              "Bu ürün için açıklama girilmemiş."
            }}
          </p>

          <hr />

          <!-- Renk Seçimi -->
          <div class="mb-4">
            <h6 class="fw-bold">Renk:</h6>
            <div class="d-flex gap-2">
              <div
                v-for="color in productDetailStore.product?.colors"
                :key="color.id"
                @click="setChoosenColor(color)"
                class="color-picker"
                :class="{ active: data.choosenColor?.id === color.id }"
                :style="{ backgroundColor: color.name }"
              ></div>
            </div>
          </div>

          <!-- Beden Seçimi -->
          <div class="mb-4">
            <h6 class="fw-bold">Beden:</h6>
            <div class="d-flex gap-2">
              <span
                v-for="size in productDetailStore.product?.sizes"
                :key="size.id"
                @click="setChoosenSize(size)"
                class="size-badge"
                :class="{ active: data.choosenSize?.id === size.id }"
              >
                {{ size.name }}
              </span>
            </div>
          </div>

          <!-- Miktar ve Sepet -->
          <div class="d-flex align-items-center gap-3">
            <input
              type="number"
              v-model="data.qty"
              class="form-control w-25"
              min="1"
              :max="productDetailStore.product?.qty"
            />
            <button
              :disabled="!data.choosenColor || !data.choosenSize"
              class="btn btn-success px-4"
              @click="
                cartStore.addItemCart({
                  ref: makeUniqueId(10),
                  product_id: productDetailStore.product?.id,
                  name: productDetailStore.product?.name,
                  slug: productDetailStore.product?.slug,
                  qty: data.qty,
                  color: data.choosenColor?.name,
                  size: data.choosenSize?.name,
                  maxQty: productDetailStore.product?.qty,
                  image: productDetailStore.product?.thumbnail,
                  copuon_id: null,
                })
              "
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../layouts/Sidebar.vue";
import Spinner from "../layouts/Spinner.vue";
import { onMounted, reactive } from "vue";
import { useProductDetailStore } from "@/stores/useProductDetailStore.js";
import { useRoute } from "vue-router";
import { IMG_URL, makeUniqueId } from "../helpers/config.js";
import { useCartStore } from "@/stores/useCartStore.js";

const productDetailStore = useProductDetailStore();
const route = useRoute();
const cartStore = useCartStore();

const data = reactive({
  choosenColor: null,
  choosenSize: null,
  qty: 1,
});

const setChoosenColor = (color) => (data.choosenColor = color);
const setChoosenSize = (size) => (data.choosenSize = size);

onMounted(() => productDetailStore.getProductDetail(route.params.slug));
</script>

<style scoped>
.color-picker {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.2s;
}

.color-picker.active {
  border-color: #333;
  transform: scale(1.1);
}

.size-badge {
  padding: 8px 16px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.size-badge.active {
  background-color: #198754;
  color: white;
  border-color: #198754;
}

.img-fluid {
  max-height: 400px;
  object-fit: contain;
}
</style>