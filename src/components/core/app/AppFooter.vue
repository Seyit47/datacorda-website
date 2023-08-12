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

                <div class="grid grid-cols-12 gap-y-10 mt-5">
                    <div class="lg--1:col-span-4 md--2:col-span-5 col-span-12">
                        <div class="flex flex-col gap-y-7.5 h-full">
                            <div class="flex flex-col gap-y-2.5">
                                <label for="subscribe" class="text-size_17/16 font-bold"
                                    >Let's stay connected</label
                                >
                                <form class="flex items-center gap-x-2.5">
                                    <input
                                        id="subscribe"
                                        type="text"
                                        name="email"
                                        placeholder="Email address"
                                        class="py-2.5 px-4 focus:outline-none bg-transparent border-b w-full h-full"
                                    />
                                    <div class="w-46">
                                        <button
                                            class="flex items-center justify-center w-full h-full py-2.5 border-2 border-white text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="flex flex-col gap-y-5">
                                <p class="md--2:w-full w-[90%] text-size_14/16">
                                    Brooklyn, New York, USA.
                                </p>
                                <span class="hidden lg--1:block mt-auto font-bold"
                                    >Copyright all rights is reserved Datacorda LLC. 2023</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="lg--1:col-span-8 md--2:col-span-7 col-span-12 md--2:ml-auto">
                        <div class="flex flex-col gap-y-7.5">
                            <div
                                class="flex md--2:flex-row flex-row-reverse flex-wrap lg--1:justify-normal justify-between self-start md--2:gap-x-26.5"
                            >
                                <div class="flex flex-col gap-y-2.5">
                                    <h4 class="font-bold leading-none">Our socials</h4>
                                    <a
                                        href="https://instagram.com/datacorda_analytics?igshid=MTIzZWMxMTBkOA=="
                                        target="_blank"
                                        class="flex items-center gap-x-1 text-size_14/16"
                                    >
                                        <Icon name="tabler:brand-instagram" size="24" />
                                        <span>datacorda_analytics</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/datacorda/"
                                        target="_blank"
                                        class="flex items-center gap-x-1 text-size_14/16"
                                    >
                                        <Icon name="tabler:brand-linkedin" size="24" />
                                        <span>company/datacorda</span>
                                    </a>
                                </div>
                                <div class="flex flex-col gap-y-2.5">
                                    <h4 class="font-bold leading-none">Contacts</h4>
                                    <a href="mailto:info@datacorda.com" class="text-size_14/16">
                                        info@datacorda.com
                                    </a>
                                </div>
                                <div class="flex flex-col gap-y-2.5">
                                    <h4 class="font-bold leading-none">Company</h4>
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
                                                name: 'product',
                                            }"
                                            class="text-size_14/16"
                                            >Product</NuxtLink
                                        >
                                        <NuxtLink
                                            :to="{
                                                name: 'product',
                                                hash: '#about',
                                            }"
                                            class="text-size_14/16"
                                            >About us</NuxtLink
                                        >
                                        <NuxtLink
                                            :to="{
                                                name: 'index',
                                                hash: '#about',
                                            }"
                                            class="text-size_14/16"
                                            >Privacy Policy</NuxtLink
                                        >
                                        <NuxtLink
                                            :to="{
                                                name: 'index',
                                                hash: '#about',
                                            }"
                                            class="text-size_14/16"
                                            >Terms & conditions</NuxtLink
                                        >
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMaxContent>
    </footer>
</template>
