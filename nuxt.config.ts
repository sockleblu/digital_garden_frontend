// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/apollo',
        '@nuxt/content'
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://localhost:1337/graphql'
            }
        },
    },
    vite: {
        server: {
            hmr: {
                protocol: "wss",
                clientPort: 443,
                path: "hmr/"
            }
        }
    }
})
