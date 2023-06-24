<script lang="ts" setup>
import AppHeader from "@/components/core/app/AppHeader.vue";
</script>

<template>
    <div class="relative min-h-screen w-full">
        <AppHeader class="sticky top-0 bg-white z-[9999] shadow-md" />
        <main class="w-full">
            <slot />
        </main>
    </div>
</template>
