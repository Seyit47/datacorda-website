<script lang="ts" setup></script>

<template>
    <header class="w-full h-full">
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
                        class="hover:text-cl-main transition-colors duration-150"
                    >
                        Home
                    </NuxtLink>
                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#solutions',
                        }"
                        title="Services"
                        class="hover:text-cl-main transition-colors duration-150"
                    >
                        Solutions
                    </NuxtLink>
                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#about',
                        }"
                        title="About"
                        class="hover:text-cl-main transition-colors duration-150"
                    >
                        About
                    </NuxtLink>
                    <NuxtLink
                        :to="{
                            name: 'index',
                            hash: '#contact',
                        }"
                        title="Contact"
                        class="hover:text-cl-main transition-colors duration-150"
                    >
                        Contact
                    </NuxtLink>
                </nav>
                <div class="flex items-center">
                    <NuxtLink
                        to="#"
                        :external="true"
                        class="hover:text-cl-main transition-colors duration-150"
                    >
                        Login
                    </NuxtLink>

                    <div class="w-36 ml-12">
                        <NuxtLink
                            to="#"
                            :external="true"
                            class="flex items-center justify-center w-full h-full py-4 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-white rounded-full font-bold transition-colors duration-150"
                        >
                            Sign up
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
