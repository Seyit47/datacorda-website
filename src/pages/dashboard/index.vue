<script lang="ts" setup>
definePageMeta({
    middleware: [
        function (_, __) {
            return navigateTo({
                name: "dashboard-analytics",
            });
        },
    ],
});
</script>

<template>
    <div></div>
</template>
