<script lang="ts" setup>
const bgColor = ref(false);

function bgColorTrigger() {
    if (window.scrollY > 10) {
        bgColor.value = true;
        return;
    }
    bgColor.value = false;
}

onMounted(() => {
    window.addEventListener("scroll", bgColorTrigger);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", bgColorTrigger);
});
</script>

<template>
    <header
        class="w-full transition duration-150"
        :class="{
            'bg-transparent': !bgColor,
            'bg-cl-main shadow-md': bgColor,
        }"
    >
        <div class="px-12 py-4">
            <div class="w-full h-12.5 flex items-center">
                <NuxtLink
                    :to="{
                        name: 'index',
                    }"
                    class="w-39"
                >
                    <div class="relative pt-[17.75%]">
                        <img
                            src="@/assets/img/datacorda-logo.png"
                            alt="Datacorda logo"
                            class="absolute top-0 left-0 w-full h-full"
                        />
                    </div>
                </NuxtLink>
                <nav class="flex items-center gap-x-10 mx-auto pl-36">
                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#home',
                        }"
                        title="Home"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Home
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#solutions',
                        }"
                        title="Solutions"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Solutions
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'product',
                        }"
                        title="Product"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Product
                    </NuxtLink>

                    <NuxtLink
                        to="#"
                        title="Pricing"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Pricing
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#contact',
                        }"
                        title="Contact"
                        class="hover:text-white/70 text-white font-medium transition-colors duration-150"
                    >
                        Contact
                    </NuxtLink>
                </nav>
                <div class="flex items-center">
                    <div class="w-36">
                        <NuxtLink
                            :to="`${$config.public.DASHBOARD_URL}/login`"
                            :external="true"
                            class="flex items-center justify-center w-full h-full py-2.5 hover:text-white/70 text-white font-semibold transition-colors duration-150"
                        >
                            Login
                        </NuxtLink>
                    </div>

                    <div class="w-36">
                        <NuxtLink
                            :to="{
                                name: 'account-sign-up',
                            }"
                            class="flex items-center justify-center w-full h-full py-2.5 border-2 hover:border-white border-transparent text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                        >
                            Sign up
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
