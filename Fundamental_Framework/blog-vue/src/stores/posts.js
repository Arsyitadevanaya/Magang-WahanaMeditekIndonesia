import { defineStore } from "pinia";
import axios from "axios";

export const usePostsStore = defineStore('posts-store', {
    state: () => ({
        posts: [],
        loading: false,
        errMsg: ''
    }),

    actions: {
        async fetchData() {
            this.loading = true;
            try {
                const response = await axios.get('https://669ed60a9a1bda368007b249.mockapi.io/api/blog/posts');
                this.posts = response.data;
                this.errMsg = '';
            } catch (error) {
                this.errMsg = 'There was an error!';
                console.error('There was an error!', error);
            } finally {
                this.loading = false;
            }
        },
        async getPostById(id) {
            try {
                const response = await axios.get(`https://669ed60a9a1bda368007b249.mockapi.io/api/blog/posts/${id}`);
                this.posts = response.data;
                this.errMsg = '';
                console.log(this.posts);
                return response.data; 
            } catch (error) {
                this.errMsg = 'There was an error!';
                console.error('There was an error!', error);
            }
        },
        async addPost(newPost) {
            try {
                const response = await axios.post('https://669ed60a9a1bda368007b249.mockapi.io/api/blog/posts', newPost);
                this.posts.push(response.data);
                this.errMsg = '';
            } catch (error) {
                this.errMsg = 'There was an error adding the post!';
                console.error('There was an error adding the post!', error);
            }
        },
        async deletePost(id) {
            try {
                await axios.delete(`https://669ed60a9a1bda368007b249.mockapi.io/api/blog/posts/${id}`);
                this.posts = this.posts.filter(post => post.id !== id);
                this.errMsg = '';
            } catch (error) {
                this.errMsg = 'There was an error deleting the post!';
                console.error('There was an error deleting the post!', error);
            }
        },
        async editPost(id, updatedPost) {
            try {
                const response = await axios.put(`https://669ed60a9a1bda368007b249.mockapi.io/api/blog/posts/${id}`, updatedPost);
                const index = this.posts.findIndex(post => post.id === id);
                if (index !== -1) {
                    this.posts[index] = response.data;
                }
                this.errMsg = '';
            } catch (error) {
                this.errMsg = 'There was an error updating the post!';
                console.error('There was an error updating the post!', error);
            }
        }
    }
});
