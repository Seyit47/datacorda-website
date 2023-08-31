<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
</script>

<template>
    <section id="home">
        <article class="relative w-full">
            <div
                class="hidden md--2:block absolute top-0 left-0 w-full h-full bg-cl-main bg-opacity-[0.84]"
                style="clip-path: ellipse(67% 84% at 36% 14%)"
            ></div>

            <div
                class="md--2:hidden absolute top-0 left-0 w-full h-full bg-cl-main bg-opacity-[0.84]"
                style="clip-path: ellipse(120% 58% at 38% 35%)"
            ></div>

            <BaseMaxContent class="relative md--2:pt-50 pt-40 md--2:pb-60 pb-45 px-5">
                <div class="flex justify-center items-center">
                    <div class="md--2:w-[70%] w-full">
                        <div class="flex flex-col gap-y-7.5">
                            <h1
                                class="md--2:text-[3.5rem] text-[2.2rem] text-white text-center font-bold"
                            >
                                Empower Your Mobile Games with AI-based Prediction
                            </h1>

                            <div class="flex flex-col items-center gap-y-18">
                                <p
                                    class="md--2:text-[2rem] text-[1.5rem] text-center leading-[1.6] font-medium text-white"
                                >
                                    Increase In-Game Metrics by Analysing and Predicting Player
                                    behaviours
                                </p>

                                <div
                                    class="flex md--2:flex-row flex-col items-center gap-y-6.25 gap-x-8"
                                >
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
