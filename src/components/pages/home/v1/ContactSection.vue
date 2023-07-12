<script lang="ts" setup>
import { useField, useForm, useIsFormDirty } from "vee-validate";
import { object, string } from "yup";
import { useToast, TYPE } from "vue-toastification";
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";
import BaseInput from "@/components/core/base/BaseInput.vue";
import BaseTextArea from "@/components/core/base/BaseTextArea.vue";

defineOptions({
    name: "ContactForm",
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
    <section id="contact" class="min-h-screen flex items-center">
        <BaseMaxContent class="px-6">
            <div class="grid grid-cols-12 items-center">
                <div class="col-span-5 flex flex-col gap-y-7.5" data-aos="fade-right">
                    <div class="flex flex-col gap-y-5">
                        <h2 class="text-[3.5rem] font-bold">Contact us</h2>
                        <p class="text-size_18/16">
                            Contact us now and see what your game is capable of.
                        </p>
                    </div>
                    <form class="flex flex-col gap-y-5" @submit.prevent="onSubmit">
                        <div class="flex flex-col gap-y-5 -mx-1">
                            <div class="w-full">
                                <BaseInput
                                    v-model="fullname"
                                    name="fullname"
                                    label="Fullname *"
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
                        <div class="w-52">
                            <button
                                class="flex items-center justify-center w-full h-full py-4 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-span-7" data-aos="fade-left">
                    <div class="w-full ml-auto">
                        <div class="relative pt-[84.18%]">
                            <NuxtImg
                                src="/contact.png"
                                format="webp"
                                class="absolute top-0 -right-[10%] w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMaxContent>
    </section>
</template>
