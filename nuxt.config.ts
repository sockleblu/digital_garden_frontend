// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    routeRules: {
        '/**': {
            cors: true
        }
    },
    build: {
        transpile: [
            'tslib'
        ],
    },
    runtimeConfig: {

    },
    modules: [
        '@nuxtjs/apollo',
        '@nuxt/content',
        //'@nuxt/types',
        '@pinia/nuxt',
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: process.env.NODE_ENV == 'production' ? 'https://kylekennedy.dev:1337/graphql' : 'https://localhost:1337/graphql',
                defaultOptions: {
                    //prefetch: false,
                    query: {
                        fetchPolicy: 'no-cache',
                      },
                }
            },
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
