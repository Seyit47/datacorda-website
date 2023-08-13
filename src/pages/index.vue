<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import MainSection from "@/components/pages/home/v2/MainSection.vue";
import SolutionsSection from "@/components/pages/home/v2/SolutionsSection.vue";
import ContactSection from "@/components/pages/home/v2/ContactSection.vue";
</script>

<template>
    <div class="relative overflow-hidden w-full">
        <MainSection />

        <BaseMaxContent class="px-6 3xl:pt-16 pt-0 flex items-center justify-center">
            <div class="flex items-center justify-center w-[70%] p-12 min-h-[20vh]">
                <h2
                    class="text-[3rem] text-cl-main text-center font-bold"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    What is waiting for you?
                </h2>
            </div>
        </BaseMaxContent>

        <SolutionsSection />

        <ContactSection />
    </div>
</template>
