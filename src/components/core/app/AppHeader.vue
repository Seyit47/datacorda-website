<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
</script>

<template>
    <header class="w-full h-full">
        <div class="py-7.5 bg-black">
            <BaseMaxContent class="px-6">
                <div class="w-full h-12.5 flex items-center">
                    <NuxtLink
                        :to="{
                            name: 'index',
                        }"
                        class="w-39"
                    >
                        <div class="relative pt-[16.1%]">
                            <img
                                src="@/assets/img/datacorda-logo.png"
                                alt="Datacorda logo"
                                class="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                    </NuxtLink>
                    <nav class="flex items-center gap-x-10 ml-auto">
                        <NuxtLink
                            :to="{
                                name: 'index',
                                hash: '#home',
                            }"
                            title="Home"
                            class="text-white hover:text-cl-main transition-colors duration-150"
                        >
                            Home
                        </NuxtLink>
                        <NuxtLink
                            :to="{
                                name: 'index',
                                hash: '#home',
                            }"
                            title="Services"
                            class="text-white hover:text-cl-main transition-colors duration-150"
                        >
                            Services
                        </NuxtLink>
                        <NuxtLink
                            :to="{
                                name: 'index',
                                hash: '#home',
                            }"
                            title="About"
                            class="text-white hover:text-cl-main transition-colors duration-150"
                        >
                            About
                        </NuxtLink>
                        <NuxtLink
                            :to="{
                                name: 'index',
                                hash: '#home',
                            }"
                            title="Contact"
                            class="text-white hover:text-cl-main transition-colors duration-150"
                        >
                            Contact
                        </NuxtLink>
                    </nav>
                </div>
            </BaseMaxContent>
        </div>
    </header>
</template>
