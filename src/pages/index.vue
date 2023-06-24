<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import MainSection from "@/components/pages/home/MainSection.vue";
import AudienceSection from "@/components/pages/home/AudienceSection.vue";
</script>

<template>
    <div class="relative overflow-hidden w-full pt-12">
        <MainSection />
        <AudienceSection />
        <section id="about">
            <BaseMaxContent class="px-6 py-6">
                <div class="min-h-screen flex items-center">
                    <div class="grid grid-cols-12">
                        <div class="col-span-6 bg-white shadow-lg">
                            <div class="flex flex-col gap-y-5 py-6 px-6">
                                <h2 class="text-5xl font-bold">Who we are</h2>
                                <p class="text-size_18/16 leading-[1.6]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                                    quidem neque officiis ea id, recusandae dicta eius magni nulla
                                    cupiditate vitae illo quae tempora, placeat tenetur aspernatur
                                    mollitia eos nemo.
                                </p>
                                <div class="w-52">
                                    <button
                                        class="flex items-center justify-center w-full h-full py-4 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-white rounded-full font-bold transition-colors duration-150"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseMaxContent>
        </section>
    </div>
</template>
