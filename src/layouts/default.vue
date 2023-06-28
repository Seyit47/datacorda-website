<script lang="ts" setup>
import AppHeader from "@/components/core/app/AppHeader.vue";
import AppFooter from "@/components/core/app/AppFooter.vue";
</script>

<template>
    <div class="relative min-h-screen w-full">
        <AppHeader class="sticky top-0 bg-cl-main z-[9999] shadow-md" />
        <main class="w-full bg-gradient-to-b from-white to-cl-main/10">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
