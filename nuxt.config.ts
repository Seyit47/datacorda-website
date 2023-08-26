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
                    target: process.env.BACKEND_SERVER_ORIGIN || "http://localhost:3009",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
    },

    typescript: {
        shim: false,
    },

    runtimeConfig: {
        public: {
            DASHBOARD_URL: process.env.DASHBOARD_URL,
            BACKEND_URL: process.env.BACKEND_URL,
        },
    },

    css: ["@/assets/scss/style.scss"],

    modules: [
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        "@nuxt/image",
        "nuxt-icon",
        "@nuxtjs/device",
    ],

    image: {
        dir: "assets/img",
    },

    device: {
        refreshOnResize: true,
    },

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

    build: {
        transpile: ["vue-toastification"],
    },
});
