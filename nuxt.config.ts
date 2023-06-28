export default defineNuxtConfig({
    ssr: true,

    srcDir: "src/",

    devServer: {
        host: process.env.HOST || "127.0.0.1",
        port: Number(process.env.PORT) || 3000,
    },

    typescript: {
        shim: false,
        strict: true,
        typeCheck: true,
    },

    css: ["@/assets/scss/style.scss"],

    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/image", "@nuxtjs/device"],

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
