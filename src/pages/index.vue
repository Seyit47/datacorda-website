<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import MainSection from "@/components/pages/home/MainSection.vue";
import AudienceSection from "@/components/pages/home/AudienceSection.vue";
import ContactSection from "@/components/pages/home/ContactSection.vue";
</script>

<template>
    <div class="relative overflow-hidden w-full pt-12">
        <MainSection />
        <section id="about">
            <BaseMaxContent class="relative px-6 py-6">
                <div class="absolute top-1/2 -translate-y-1/2 left-[10%] w-[80%]">
                    <div class="relative pt-[66.7%]">
                        <NuxtImg
                            src="/about-us.jpeg"
                            alt="about us"
                            class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full"
                        />
                    </div>
                </div>
                <div class="relative min-h-screen flex items-center">
                    <div class="grid grid-cols-12 items-center">
                        <div
                            class="col-span-6 bg-white"
                            style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        >
                            <div class="flex flex-col gap-y-7.5 px-10 py-12">
                                <h2 class="text-5xl font-bold">About us</h2>
                                <div class="flex flex-col gap-y-2.5">
                                    <p class="text-size_18/16 leading-[1.6]">
                                        At Datacorda, we understand the challenges faced by
                                        businesses in the mobile gaming industry.
                                    </p>

                                    <p class="text-size_18/16 leading-[1.6]">
                                        High churn rates and the constant struggle to retain players
                                        can be overwhelming. That's where we come in.
                                    </p>

                                    <p class="text-size_18/16 leading-[1.6]">
                                        As Datacorda team, we are dedicated to helping mobile gaming
                                        businesses take the right actions at the right time to
                                        increase player retention and decrease churn rates.
                                    </p>
                                </div>

                                <div class="w-52">
                                    <button
                                        class="flex items-center justify-center w-full h-full py-4 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                                    >
                                        More details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseMaxContent>
        </section>
        <BaseMaxContent class="px-6 py-6 flex items-center justify-center">
            <div class="flex items-center justify-center w-[80%] p-12 min-h-[20vh]">
                <h2 class="text-[2.5rem] text-center font-bold">
                    With subscribing our platform, businesses from mobile gaming industry can:
                </h2>
            </div>
        </BaseMaxContent>

        <AudienceSection />

        <BaseMaxContent class="px-6 py-12 mt-12 flex items-center justify-center">
            <div
                class="flex flex-col gap-y-7.5 items-center justify-center w-[80%] p-12 min-h-[20vh] bg-white"
            >
                <p class="text-[1.5rem] text-center font-bold">
                    With Datacorda, you'll have the tools and insights you need to make informed
                    decisions and unlock the full potential of your mobile game.
                </p>

                <p class="text-[1.5rem] text-center font-bold">
                    Join us on this exciting journey and discover a new era of gaming analytics.
                    Take control of your game's success with Datacorda. Get started today and
                    revolutionize your mobile gaming business.
                </p>
                <div class="w-52">
                    <button
                        class="flex items-center justify-center w-full h-full py-4 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                    >
                        Book a call
                    </button>
                </div>
            </div>
        </BaseMaxContent>

        <ContactSection />
    </div>
</template>
