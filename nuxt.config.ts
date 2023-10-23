// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    runtimeConfig: {

    },
    modules: [
        '@nuxtjs/apollo',
        '@nuxt/content',
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://kylekennedy.dev:1337/graphql'
            }
        },
    },
    vite: {
        server: {
            hmr: {
                protocol: process.env.NODE_ENV === "production" ? "wss" : "ws",
                clientPort: process.env.NODE_ENV === "production" ? 443 : 4000,
                path: "hmr/"
            }
        }
    }
})
