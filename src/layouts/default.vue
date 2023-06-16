<script lang="ts" setup>
import AppHeader from "@/components/core/app/AppHeader.vue";
</script>

<template>
    <div class="relative min-h-screen w-full">
        <AppHeader />
        <main class="w-full">
            <slot />
        </main>
    </div>
</template>
