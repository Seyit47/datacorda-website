<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
</script>

<template>
    <section id="about">
        <BaseMaxContent class="px-6">
            <article class="grid grid-cols-12 items-center min-h-[80vh]">
                <div class="col-span-6">
                    <div
                        class="flex flex-col gap-y-7.5"
                        data-aos="fade-up-right"
                        data-aos-duration="800"
                    >
                        <h2 class="text-[3.5rem] text-cl-main font-bold">About Us</h2>

                        <p class="w-[90%] text-size_17/16 text-cl-main font-semibold leading-[1.4]">
                            At Datacorda, we understand the challenges faced by businesses in the
                            mobile gaming industry. High churn rates and the constant struggle to
                            retain players can be overwhelming. That's where we come in. As
                            Datacorda team, we are dedicated to helping mobile gaming businesses
                            take the right actions at the right time to increase player retention
                            and decrease churn rates.
                        </p>

                        <div class="w-46 mt-4">
                            <button
                                class="flex items-center justify-center w-full h-full py-2.5 border-2 border-cl-main text-white hover:text-cl-main bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                            >
                                More details
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-span-6">
                    <div class="relative pt-[75.39%]">
                        <NuxtImg
                            src="/home/about/about.png"
                            format="webp"
                            alt="Deep analytics"
                            class="absolute top-0 left-[10%] w-full h-full"
                            data-aos="fade-up-left"
                            data-aos-duration="800"
                        />
                    </div>
                </div>
            </article>
        </BaseMaxContent>
    </section>
</template>
