<template>
    <div class="bg-white d-flex flex-column flex-shrink-0 p-3 border vh-100 " style="width: 280px;">
        <span class="fs-4 text-center">Search</span>
        <hr>
        <div class="d-flex mb-3">
            <input type="text" class="form-control" placeholder="Search Product" v-model="data.term"><button 
  class="btn btn-sm btn-dark" 
  :disabled="data.term === ''"
  @click="filterByTerm()"
>
  <i class="bi bi-search"></i>
</button>
        </div>
        <hr>
        <span class="fs-4 text-center">Colors</span>
        <hr>
        <div class="d-flex justify-content-around mb-3">
            <div v-for="color in productStore.colors" :key="color.id"
                :style="{ backgroundColor: color.name, width: '30px', height: '30px', display: 'inline-block', borderRadius: '30px' }" @click="productStore.fetchProductsByColor(color.slug)">
            </div>
        </div>
        <hr>
        <span class="fs-4 text-center">Sizes</span>
        <hr>
        <div class="d-flex justify-content-around">
            <span v-for="size in productStore.sizes" :key="size.id" class="bg-secondary p-2 badge" @click="productStore.fetchProductsBySize(size.slug)">{{ size.name
                }}</span>
        </div>




        <!-- <div class="dropdown"> <a href="#"
                class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32"
                    height="32" class="rounded-circle me-2"> <strong>mdo</strong> </a>
            <ul class="dropdown-menu text-small shadow">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div> -->
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/useProductStore';
import { reactive } from 'vue';

const productStore = useProductStore()

const data = reactive({
    term:''
})

const filterByTerm = () =>{
    productStore.fetchProductsByTerm(data.term);
}

</script>

<style scoped></style>