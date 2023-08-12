<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
</script>

<template>
    <section id="home">
        <article class="relative w-full min-h-[calc(100vh-4.125rem)]">
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="w-full h-full">
                    <svg viewBox="0 0 1920 955" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse
                            cx="601.5"
                            cy="54.5"
                            rx="1428.5"
                            ry="900.5"
                            fill="url(#paint0_linear_437_162)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_437_162"
                                x1="474"
                                y1="35.0001"
                                x2="690"
                                y2="1312.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#44376A" stop-opacity="0.84" />
                                <stop offset="0.583333" stop-color="#35275E" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <BaseMaxContent class="relative py-12">
                <div class="flex justify-center items-center min-h-[80vh]">
                    <div class="w-[70%]">
                        <div class="flex flex-col gap-y-7.5">
                            <h1 class="text-[3.5rem] text-white text-center font-bold">
                                Empower Your Mobile Games with AI-based Prediction
                            </h1>

                            <div class="flex flex-col items-center gap-y-18">
                                <p
                                    class="text-[2rem] text-center leading-[1.6] font-medium text-white"
                                >
                                    Increase In-Game Metrics by Analysing and Predicting Player
                                    behaviours
                                </p>

                                <div class="flex items-center gap-x-8">
                                    <div class="w-52">
                                        <NuxtLink
                                            :to="{
                                                name: 'account-sign-up',
                                            }"
                                            class="flex items-center justify-center w-full h-full py-2.5 border-2 border-white text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                                        >
                                            Get started
                                        </NuxtLink>
                                    </div>
                                    <div class="w-52">
                                        <NuxtLink
                                            :to="{
                                                name: 'account-sign-up',
                                            }"
                                            class="flex items-center justify-center w-full h-full py-2.5 border-2 border-white text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                                        >
                                            Book Demo
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseMaxContent>
        </article>
    </section>
</template>
