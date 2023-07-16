<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
</script>

<template>
    <section id="home">
        <div class="relative w-full min-h-[calc(100vh-4.125rem)]">
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="w-full h-full">
                    <svg viewBox="0 0 1920 955" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="601.5" cy="54.5" rx="1428.5" ry="900.5" fill="#44376A" />
                    </svg>
                </div>
            </div>

            <BaseMaxContent class="relative py-12">
                <div class="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-x-10 items-center">
                    <div class="col-span-6">
                        <div class="flex flex-col gap-y-7.5">
                            <h1 class="text-[3.5rem] text-white font-medium">
                                Empowering Mobile Games with AI-based Prediction
                            </h1>

                            <div class="flex flex-col gap-y-9.25">
                                <p class="text-size_18/16 leading-[1.6] text-white">
                                    Datacorda is an AI-powered prediction and analytics SaaS
                                    platform for mobile games. We help businesses in the mobile
                                    gaming industry overcome challenges. With our platform,
                                    companies can increase their player retention and decrease churn
                                    rates. Join us to reach the full potential of your mobile gaming
                                    business.
                                </p>

                                <div class="w-52">
                                    <NuxtLink
                                        :to="{
                                            name: 'account-sign-up',
                                        }"
                                        class="flex items-center justify-center w-full h-full py-2.5 border-2 border-white text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                                    >
                                        Sign up
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-7" style="grid-column: span 7 / span 7">
                        <div class="relative pt-[74.7%] flex items-center justify-center">
                            <NuxtImg
                                src="/home/main/dashboard.png"
                                format="webp"
                                alt="Dashboard"
                                class="absolute top-0 left-[5%] w-full h-full"
                                data-aos="fade-up"
                            />
                        </div>
                    </div>
                </div>
            </BaseMaxContent>
        </div>
    </section>
</template>
