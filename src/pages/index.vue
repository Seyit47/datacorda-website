<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import MainSection from "@/components/pages/home/v2/MainSection.vue";
import SolutionsSection from "@/components/pages/home/v2/SolutionsSection.vue";
import AboutSection from "@/components/pages/home/v2/AboutSection.vue";
import ContactSection from "@/components/pages/home/v2/ContactSection.vue";
</script>

<template>
    <div class="relative overflow-hidden w-full">
        <MainSection />

        <BaseMaxContent class="px-6 pt-32 flex items-center justify-center">
            <div class="flex items-center justify-center w-[70%] p-12 min-h-[20vh]">
                <h2
                    class="text-[2.5rem] text-cl-main text-center font-bold"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    With our Subscription, businesses from mobile gaming industry can:
                </h2>
            </div>
        </BaseMaxContent>

        <SolutionsSection />

        <AboutSection />

        <ContactSection />
    </div>
</template>
