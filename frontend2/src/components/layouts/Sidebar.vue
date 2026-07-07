<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white bg-light border"
    style="width: 280px"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Search</span>
    </a>
    <hr style="color: black; height: 4px" />
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            v-model="data.term"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="productStore.getProductByTerm(data.term)"
              :disabled="data.term === ''"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </li>
      <li class="text-black">
        <h6>Colors</h6>
        <hr />
      </li>
      <li class="nav-item d-flex justify-content-around">
        <div
          v-for="color in productStore.colors"
          :key="color.id"
          :style="{
            backgroundColor: color.name,
            width: '20px',
            height: '20px',
            borderRadius: '20px',
            cursor: 'pointer',
          }"
          @click="productStore.getProductByColor(color.slug)"
        ></div>
      </li>
      <li class="text-black mt-3">
        <h6>Sizes</h6>
        <hr />
      </li>
      <li class="nav-item d-flex justify-content-around mt-3">
        <span
          v-for="size in productStore.sizes"
          :key="size.id"
          class="badge bg-secondary"
          style="cursor: pointer"
          @click="productStore.getProductBySize(size.slug)"
          >{{ size.name }}</span
        >
      </li>
    </ul>
    <hr />
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/useProductStore";
import { onMounted, reactive } from "vue";

const productStore = useProductStore();

onMounted(() => productStore.getAllProducts());

const data = reactive({
  term: "",
});
</script>

<style scoped>
</style>