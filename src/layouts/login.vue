<template>
    <div class="relative w-full min-h-screen">
        <header class="w-full h-16 p-4">
            <div class="w-42">
                <NuxtLink to="/">
                    <NuxtImg src="/datacorda-logo-black.png" />
                </NuxtLink>
            </div>
        </header>
        <main class="h-full bg-cl-default">
            <slot />
        </main>
    </div>
</template>

<style lang="scss">
$screen-2xl: 1280px;
$screen-3xl: 1366px;
$screen-5xl: 1536px;

html {
    @media screen and (min-width: $screen-2xl) {
        font-size: 13px !important;
    }

    @media screen and (min-width: $screen-5xl) {
        font-size: 17px !important;
    }
}
</style>
