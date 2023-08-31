<script lang="ts" setup>
import { useField, useForm, useIsFormDirty } from "vee-validate";
import { object, string } from "yup";
import { useToast, TYPE } from "vue-toastification";
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import BaseInput from "@/components/core/base/BaseInput.vue";
import BaseTextArea from "@/components/core/base/BaseTextArea.vue";

defineOptions({
    name: "ContactSection",
});

const emit = defineEmits(["submitted"]);

const toast = useToast();

const form = useForm({
    validationSchema: object({
        fullname: string().required("Required field!").min(8, "Must be at least 8 characters"),
        email: string()
            .required("Required field!")
            .matches(
                /^[_A-Za-z0-9-+]+(\\.[_A-Za-z0-9-]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
                "Entered invalid email!"
            ),
        description: string().required("Required field!"),
    }),
});

const { value: fullname } = useField<string>("fullname");
const { value: email } = useField<string>("email");
const { value: description } = useField<string>("description");

async function onSubmit() {
    const errors = await form.validate();
    if (!errors.valid) {
        toast("Entered invalid information!", {
            type: TYPE.ERROR,
            timeout: 3000,
        });
        return;
    }

    toast("Message sent successfully!", {
        type: TYPE.SUCCESS,
        timeout: 3000,
    });
    emit("submitted");
}

const isDirty = useIsFormDirty();

defineExpose({
    isDirty,
});
</script>

<template>
    <section id="contact" class="relative">
        <div
            class="absolute top-0 left-0 w-full h-full"
            style="background: linear-gradient(180deg, #35275e 0%, rgba(217, 217, 217, 0) 100%)"
        ></div>
        <BaseMaxContent class="relative md--2:px-6 px-5 pb-24">
            <div
                data-aos="fade-up"
                data-aos-duration="800"
                class="flex flex-col w-full md--2:px-14"
            >
                <div class="py-25">
                    <h2
                        class="md--2:text-[2.5rem] text-[1.3rem] md--2:text-left text-center font-bold text-white"
                    >
                        Get Started today With Datacorda to improve your game
                    </h2>
                </div>
                <div
                    class="grid md--2:grid-cols-2 grid-cols-1 gap-y-12.5 items-center w-full pb-25"
                >
                    <div class="flex flex-col md--2:items-baseline items-center gap-y-4">
                        <h3 class="md--2:text-[2.3rem] text-[1.8rem] font-bold text-white">
                            Subscription Plans
                        </h3>
                        <p
                            class="md--2:w-[70%] w-[90%] md--2:text-left text-center md--2:text-size_20/16 text-base text-white"
                        >
                            Check-out our flexible prices for all kinds of studios and games
                        </p>
                        <div class="w-46 mt-4">
                            <NuxtLink
                                :to="{
                                    name: 'pricing',
                                }"
                                class="flex items-center justify-center w-full h-full py-2.5 border-2 border-white text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                            >
                                Pricing
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex flex-col md--2:items-baseline items-center gap-y-4">
                        <h3
                            class="md--2:text-[2.3rem] text-[1.8rem] md--2:text-left text-center font-bold text-white"
                        >
                            How It Works
                        </h3>
                        <p
                            class="md--2:w-[80%] w-[90%] md--2:text-left text-center md--2:text-size_20/16 text-base text-white"
                        >
                            To learn more about how Datacorda works go to product page
                        </p>
                        <div class="w-46 mt-4">
                            <NuxtLink
                                :to="{
                                    name: 'product',
                                }"
                                class="flex items-center justify-center w-full h-full py-2.5 border-2 border-white text-cl-main hover:text-white bg-white hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                            >
                                Product
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full gap-y-5">
                    <h2 class="md--2:text-[3rem] text-[2.5rem] text-cl-main font-bold">
                        Contact us
                    </h2>
                    <p class="text-size_20/16 text-cl-main font-semibold">
                        Contact us now and see what your game is capable of.
                    </p>
                </div>
                <form class="w-full flex flex-col gap-y-5 mt-7.5" @submit.prevent="onSubmit">
                    <div class="flex flex-col gap-y-5 -mx-1">
                        <div class="w-full">
                            <BaseInput
                                v-model="fullname"
                                name="fullname"
                                label="Full Name *"
                                type="text"
                                placeholder="Alex Jones"
                                :errors="form.errors.value.fullname"
                            />
                        </div>

                        <div class="w-full">
                            <BaseInput
                                v-model="email"
                                name="email"
                                label="E-mail *"
                                type="text"
                                placeholder="example: john@gmail.com"
                                :errors="form.errors.value.email"
                            />
                        </div>

                        <div class="w-full">
                            <BaseTextArea
                                v-model="description"
                                name="description"
                                label="Note *"
                                placeholder="Note..."
                                rows="8"
                                :errors="form.errors.value.description"
                            />
                        </div>
                    </div>
                    <div class="w-52 mt-7.5">
                        <button
                            class="flex items-center justify-center w-full h-full py-2.5 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </BaseMaxContent>
    </section>
</template>
