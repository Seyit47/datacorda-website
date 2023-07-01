<script lang="ts" setup>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { useToast, TYPE } from "vue-toastification";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import IconLock from "@/components/icons/IconLock.vue";
import IconMessage from "@/components/icons/IconMessage.vue";
import LoginInput from "@/components/pages/login/Input.vue";

definePageMeta({
    layout: "login",
});

const showPassword = ref(false);

const toast = useToast();

const form = useForm({
    validationSchema: object({
        email: string().required("Required field!").email("Entered invalid email!"),
        password: string()
            .required("Required field!")
            .min(8, "Password must be at least 8 characters long!")
            .matches(/[A-Z]/, "Password must contain at least 1 uppercase characters!")
            .matches(/[a-z]/, "Password must contain at least 1 lowercase character!")
            .matches(/\d+/, "Password must contain at least 1 digit!")
            .matches(/[@#$!%*^?()&]/, "Password must contain at least 1 special character!"),
    }),
});

const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");

async function onSubmit() {
    const errors = await form.validate();
    if (!errors.valid) {
        toast("Entered invalid information!", {
            type: TYPE.ERROR,
            timeout: 3000,
        });
        return;
    }

    toast("You are logged in successfully!", {
        type: TYPE.SUCCESS,
        timeout: 3000,
    });

    setTimeout(async () => {
        await navigateTo(
            {
                path: "http://localhost:8080",
            },
            {
                external: true,
            }
        );
    }, 500);
}
</script>

<template>
    <div class="w-full min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <div class="flex flex-col items-center gap-y-12.5 w-120 py-10 px-8.5 bg-white rounded-xl">
            <div class="flex flex-col items-center gap-y-2.5">
                <NuxtImg src="/sign-in-logo.png" />
                <span class="text-cl-gray text-size_14/16">Login to your account</span>
            </div>

            <form class="w-full flex flex-col gap-y-8.5 items-center" @submit.prevent="onSubmit">
                <div class="w-full flex flex-col gap-y-2.5">
                    <div class="flex flex-col gap-y-7.5 -mx-1">
                        <LoginInput
                            v-model="email"
                            placeholder="Email address"
                            :errors="form.errors.value.email"
                        >
                            <template #prepend>
                                <div class="h-full flex items-center px-4">
                                    <div class="w-6">
                                        <IconMessage />
                                    </div>
                                </div>
                            </template>
                        </LoginInput>
                        <LoginInput
                            v-model="password"
                            :type="showPassword ? 'text' : 'password'"
                            placeholder="Password"
                            :errors="form.errors.value.password"
                        >
                            <template #prepend>
                                <div class="h-full flex items-center px-4">
                                    <div class="w-6">
                                        <IconLock />
                                    </div>
                                </div>
                            </template>
                            <template #append>
                                <div class="h-full flex items-center px-4">
                                    <button
                                        type="button"
                                        class="w-5"
                                        @click="showPassword = !showPassword"
                                    >
                                        <EyeSlashIcon v-if="!showPassword" />
                                        <EyeIcon v-else />
                                    </button>
                                </div>
                            </template>
                        </LoginInput>
                    </div>
                    <NuxtLink
                        :to="{
                            name: '',
                        }"
                        class="ml-auto text-cl-blue text-size_14/16"
                    >
                        Recover password
                    </NuxtLink>
                </div>

                <div class="">
                    <span class="text-size_14/16 text-cl-gray"> Don’t have an account? </span>
                    <NuxtLink
                        :to="{
                            name: 'sign-up',
                        }"
                        class="text-cl-blue text-size_14/16"
                        >Sign Up</NuxtLink
                    >
                </div>

                <button
                    type="submit"
                    class="bg-cl-main text-white hover:bg-white hover:text-cl-main border-cl-main border-2 w-38 px-6 py-2.5 rounded-md transition-colors duration-150"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
</template>
