<script lang="ts" setup>
import { useField, useForm, useIsFormDirty } from "vee-validate";
import { object, string } from "yup";
import { useToast, TYPE } from "vue-toastification";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";
import OtpInput from "@/components/core/base/OTPInput.vue";

const $config = useRuntimeConfig();

const toast = useToast();

const authStore = useAuthStore();

const { getUser } = storeToRefs(authStore);

const { setUser } = authStore;

definePageMeta({
    middleware: [
        function () {
            if (process.server) return;

            const authStore = useAuthStore();

            const { getUser } = storeToRefs(authStore);

            if (!getUser.value) {
                return navigateTo({
                    name: "account-sign-up",
                    replace: true,
                });
            }
        },
    ],
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

const form = useForm({
    validationSchema: object({
        otp: string().required("Required field!").length(6, "Invalid OTP input!"),
    }),
});

const isFormDirty = useIsFormDirty();

const { value: otp } = useField<string>("otp", undefined, {
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

        if (getUser.value?.email) {
            formData.append("email", getUser.value.email);
        }
        formData.append("verification_code", otp.value);

        await $fetch(`${$config.public.BACKEND_URL}/user/verify`, {
            method: "POST",
            body: formData,
        });

        toast("Verify success!", {
            type: TYPE.SUCCESS,
            timeout: 3000,
        });

        form.resetForm();

        setTimeout(() => {
            navigateTo(`${$config.public.DASHBOARD_URL}/login`, {
                external: true,
            });
        }, 1000);
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
    <div class="w-full min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <div class="flex flex-col items-center gap-y-12.5 w-120 py-10 px-8.5 bg-white rounded-xl">
            <div class="flex flex-col items-center gap-y-2.5">
                <div class="w-36.25">
                    <NuxtImg src="/sign-in-logo.png" alt="Datacorda logo" />
                </div>
                <span class="text-cl-gray text-size_14/16 text-center"
                    >We have sended a confirmation password to your email:
                </span>
                <span>
                    {{ getUser?.email }}
                </span>
            </div>

            <form class="w-full flex flex-col gap-y-8.5 items-center" @submit.prevent="onSubmit">
                <div class="w-full flex flex-col gap-y-2.5">
                    <div class="flex flex-col gap-y-7.5 -mx-1">
                        <OtpInput v-model="otp" :invalid="form.errors.value.otp" />
                    </div>
                </div>

                <button
                    type="submit"
                    class="bg-cl-main text-white hover:bg-white hover:text-cl-main border-cl-main border-2 w-38 px-6 py-2.5 rounded-md transition-colors duration-150"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>
