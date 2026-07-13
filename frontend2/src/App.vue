<template>
  <div class="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/layout/Navbar.vue";
</script>

<style scoped>
</style>