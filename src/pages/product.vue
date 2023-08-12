<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import SettingsIcon from "@/components/pages/product/SettingsIcon.vue";
import AboutEllipse from "@/components/pages/product/AboutEllipse.vue";
</script>

<template>
    <div class="relative w-full overflow-hidden">
        <section id="product">
            <article class="relative w-full min-h-screen">
                <div class="relative w-full h-full">
                    <div class="absolute top-0 left-0 w-full h-full">
                        <svg viewBox="0 0 1920 1170" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="1080" cy="456" rx="1410" ry="714" fill="#44376A" />
                        </svg>
                    </div>
                </div>

                <BaseMaxContent class="relative px-6 pt-16.5">
                    <div class="flex justify-center pt-25">
                        <div class="w-[70%]">
                            <h1 class="text-[3rem] text-center font-bold text-white">
                                Discover the magic of turning data into value
                            </h1>
                        </div>
                    </div>
                </BaseMaxContent>

                <BaseMaxContent class="relative px-6 pt-12 pb-40">
                    <div class="grid grid-cols-12 items-center">
                        <div class="col-span-7">
                            <div class="flex flex-col gap-y-10">
                                <h2 class="text-[2.5rem] font-bold text-white">Data Collection</h2>
                                <p class="w-[65%] text-white font-medium">
                                    With the help of our event design taxonomy, store your data
                                    easily by following the step-by-step guide shown in our
                                    Documentation. After the integration, Datacorda will handle the
                                    data cleaning, analytics and engineering for you.
                                </p>
                            </div>
                        </div>
                        <div class="col-span-5">
                            <div class="relative pt-[100%]">
                                <NuxtImg
                                    src="/product/data-collection.gif"
                                    format="gif"
                                    class="absolute top-0 left-0 w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </BaseMaxContent>

                <BaseMaxContent class="relative px-6 flex justify-center min-h-screen">
                    <div class="grid grid-cols-12 items-center">
                        <div class="col-span-7">
                            <div class="w-[60%]">
                                <div class="relative pt-[100%]">
                                    <NuxtImg
                                        src="/product/machine-learning.gif"
                                        format="gif"
                                        class="absolute top-0 left-0 w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-5">
                            <div class="flex flex-col gap-y-10">
                                <h2 class="text-[2.5rem] font-bold text-cl-main">
                                    Machine Learning
                                </h2>
                                <p class="text-cl-main font-medium">
                                    After finishing the data connection process, start getting
                                    relevant Game’s Deep Analytics. Accordingly, our self-learning
                                    AI-models will start learning players’ behaviour. As a result,
                                    their next move can be predicted. Being able to predict the next
                                    step is curricular step for taking the right actions to increase
                                    game metrics.
                                </p>
                            </div>
                        </div>
                    </div>
                </BaseMaxContent>

                <div class="relative w-full h-full pb-50">
                    <div class="absolute top-0 left-0 w-full h-full">
                        <svg viewBox="0 0 1920 2054" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="957.5" cy="1027" rx="1450.5" ry="1027" fill="#44376A" />
                        </svg>
                    </div>

                    <BaseMaxContent class="relative px-6 flex justify-center min-h-screen">
                        <div class="flex flex-col justify-center items-center">
                            <div class="w-[20%]">
                                <SettingsIcon />
                            </div>
                            <div class="grid grid-cols-2 gap-x-50 w-full pt-25">
                                <div class="flex flex-col gap-y-2.5">
                                    <h2
                                        class="w-[90%] text-[2.5rem] font-bold text-white border-b-2 pb-1"
                                    >
                                        Analytics Section
                                    </h2>
                                    <p class="w-[75%] text-size_18/16 font-medium text-white">
                                        Our easy to understand and usable dashboards offer deep
                                        analytics and insights into your game's performance. These
                                        comprehensive graphics and funnels provide a clear picture
                                        of your game's performance and allow you to understand the
                                        logic behind the taken actions of the players to optimize
                                        player engagement.
                                    </p>
                                </div>
                                <div class="flex flex-col gap-y-2.5">
                                    <h2
                                        class="w-[90%] text-[2.5rem] font-bold text-white border-b-2 pb-1"
                                    >
                                        Model Section
                                    </h2>
                                    <p class="w-[75%] text-size_18/16 font-medium text-white">
                                        Our ready to use prediction results offer you player
                                        segments depending on their behaviour. With those segments,
                                        integrate prediction results easily, start optimizing AD
                                        pressure and game difficulties. Additionally, take
                                        player-specific and behavior-specific actions to scale-up
                                        your game.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </BaseMaxContent>

                    <section id="about">
                        <BaseMaxContent class="relative px-6 flex justify-center min-h-screen">
                            <div class="flex flex-col justify-center items-center">
                                <div class="grid grid-cols-12 items-center">
                                    <div class="col-span-5">
                                        <div class="relative w-[60%]">
                                            <AboutEllipse />
                                            <div
                                                class="absolute top-[43%] left-[20%] w-[60%] h-full"
                                            >
                                                <div class="relative pt-[17.75%]">
                                                    <NuxtImg
                                                        src="/datacorda-logo.png"
                                                        format="webp"
                                                        class="absolute top-0 left-0 w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-7">
                                        <div class="flex flex-col gap-y-10">
                                            <h2 class="text-[2.5rem] font-bold text-white">
                                                About Us
                                            </h2>
                                            <p
                                                class="w-[75%] text-size_18/16 font-medium text-white"
                                            >
                                                Datacorda is an AI-powered prediction and analytics
                                                SaaS platform for mobile games. At Datacorda, we
                                                understand the challenges faced by businesses in the
                                                mobile gaming industry. High churn rates and the
                                                constant struggle to retain players can be
                                                overwhelming. That's where we come in. As Datacorda
                                                team, we are dedicated to help mobile gaming
                                                businesses taking the right actions at the right
                                                time, increasing player retention, maximizing
                                                revenue and LTV.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BaseMaxContent>
                    </section>
                </div>
            </article>
        </section>
    </div>
</template>
