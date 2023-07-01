<script lang="ts" setup>
import { ArrowUpIcon } from "@heroicons/vue/24/outline";
import AppHeader from "@/components/core/app/AppHeader.vue";
import AppFooter from "@/components/core/app/AppFooter.vue";
import { scrollTo } from "@/utils";

const shownToTop = ref(false);
const scrollPercent = ref(0);

onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
    scrollPercent.value =
        (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight);
    shownToTop.value = window.scrollY > window.innerHeight;
}

function scrollToTop() {
    scrollTo();
}
</script>

<template>
    <div class="relative min-h-screen w-full">
        <AppHeader class="sticky top-0 bg-cl-main z-[9999] shadow-md" />
        <main class="w-full bg-gradient-to-b from-white to-cl-main/10">
            <slot />
        </main>
        <div
            :class="{
                'opacity-0 invisible': !shownToTop,
            }"
            class="fixed bottom-[1%] right-[2%] z-[9999] ml-auto py-5 opacity-100 transition-opacity duration-150"
        >
            <div
                class="grid rounded-full p-1"
                style="
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
                        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                "
                :style="`background: conic-gradient( rgb(25, 194, 98) ${scrollPercent}%, rgb(255, 255, 255) ${scrollPercent}% )`"
            >
                <button
                    class="p-3.75 rounded-full z-1 bg-cl-text hover:bg-cl-text-hover group transition-colors duration-150"
                    @click="scrollToTop"
                >
                    <ArrowUpIcon class="w-5 text-white font-bold" />
                </button>
            </div>
        </div>
        <AppFooter />
    </div>
</template>
