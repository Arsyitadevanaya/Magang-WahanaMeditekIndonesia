<script setup>
const props = defineProps({
    date: {
        type: String,
        required: true,
    }
});


</script>
<template>
    <div class="flex justify-between bg-blue-500 px-4 py-2">
        <p class="text-white text-sm">Written on {{ props.date }}</p>
        <div class="flex gap-2">
            <div class="flex w-7 h-7 bg-white rounded-full justify-around items-center">
                <button class="fa-solid fa-pen-to-square text-blue-600" @click="$emit('update-post')"></button>
            </div>
            <div class="flex w-7 h-7 bg-white rounded-full justify-around items-center">
                <button @click="$emit('remove-post')" class="fa-solid fa-trash text-red-500"></button>
            </div>
        </div>
    </div>
</template>