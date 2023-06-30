<script lang="ts" setup></script>

<template>
    <header class="w-full h-full bg-cl-main/80">
        <div class="px-12 py-4">
            <div class="w-full h-12.5 flex items-center">
                <NuxtLink
                    :to="{
                        name: 'index',
                    }"
                    class="w-39"
                >
                    <div class="relative pt-[16.1%]">
                        <img
                            src="@/assets/img/datacorda-logo.png"
                            alt="Datacorda logo"
                            class="absolute top-0 left-0 w-full h-full"
                        />
                    </div>
                </NuxtLink>
                <nav class="flex items-center gap-x-10 mx-auto">
                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#home',
                        }"
                        title="Home"
                        class="hover:text-cl-main text-white transition-colors duration-150"
                    >
                        Home
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#about',
                        }"
                        title="About"
                        class="hover:text-cl-main text-white transition-colors duration-150"
                    >
                        About
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#solutions',
                        }"
                        title="Solutions"
                        class="hover:text-cl-main text-white transition-colors duration-150"
                    >
                        Solutions
                    </NuxtLink>

                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#contact',
                        }"
                        title="Contact"
                        class="hover:text-cl-main text-white transition-colors duration-150"
                    >
                        Contact
                    </NuxtLink>
                </nav>
                <div class="flex items-center">
                    <NuxtLink
                        :to="{
                            name: 'sign-in',
                        }"
                        class="hover:text-cl-main text-white font-semibold transition-colors duration-150"
                    >
                        Login
                    </NuxtLink>

                    <div class="w-36 ml-12">
                        <NuxtLink
                            :to="{
                                name: 'sign-up',
                            }"
                            class="flex items-center justify-center w-full h-full py-4 border-2 hover:border-white border-transparent text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                        >
                            Sign up
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
