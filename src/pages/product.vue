<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import SettingsIcon from "@/components/pages/product/SettingsIcon.vue";
import AboutEllipse from "@/components/pages/product/AboutEllipse.vue";

definePageMeta({
    layout: "home",
});
</script>

<template>
    <div class="relative w-full">
        <section id="product">
            <article class="relative w-full pb-25">
                <div class="relative w-full h-full">
                    <div
                        class="hidden md--2:block absolute top-0 left-0 w-full h-full bg-cl-main"
                        style="clip-path: ellipse(90% 65% at 60% 35%)"
                    ></div>

                    <div
                        class="md--2:hidden absolute top-0 left-0 w-full h-full bg-cl-main"
                        style="clip-path: ellipse(120% 65% at 65% 35%)"
                    ></div>

                    <BaseMaxContent class="relative md--2:px-6 px-5 md--2:pt-16.5 pt-7.5">
                        <div class="flex justify-center pt-25">
                            <div class="md--2:w-[80%]">
                                <h1
                                    class="md--2:text-[3.5rem] text-[2.5rem] text-center font-bold text-white"
                                >
                                    Discover the magic of turning data into value
                                </h1>
                            </div>
                        </div>
                    </BaseMaxContent>

                    <BaseMaxContent class="relative px-6 md--2:pt-12 pt-5 3xl:pb-20 pb-25">
                        <div class="grid grid-cols-12 items-center">
                            <div class="md--2:col-span-7 col-span-12">
                                <div class="flex flex-col gap-y-5">
                                    <h2
                                        class="md--2:text-[3rem] text-[2.5rem] md--2:text-left text-center font-bold text-white"
                                    >
                                        Data Collection
                                    </h2>
                                    <p
                                        class="md--2:w-[70%] md--2:text-[1.5rem] md--2:text-left text-center text-white font-medium"
                                    >
                                        With the help of our event design taxonomy, store your data
                                        easily by following the step-by-step guide shown in our
                                        Documentation. After the integration, Datacorda will handle
                                        the data cleaning, analytics and engineering for you.
                                    </p>
                                </div>
                            </div>
                            <div class="md--2:col-span-5 col-span-12 md--2:row-auto row-[1]">
                                <div class="relative pt-[100%]">
                                    <NuxtImg
                                        src="/product/data-collection.gif"
                                        format="gif"
                                        class="absolute top-0 md--2:left-0 -left-[5%] w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </BaseMaxContent>
                </div>

                <BaseMaxContent class="relative md--2:px-6 px-5 py-12.5 flex justify-center">
                    <div class="grid grid-cols-12 items-center">
                        <div class="md--2:col-span-7 col-span-12">
                            <div class="md--2:w-[70%] w-[80%] md--2:mx-0 mx-auto">
                                <div class="relative pt-[100%]">
                                    <NuxtImg
                                        src="/product/machine-learning.gif"
                                        format="gif"
                                        class="absolute top-0 left-0 w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="md--2:col-span-5 col-span-12">
                            <div class="flex flex-col md--2:gap-y-7.5 gap-y-5">
                                <h2 class="text-[2.5rem] font-bold text-cl-main">
                                    Machine Learning
                                </h2>
                                <p
                                    class="md--2:text-[1.5rem] md--2:text-left text-center text-cl-main font-medium"
                                >
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

                <div class="relative w-full h-full">
                    <div
                        class="hidden md--2:block absolute top-0 left-0 w-full h-full bg-cl-main"
                        style="clip-path: ellipse(80% 50% at 50% 50%)"
                    ></div>
                    <div
                        class="md--2:hidden absolute top-0 left-0 w-full h-full bg-cl-main"
                        style="clip-path: ellipse(150% 50% at 50% 50%)"
                    ></div>

                    <BaseMaxContent
                        class="relative md--2:px-6 px-5 flex justify-center md--2:py-25 py-20"
                    >
                        <div class="flex flex-col justify-center items-center">
                            <div class="md--2:w-[20%] w-[50%]">
                                <SettingsIcon />
                            </div>
                            <div
                                class="grid md--2:grid-cols-2 grid-cols-1 gap-x-50 gap-y-12.5 w-full md--2:pt-25 pt-12.5"
                            >
                                <div class="flex flex-col md--2:gap-y-2.5 gap-y-4">
                                    <h2
                                        class="md--2:text-[3rem] text-[2.5rem] md--2:text-left text-center font-bold text-white border-b-2 md--2:pb-1 pb-2.5"
                                    >
                                        Analytics Section
                                    </h2>
                                    <p
                                        class="md--2:text-size_24/16 md--2:text-left text-center font-medium text-white"
                                    >
                                        Our easy to understand and usable dashboards offer deep
                                        analytics and insights into your game's performance. These
                                        comprehensive graphics and funnels provide a clear picture
                                        of your game's performance and allow you to understand the
                                        logic behind the taken actions of the players to optimize
                                        player engagement.
                                    </p>
                                </div>
                                <div class="flex flex-col md--2:gap-y-2.5 gap-y-4">
                                    <h2
                                        class="md--2:text-[3rem] text-[2.5rem] md--2:text-left text-center font-bold text-white border-b-2 md--2:pb-1 pb-2.5"
                                    >
                                        Model Section
                                    </h2>
                                    <p
                                        class="md--2:text-size_24/16 md--2:text-left text-center font-medium text-white"
                                    >
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
                        <BaseMaxContent
                            class="relative px-6 flex justify-center md--2:pt-25 md--2:pb-40 pb-20"
                        >
                            <div class="flex flex-col justify-center items-center">
                                <div class="grid grid-cols-12 items-center gap-y-12.5">
                                    <div class="md--2:col-span-5 col-span-12">
                                        <div class="relative w-[70%] md--2:mx-0 mx-auto">
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
                                    <div class="md--2:col-span-7 col-span-12">
                                        <div class="flex flex-col md--2:gap-y-10 gap-y-5">
                                            <h2
                                                class="md--2:text-[3rem] text-[2.5rem] md--2:text-left text-center font-bold text-white"
                                            >
                                                About Us
                                            </h2>
                                            <p
                                                class="md--2:text-size_24/16 md--2:text-left text-center font-medium text-white"
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
