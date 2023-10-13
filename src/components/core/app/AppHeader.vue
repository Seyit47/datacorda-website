<script lang="ts" setup>
import PhoneMenu from "./AppHeader/PhoneMenu.vue";

const props = defineProps({
    isHomePage: {
        type: Boolean,
        default: false,
    },
});

const { isHomePage } = toRefs(props);
const bgColor = ref(false);
const menuShown = ref(false);

function bgColorTrigger() {
    if (window.scrollY > 10) {
        bgColor.value = true;
        return;
    }
    bgColor.value = false;
}

onMounted(() => {
    if (!isHomePage.value) {
        return;
    }
    window.addEventListener("scroll", bgColorTrigger);

    onBeforeUnmount(() => {
        window.removeEventListener("scroll", bgColorTrigger);
    });
});
</script>

<template>
    <header
        class="top-0 z-[9999] w-full transition-colors duration-150"
        :class="{
            'fixed bg-transparent': isHomePage && !bgColor && !menuShown,
            'fixed bg-cl-main':
                (isHomePage && menuShown && bgColor) || (isHomePage && menuShown && !bgColor),
            'fixed bg-cl-main shadow-md': !menuShown && bgColor,
            'sticky bg-cl-main shadow-md': !isHomePage,
        }"
    >
        <div class="md--2:px-12 px-5 py-4">
            <div class="w-full h-12.5 flex items-center">
                <div class="md--2:w-39 w-28.5">
                    <NuxtLink
                        :to="{
                            name: 'index',
                        }"
                    >
                        <div class="relative pt-[17.75%]">
                            <img
                                src="@/assets/img/datacorda-logo.png"
                                alt="Datacorda logo"
                                class="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                    </NuxtLink>
                </div>
                <nav class="hidden md--2:flex items-center gap-x-10 pl-36 mx-auto">
                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#home',
                        }"
                        title="Home"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Home
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#solutions',
                        }"
                        title="Solutions"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Solutions
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'product',
                        }"
                        title="Product"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Product
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'pricing',
                        }"
                        title="Pricing"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Pricing
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#contact',
                        }"
                        title="Contact"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Contact
                    </NuxtLink>
                </nav>

                <PhoneMenu :shown="menuShown" class="md--2:hidden" @hide="menuShown = false">
                    <div
                        class="flex flex-col py-10 px-6 gap-y-5 border-t border-white bg-cl-main shadow-c-header max-h-[80vh] overflow-y-scroll"
                    >
                        <NuxtLink
                            :to="{
                                name: 'index',
                                hash: '#home',
                            }"
                            title="Home"
                            class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                        >
                            Home
                        </NuxtLink>

                        <NuxtLink
                            :to="{
                                name: 'index',
                                hash: '#solutions',
                            }"
                            title="Solutions"
                            class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                        >
                            Solutions
                        </NuxtLink>

                        <NuxtLink
                            :to="{
                                name: 'product',
                            }"
                            title="Product"
                            class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                        >
                            Product
                        </NuxtLink>

                        <NuxtLink
                            :to="{
                                name: 'pricing',
                            }"
                            title="Pricing"
                            class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                        >
                            Pricing
                        </NuxtLink>

                        <NuxtLink
                            :to="{
                                name: 'index',
                                hash: '#contact',
                            }"
                            title="Contact"
                            class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                        >
                            Contact
                        </NuxtLink>
                        <div class="flex flex-col gap-y-5">
                            <div class="w-full">
                                <NuxtLink
                                    :to="`${$config.public.DASHBOARD_URL}/login`"
                                    :external="true"
                                    class="flex items-center justify-center w-full h-full py-2.5 hover:text-white/70 text-white font-semibold transition-colors duration-150"
                                >
                                    Login
                                </NuxtLink>
                            </div>

                            <div class="w-full">
                                <NuxtLink
                                    :to="`${$config.public.DASHBOARD_URL}/signup`"

                                    class="flex items-center justify-center w-full h-full py-2.5 border-2 hover:border-white border-transparent text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                                >
                                    Sign up
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </PhoneMenu>

                <div class="md--2:hidden ml-auto">
                    <button class="w-8.75 flex flex-col gap-y-2" @click="menuShown = !menuShown">
                        <span
                            class="w-full h-0.5 bg-white transition"
                            :class="{
                                'rotate-45 translate-y-2.5': menuShown,
                            }"
                        ></span>
                        <span
                            class="w-full h-0.5 bg-white transition"
                            :class="{
                                'opacity-0': menuShown,
                            }"
                        ></span>
                        <span
                            class="w-full h-0.5 bg-white transition"
                            :class="{
                                '-rotate-45 -translate-y-2.5': menuShown,
                            }"
                        ></span>
                    </button>
                </div>

                <div class="hidden md--2:flex items-center">
                    <div class="w-36">
                        <NuxtLink
                            :to="`${$config.public.DASHBOARD_URL}/login`"
                            :external="true"
                            class="flex items-center justify-center w-full h-full py-2.5 hover:text-white/70 text-white font-semibold transition-colors duration-150"
                        >
                            Login
                        </NuxtLink>
                    </div>

                    <div class="w-36">
                        <NuxtLink
                            :to="`${$config.public.DASHBOARD_URL}/signup`"
                            class="flex items-center justify-center w-full h-full py-2.5 border-2 hover:border-white border-transparent text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                        >
                            Sign up
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

