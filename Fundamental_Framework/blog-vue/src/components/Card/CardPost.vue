<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import CardHeader from './CardHeader.vue';

const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
    onDeletePost: Function,
    onEditPost: Function
});

const formattedDate = computed(() => {
    const date = new Date(props.post.createdAt);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
});

const emit = defineEmits(['delete-post','edit-post'])
const removePost=(postId)=>{
    emit('delete-post', postId)
}
const updatePost=(postId)=>{
    emit('edit-post', postId)
}
</script>

<template>
        <div class="md:max-w-lg max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
            <CardHeader :date="formattedDate" @remove-post="removePost(props.post.id)" @update-post="updatePost(props.post.id)" />
            <div class="px-4 py-4">
                <h2 class="text-xl font-bold mb-2">{{ props.post.title }}</h2>
                <p class="text-gray-700">{{ props.post.description }}</p>
            </div>
        </div>
 
</template>

