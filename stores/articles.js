import { defineStore } from 'pinia'

export const currentArticles = defineStore('currentArticles', {
    state: () => ({
        articles: []
    }),
    actions: {
        getAllArticles() {
            
        }
    }
})