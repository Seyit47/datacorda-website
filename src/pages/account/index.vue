<script lang="ts" setup>
definePageMeta({
    middleware: [
        function () {
            return navigateTo({
                name: "account-signup",
            });
        },
    ],
});
</script>

<template>
    <div></div>
</template>
