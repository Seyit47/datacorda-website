<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import PlanItem from "@/components/pages/pricing/PlanItem.vue";

const planList = ref([
    {
        title: "Beginner",
        feature: ["", "Feature", "Feature"],
        price: "590",
        action: "Get Started",
    },
    {
        title: "Intermediate",
        feature: [
            "",
            "Here will be the text about features",
            "Here will be the text about features",
        ],
        price: "790",
        action: "Get Started",
    },
    {
        title: "Advanced",
        feature: [
            "",
            "Here will be the text about features",
            "Here will be the text about features",
        ],
        price: "1190",
        action: "Get Started",
    },
    {
        title: "Custom Plan",
        feature: [
            "2+ games",
            "Here will be the text about features",
            "Here will be the text about features",
        ],
        price: "",
        action: "Contact Us",
    },
]);
</script>

<template>
    <div class="relative overflow-hidden w-full">
        <section id="pricing">
            <article class="relative w-full min-h-screen">
                <div class="relative w-full h-full">
                    <div class="absolute top-0 left-0 w-full h-full">
                        <svg viewBox="0 0 1920 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="1229" cy="129.5" rx="1377" ry="610.5" fill="#44376A" />
                        </svg>
                    </div>
                </div>
                <BaseMaxContent class="relative px-6 py-16.5">
                    <div class="flex flex-col items-center justify-center gap-y-25">
                        <div class="w-[45%] pt-25">
                            <h2
                                class="text-[2.5rem] text-center leading-[1.6] font-semibold text-white"
                            >
                                Flexible Plans and Pricing for all kinds of game developers and
                                studios
                            </h2>
                        </div>

                        <div class="grid grid-cols-4 gap-x-3.5 w-full">
                            <div v-for="(item, index) in planList" :key="index" class="h-full">
                                <PlanItem
                                    :title="item.title"
                                    :price="item.price"
                                    :feature="item.feature"
                                    :action="item.action"
                                />
                            </div>
                        </div>
                    </div>
                </BaseMaxContent>
            </article>
        </section>
    </div>
</template>
