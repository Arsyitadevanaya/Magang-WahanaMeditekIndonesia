<script setup>
import { onMounted, computed } from 'vue';
import CardPost from '@/components/Card/CardPost.vue';
import { usePostsStore } from '@/stores/posts';
import { useRouter } from 'vue-router';

const router = useRouter();
const postStore = usePostsStore();

// Ambil data saat komponen dimuat
onMounted(() => {
  postStore.fetchData();
});

// Komputasikan data dari store
const posts = computed(() => postStore.posts);
const loading = computed(() => postStore.loading);
const errMsg = computed(() => postStore.errMsg);

// Delete post function
const deletePost = async (id) => {
  if (confirm('Are you sure you want to delete this post?')) {
    try {
      await postStore.deletePost(id);
    } catch (error) {
      alert('Failed to delete the post. Please try again.');
    }
  }
};

// Edit post function
const editPost = (id) => {
  router.push({ name: 'create-post', params: { id } });
};
</script>

<template>
  <div class="lg:mx-24">
    <div v-if="loading" class="flex justify-center items-center mt-7">
    <p>Loading...</p>
  </div>
  <div v-if="errMsg" class="flex justify-center items-center mt-7">
    <p class="text-red-500">{{ errMsg }}</p>
  </div>
  <div v-if="!loading && !errMsg" class="grid md:grid-cols-2 gap-5 mt-7 mb-7">
    <div v-for="post in posts" :key="post.id" class="flex justify-center">
      <CardPost :post="post" @delete-post="deletePost" @edit-post="editPost" />
    </div>
  </div>
  </div>
</template>

<style scoped>
/* Tambahkan CSS sesuai dengan kebutuhan desain */
</style>
