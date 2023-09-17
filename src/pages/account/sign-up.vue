<script lang="ts" setup>
import { useField, useForm, useIsFormDirty } from "vee-validate";
import { useToast, TYPE } from "vue-toastification";
import { object, string } from "yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import IconLock from "@/components/icons/IconLock.vue";
import IconMessage from "@/components/icons/IconMessage.vue";
import IconProfile from "@/components/icons/IconProfile.vue";
import LoginInput from "@/components/pages/login/Input.vue";
import { useAuthStore } from "@/store/auth";
import { AuthUser } from "~/types/response/auth";

const router = useRouter();

const { $config } = useNuxtApp();

const authStore = useAuthStore();

const { setUser } = authStore;

onBeforeRouteLeave((to, _, next) => {
    const leave = () => {
        if (to.name !== "account-verify") {
            setUser(null);
        }
    };
    if (isFormDirty.value) {
        const confirmed = window.confirm("Do you really want to leave? you have unsaved changes!");
        if (confirmed) {
            leave();
            next();
            return;
        }
        return next(false);
    }
    leave();
    next();
});

function refreshHandler(e: BeforeUnloadEvent) {
    if (isFormDirty.value) {
        e.returnValue = "Do you really want to leave? you have unsaved changes!";
    }
}

onMounted(() => {
    window.addEventListener("beforeunload", refreshHandler);
});

onBeforeUnmount(() => {
    window.removeEventListener("beforeunload", refreshHandler);
});

const showPassword = ref(false);

const isSubmitted = ref(false);

const toast = useToast();

const form = useForm({
    validationSchema: object({
        username: string()
            .required("Required field!")
            .min(8, "Username length must be at least 8 characters!"),
        email: string().required("Required field!").email("Entered invalid email!"),
        password: string()
            .required("Required field!")
            .min(8, "Password length must be at least 8 characters!")
            .matches(/[A-Z]/, "Password must contain at least 1 uppercase characters!")
            .matches(/[a-z]/, "Password must contain at least 1 lowercase character!")
            .matches(/\d+/, "Password must contain at least 1 digit!")
            .matches(/[@#$!%*^?()&]/, "Password must contain at least 1 special character!"),
    }),
});

const isFormDirty = useIsFormDirty();

const { value: username } = useField<string>("username", undefined, {
    initialValue: "",
});
const { value: email } = useField<string>("email", undefined, {
    initialValue: "",
});
const { value: password } = useField<string>("password", undefined, {
    initialValue: "",
});

async function onSubmit() {
    try {
        const errors = await form.validate();
        if (!errors.valid) {
            toast("Entered invalid information!", {
                type: TYPE.ERROR,
                timeout: 3000,
            });
            return;
        }

        const formData = new FormData();
        formData.append("username", username.value);
        formData.append("email", email.value);
        formData.append("password", password.value);

        const res = await $fetch<AuthUser>(`${$config.public.BACKEND_URL}/user/register`, {
            method: "POST",
            body: formData,
        });

        toast("You are signed up successfully!", {
            type: TYPE.SUCCESS,
            timeout: 3000,
        });

        isSubmitted.value = true;

        setUser(res);

        form.resetForm();
        router.push({
            name: "account-verify",
        });
    } catch (err: any) {
        const res = err.response?._data;
        toast(res?.message, {
            type: TYPE.ERROR,
            timeout: 3000,
        });
    }
}
</script>

<template>
    <article class="w-full min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <div
            class="flex flex-col items-center gap-y-12.5 lg--1:w-120 w-140 py-10 px-8.5 bg-white rounded-xl"
        >
            <div class="flex flex-col items-center gap-y-2.5">
                <div class="w-36.25">
                    <NuxtImg src="/sign-in-logo.png" alt="Datacorda logo" />
                </div>
                <div>
                    <span class="text-size_20/16 font-bold">Get Started with </span>
                    <NuxtLink
                        :to="{
                            name: 'index',
                        }"
                        class="text-cl-blue text-size_20/16 font-bold"
                    >
                        Datacorda
                    </NuxtLink>
                </div>
                <span class="text-cl-gray text-size_14/16">Create your Corda Account</span>
            </div>

            <form class="w-full flex flex-col gap-y-8.5 items-center" @submit.prevent="onSubmit">
                <div class="w-full flex flex-col gap-y-2.5">
                    <div class="flex flex-col gap-y-7.5 -mx-1">
                        <LoginInput
                            v-model="username"
                            name="fullname"
                            placeholder="Your Full Name"
                            :errors="form.errors.value.username"
                        >
                            <template #prepend>
                                <div class="h-full flex items-center px-4">
                                    <div class="w-6">
                                        <IconProfile />
                                    </div>
                                </div>
                            </template>
                        </LoginInput>
                        <LoginInput
                            v-model="email"
                            name="email"
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
                            name="password"
                            placeholder="Create a Strong Password"
                            :type="showPassword ? 'text' : 'password'"
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
                </div>

                <a
                    :href="`${$config.public.BACKEND_URL}/user/signup-google`"
                    class="flex items-center gap-x-2.5 border rounded-full px-4 py-2.5"
                >
                    <div class="w-6">
                        <svg viewBox="0 0 24 24" fill="none" class="l">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path
                                    d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                                    fill="#4285F4"
                                ></path>
                                <path
                                    d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                                    fill="#34A853"
                                ></path>
                                <path
                                    d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                                    fill="#FBBC05"
                                ></path>
                                <path
                                    d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                                    fill="#EA4335"
                                ></path>
                            </g>
                        </svg>
                    </div>

                    <span class="leading-none text-size_14/16 text-black">
                        Sign up with Google
                    </span>
                </a>

                <div>
                    <span class="text-size_14/16 text-cl-gray">Already have an account? </span>
                    <NuxtLink
                        :to="`${$config.public.DASHBOARD_URL}/login`"
                        :external="true"
                        class="text-cl-blue text-size_14/16"
                        >Login</NuxtLink
                    >
                </div>

                <button
                    type="submit"
                    class="bg-cl-main text-white hover:bg-white hover:text-cl-main border-cl-main border-2 w-38 px-6 py-2.5 rounded-md transition-colors duration-150"
                >
                    Sign-up
                </button>
            </form>
        </div>
    </article>
</template>
