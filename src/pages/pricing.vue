<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import PlanItem from "@/components/pages/pricing/PlanItem.vue";
import IconCheck from "@/components/icons/IconCheck.vue";

const planList = ref([
    {
        title: "Starter",
        feature: [
            "Deep Analytics with easy to understand Dashboards",
            "Team Support 2 Hours/ Week",
            "Game Event Taxonomy",
        ],
        price: "290",
        action: "Get Started",
    },
    {
        title: "Beginner",
        feature: [
            "Everything on Starter package",
            "Real-time Churn Prediction Models",
            "Player Segmentation",
            "Team Support 4 Hours/ Week",
        ],
        price: "590",
        action: "Get Started",
    },
    {
        title: "Professional",
        feature: [
            "Everything on Beginner Package",
            "Team Support 8 hours/Week",
            "New prediction model development",
        ],
        price: "1190",
        action: "Get Started",
    },
]);

definePageMeta({
    layout: "home",
});
</script>

<template>
    <div class="relative overflow-hidden w-full">
        <section id="pricing">
            <article class="relative w-full">
                <div
                    class="hidden md--2:block absolute top-0 left-0 w-full h-full bg-cl-main"
                    style="clip-path: ellipse(80% 65% at 65% 4%)"
                ></div>
                <div
                    class="md--2:hidden absolute top-0 left-0 w-full h-screen bg-cl-main"
                    style="clip-path: circle(53.5% at 60% 29%)"
                ></div>

                <BaseMaxContent class="relative px-6 py-16.5">
                    <div class="flex flex-col items-center justify-center gap-y-25">
                        <div class="md--2:w-[45%] pt-25">
                            <h2
                                class="md--2:text-[2.5rem] text-[2rem] text-center leading-[1.6] font-semibold text-white"
                            >
                                Flexible Plans and Pricing for all kinds of game developers and
                                studios
                            </h2>
                        </div>

                        <div
                            class="lg--1:max-w-[100%] max-w-[50rem] mx-auto grid lg--1:grid-cols-4 md--2:grid-cols-2 grid-cols-1 gap-y-7.5 lg--1:gap-x-3.5 gap-x-7.5 w-full"
                        >
                            <div v-for="(item, index) in planList" :key="index" class="h-full">
                                <PlanItem
                                    :title="item.title"
                                    :price="item.price"
                                    :feature="item.feature"
                                    :action="item.action"
                                />
                            </div>
                            <div
                                class="flex flex-col items-center gap-y-10 md--2:px-10 px-5 py-8 h-full rounded-xl shadow-lg bg-white"
                            >
                                <div class="flex flex-col items-center gap-y-5 w-full">
                                    <h4 class="h-6.5 leading-none font-semibold text-cl-main"></h4>
                                    <div
                                        class="flex justify-center items-center w-full pb-2.5 border-b-2 border-cl-main"
                                    >
                                        <span class="text-[2rem] text-cl-main font-medium"
                                            >Custom Plan</span
                                        >
                                    </div>
                                </div>
                                <div class="flex flex-col w-full gap-y-5">
                                    <div class="flex items-start gap-x-2.5">
                                        <div class="w-3.75 h-3.75">
                                            <IconCheck />
                                        </div>
                                        <div class="w-full -mt-0.5">
                                            <p class="text-black leading-[1.4] text-size_13/16">
                                                For more flexible plans just let us know
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-46 mt-auto">
                                    <NuxtLink
                                        :to="{
                                            name: 'index',
                                            hash: '#contact',
                                        }"
                                        class="flex items-center justify-center w-full h-full py-2.5 border-2 border-cl-main text-white hover:text-cl-main bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                                    >
                                        Contact us
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </BaseMaxContent>
            </article>
        </section>
    </div>
</template>
