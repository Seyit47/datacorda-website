<script lang="ts" setup>
import MainSection from "@/components/pages/home/v2/MainSection.vue";
import SolutionsSection from "@/components/pages/home/v2/SolutionsSection.vue";
import ContactSection from "@/components/pages/home/v2/ContactSection.vue";

definePageMeta({
    layout: "home",
});
</script>

<template>
    <div class="relative overflow-hidden w-full">
        <MainSection />

        <SolutionsSection />

        <ContactSection />
    </div>
</template>
