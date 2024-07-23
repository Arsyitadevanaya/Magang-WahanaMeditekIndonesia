<script setup>
import { reactive, computed, onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts';
import { useRoute, useRouter } from 'vue-router';

const postStore = usePostsStore();
const route = useRoute();
const router = useRouter();

const id = route.params.id;

const post = reactive({
    title: '',
    description: '',
    isEditMode: !!id
});

const isFormInvalid = computed(() => {
    return post.title === '' || post.description === '';
});


const submit = () => {
    if (!isFormInvalid.value) {
        if (post.isEditMode) {
            // Update existing post
            postStore.editPost(id, {
                title: post.title,
                description: post.description,
                updatedAt: new Date().toISOString()
            });
        } else {
            // Add new post
            postStore.addPost({
                title: post.title,
                description: post.description,
                createdAt: new Date().toISOString()
            });
        }
        // Reset form
        post.title = '';
        post.description = '';
        // Redirect to home page
        router.push({ name: 'home' });
    }
};

onMounted(async () => {
    if (post.isEditMode) {
        try {
            const existingPost = await postStore.getPostById(id);
            if (existingPost) {
                post.title = existingPost.title;
                post.description = existingPost.description;
            }
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    }
});
</script>

<template>
    <div class="flex justify-center items-center mt-7">
        <div class="bg-white border rounded-lg shadow-md max-w-md w-full p-5">
            <div class="font-bold mb-5">
                {{ post.isEditMode ? 'Edit' : 'Create' }} a Post
            </div>
            <form @submit.prevent="submit">
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Title</label>
                    <input type="text" v-model="post.title" id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />

                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Body</label>
                    <textarea rows="4" v-model="post.description"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Body of the post..." required></textarea>
                </div>
                <button type="submit"
                    class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                    :disabled="isFormInvalid">{{ post.isEditMode ? 'Update' : 'Add' }}</button>
            </form>
        </div>
    </div>
</template>
