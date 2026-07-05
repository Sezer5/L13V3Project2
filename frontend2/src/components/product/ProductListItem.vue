<template>
  <div class="d-flex">
    <Sidebar />
    
    <!-- Ana İçerik Alanı -->
    <main class="p-4 w-100 bg-light">
      
      <!-- Veri Yüklenirken Loading Göstergesi -->
      <div v-if="productStoreDetail.isLoading" class="text-center mt-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p>Ürün detayları yükleniyor...</p>
      </div>

      <!-- Veri Geldiğinde Gösterilecek Kart -->
      <div v-else-if="productStoreDetail.product" class="container bg-white p-4 shadow-sm rounded-3">
        <div class="row">
          <!-- Sol: Görsel Alanı -->
          <div class="col-md-6">
            <img 
              :src="`${IMG_URL}` + productStoreDetail.product.thumbnail" 
              class="img-fluid rounded-3 w-100" 
              alt="Ürün Görseli"
            >
          </div>

          <!-- Sağ: Ürün Bilgileri -->
          <div class="col-md-6">
            <h2 class="fw-bold mb-3">{{ productStoreDetail.product.name }}</h2>
            <h4 class="text-success mb-3">${{ productStoreDetail.product.price }}</h4>
            
            <p class="text-muted mb-4">{{ productStoreDetail.product.desc }}</p>

            <!-- Renk ve Beden Seçenekleri (API verinize göre) -->
            <div class="mb-4">
                <p class="fw-bold">Color:</p>
                <div class="d-flex gap-2">
                    <span v-for="color in productStoreDetail.product.colors" :key="color.id" 
                          class="badge border text-dark p-2">{{ color.name }}</span>
                </div>
            </div>

            <!-- Stok Bilgisi ve Sepete Ekle -->
            <div class="d-flex align-items-center gap-3 mt-4">
              <span class="text-secondary">Stok: {{ productStoreDetail.product.qty }}</span>
              <button class="btn btn-primary px-5 py-2">Sepete Ekle</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Veri Yoksa -->
      <div v-else class="text-center mt-5">
        <h3>Ürün bulunamadı.</h3>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/useProductStore.js';
import { useProductDetailStore } from '@/stores/useProductDetailstore.js';
import Sidebar from '../layouts/Sidebar.vue';
import { IMG_URL } from '../helpers/config'; // Config yolunuzu kontrol edin

const productStore = useProductStore();
const productStoreDetail = useProductDetailStore();
const route = useRoute();

const data = reactive({
    term: route.params.slug
});

onMounted(() => {
    productStoreDetail.fetchProductsByTerm(data.term);
    productStore.fetchAllProducts();
});
</script>

<style scoped>
/* Kartın sayfada güzel durması için */
.container {
    max-width: 900px;
}
img {
    object-fit: cover;
    max-height: 400px;
}
</style>