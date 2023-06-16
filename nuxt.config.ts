export default defineNuxtConfig({
    ssr: true,

    srcDir: "src/",

    devServer: {
        host: process.env.HOST || "127.0.0.1",
        port: Number(process.env.PORT) || 3000,
    },

    vite: {
        server: {
            proxy: {
                "/api": {
                    target: process.env.BACKEND_SERVER_ORIGIN || "http://127.0.0.1:8080",
                    changeOrigin: true,
                },
                "/static": {
                    target: process.env.STATIC_SERVER_ORIGIN || "http://127.0.0.1:8080",
                    changeOrigin: true,
                },
            },
        },
    },

    typescript: {
        strict: true,
        typeCheck: true,
    },

    css: ["@/assets/scss/style.scss"],

    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],

    app: {
        pageTransition: { name: "page", mode: "out-in" },
        layoutTransition: { name: "layout", mode: "out-in" },
    },

    tailwindcss: {
        configPath: "../tailwind.config.js",
    },

    vueuse: {
        ssrHandlers: true,
    },
});
