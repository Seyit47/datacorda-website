<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
</script>

<template>
    <div class="w-full bg-black">
        <BaseMaxContent class="px-6 pt-12 pb-20">
            <section class="w-full flex items-center">
                <div class="grid grid-cols-12 items-center">
                    <div class="col-span-5">
                        <div class="flex flex-col gap-y-2.5">
                            <h1 class="text-[4rem] text-white font-bold">Data Science Company</h1>
                            <div class="flex flex-col gap-y-7.5">
                                <p class="text-size_18/16 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Temporibus veniam maiores debitis.
                                </p>
                                <div class="w-55">
                                    <button
                                        class="flex items-center justify-center w-full h-full py-4 text-white bg-cl-main hover:bg-cl-main/90 rounded-full font-bold transition-colors duration-150"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-7">
                        <div class="relative pt-[76.23%]">
                            <img
                                src="@/assets/img/banner.svg"
                                alt=""
                                class="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </BaseMaxContent>
    </div>
</template>
