<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";

defineOptions({
    name: "AppFooter",
});
</script>

<template>
    <footer class="absolute top-full left-0 w-full bg-cl-main">
        <BaseMaxContent class="md--2:px-6 px-5 text-white">
            <div class="lg--1:pt-10 lg--1:pb-12.5 md--2:py-7.5 pt-10 pb-2.5">
                <div class="w-39">
                    <NuxtLink
                        :to="{
                            name: 'index',
                        }"
                    >
                        <NuxtImg src="/datacorda-logo.png" alt="" />
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-12 gap-y-7.5 mt-5">
                    <div class="lg--1:col-span-4 md--2:col-span-5 col-span-12">
                        <div class="flex flex-col gap-y-5 h-full">
                            <p class="md--2:w-full w-[90%] text-size_14/16">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                tempora molestias natus eius culpa, soluta unde obcaecati saepe
                                similique! Numquam, iste error cumque id aperiam consectetur animi
                                magnam debitis veniam.
                            </p>
                            <span class="hidden lg--1:block mt-auto font-bold"
                                >Copyright all rights is reserved Datacorda 2023</span
                            >
                        </div>
                    </div>
                    <div class="lg--1:col-span-8 md--2:col-span-7 col-span-12 md--2:ml-auto">
                        <div
                            class="flex md--2:flex-row flex-row-reverse flex-wrap lg--1:justify-normal justify-between self-start md--2:gap-x-26.5"
                        >
                            <div class="flex flex-col gap-y-2.5">
                                <h4 class="font-bold leading-none">Contacts</h4>
                                <span class="text-size_14/16">+993 65 55 32 12</span>
                                <span class="text-size_14/16">+993 12 34 56 76</span>
                                <a href="mailto:info@datacorda.com" class="text-size_14/16"
                                    >info@datacorda.com</a
                                >
                            </div>
                            <div class="flex flex-col gap-y-2.5">
                                <h4 class="font-bold leading-none">Links</h4>
                                <nav class="flex flex-col gap-y-2.5">
                                    <NuxtLink
                                        :to="{
                                            name: 'index',
                                            hash: '#home',
                                        }"
                                        class="text-size_14/16"
                                        >Home</NuxtLink
                                    >
                                    <NuxtLink
                                        :to="{
                                            name: 'index',
                                            hash: '#solutions',
                                        }"
                                        class="text-size_14/16"
                                        >Solutions</NuxtLink
                                    >
                                    <NuxtLink
                                        :to="{
                                            name: 'index',
                                            hash: '#about',
                                        }"
                                        class="text-size_14/16"
                                        >About us</NuxtLink
                                    >
                                    <NuxtLink
                                        :to="{
                                            name: 'index',
                                            hash: '#contact',
                                        }"
                                        class="text-size_14/16"
                                        >Contact us</NuxtLink
                                    >
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg--1:hidden md--2:mt-auto mt-10 md--2:block flex justify-center">
                    <span class="font-bold">Copyright all rights is reserved Datacorda 2023</span>
                </div>
            </div>
        </BaseMaxContent>
    </footer>
</template>
