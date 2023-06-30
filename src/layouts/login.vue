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
