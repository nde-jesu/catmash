// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    css: ['~/assets/main.css'],
    app: {
        head: {
            title: 'CatMash : Votez pour le plus beau chat'
        }
    },
    runtimeConfig: {
            mongoUrl: process.env.MONGODB_URL
    },
    nitro: {
        plugins: ['~/server/plugins/mongodb.ts']
    },
    devtools: { enabled: true },
});