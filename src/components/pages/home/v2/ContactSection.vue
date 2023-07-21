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
        description: string(),
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
    <section id="contact">
        <BaseMaxContent class="px-6 pb-8.25">
            <article class="grid grid-cols-12 gap-x-28 items-center min-h-[80vh]">
                <div class="col-span-7">
                    <div class="relative pt-[64.03%]">
                        <NuxtImg
                            src="/home/contact/contact.png"
                            format="webp"
                            alt="Deep analytics"
                            class="absolute top-0 -left-[5%] w-full h-full"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />
                    </div>
                </div>
                <div class="col-span-5" data-aos="fade-up" data-aos-duration="800">
                    <div class="flex flex-col gap-y-5">
                        <h2 class="text-[3rem] text-cl-main font-bold">Contact us</h2>
                        <p class="text-size_17/16 text-cl-main font-semibold">
                            Contact us now and see what your game is capable of.
                        </p>
                    </div>
                    <form class="flex flex-col gap-y-5 mt-7.5" @submit.prevent="onSubmit">
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
                                    rows="6"
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
            </article>
        </BaseMaxContent>
    </section>
</template>
