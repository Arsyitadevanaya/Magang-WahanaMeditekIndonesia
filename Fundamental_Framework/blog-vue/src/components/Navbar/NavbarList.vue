<template>
    <ul class="flex gap-7 text-white font-medium">
        <li v-for="(item, index) in navItems" :key="index">
            <router-link :to='item.route'  class=" text-white" aria-current="page">{{ item.text }}</router-link>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';

const navItems = ref([
    { text: 'Home', route: '/' },
    { text: 'Create Post', route: '/create-post' }
]);
</script>
