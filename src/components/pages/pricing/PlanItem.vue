<script lang="ts" setup>
import IconCheck from "@/components/icons/IconCheck.vue";

defineProps({
    title: {
        type: String,
        default: "",
    },
    price: {
        type: String,
        default: "",
    },
    feature: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    action: {
        type: String,
        default: "Get Started",
    },
});
</script>

<template>
    <div
        class="flex flex-col items-center gap-y-10 px-10 py-8 h-full rounded-xl shadow-lg bg-white"
    >
        <div class="flex flex-col items-center gap-y-5 w-full">
            <h4 class="text-[1.4rem] leading-none font-semibold text-cl-main">{{ title }}</h4>
            <div class="flex justify-center items-center w-full pb-2.5 border-b-2 border-cl-main">
                <span v-if="price" class="font-medium">
                    $
                    <span class="text-[3rem] leading-none font-bold">{{ price }}</span
                    >/mo
                </span>
                <span v-else class="h-12"> </span>
            </div>
        </div>
        <div class="flex flex-col w-full gap-y-5">
            <div v-for="(item, index) in feature" :key="index" class="flex items-start gap-x-2.5">
                <div class="w-4.25">
                    <IconCheck />
                </div>
                <div class="w-[80%]">
                    <p class="text-cl-main leading-[1.2] text-size_15/16 font-semibold">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>
        <div class="w-46 mt-auto">
            <button
                class="flex items-center justify-center w-full h-full py-2.5 border-2 border-cl-main text-white hover:text-cl-main bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
            >
                {{ action }}
            </button>
        </div>
    </div>
</template>
