<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border shadow vh-100"
    style="width: 280px"
  >
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search Product..."
            aria-label="Search Product..."
            aria-describedby="basic-addon2"
            v-model="data.term"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              :disabled="!data.term"
              @click="productsStore.getProductsWithTerm(data.term)"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </li>
      <li><hr /></li>
      <li class="text-center">
        <h3>Colors</h3>
      </li>
      <li class="nav-item d-flex justify-content-between">
        <div
          v-for="color in productsStore.colors"
          :key="color.id"
          @click="productsStore.getProductsWithColor(color.slug)"
          :style="{
            backgroundColor: color.name,
            width: '30px',
            height: '30px',
            borderRadius: '30px',
            display: 'inline-block',
          }"
        ></div>
      </li>
      <li>
        <hr />
      </li>
      <li class="text-center">
        <h3>Sizes</h3>
      </li>
      <li class="nav-item d-flex justify-content-between">
        <span
          v-for="size in productsStore.sizes"
          @click="productsStore.getProductsWithSize(size.slug)"
          :key="size.id"
          class="badge bg-secondary text-white"
          >{{ size.name }}</span
        >
      </li>
    </ul>
    <hr />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useProductsStore } from "@/stores/useProductsStore.js";

const productsStore = useProductsStore();

const data = reactive({
  term: "",
});

onMounted(() => {
  productsStore.getAllProducts();
});
</script>

<style scoped>
</style>