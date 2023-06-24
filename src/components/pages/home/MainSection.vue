<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";

defineOptions({
    name: "MainSection",
});
</script>

<template>
    <div class="relative w-full h-full">
        <BaseMaxContent class="relative px-6">
            <section id="home" class="relative max-w-[64rem] min-h-[80vh] w-full mx-auto">
                <div class="h-full flex flex-col gap-y-2.5">
                    <h1 class="text-[4rem] font-semibold">
                        Machine learning and Analytics for your mobile game
                    </h1>
                    <div class="flex flex-col gap-y-7.5">
                        <p class="w-1/2 text-size_18/16 leading-[1.8]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                            veniam maiores debitis. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Hic, porro? Lorem ipsum dolor sit amet.
                        </p>
                        <div class="w-52">
                            <button
                                class="flex items-center justify-center w-full h-full py-4 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-white rounded-full font-bold transition-colors duration-150"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </BaseMaxContent>
    </div>
</template>

<style lang="scss" scoped>
.main-banner-left-animation {
    animation: main-banner-left 1s ease-in-out infinite alternate;
}

@keyframes main-banner-left {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(10px);
    }
}

.main-banner-right-animation {
    animation: main-banner-right 1.5s ease-in-out infinite alternate;
}

@keyframes main-banner-right {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(10px);
    }
}
</style>
