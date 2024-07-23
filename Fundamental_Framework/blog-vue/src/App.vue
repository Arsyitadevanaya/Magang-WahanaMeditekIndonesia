<template setup>
  <div class="max-w-screen-xl " >
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script setup>
import Navbar from './components/Navbar/Navbar.vue'
</script>