<script lang="ts" setup>
import type { PropType } from "vue";
import { useSyncProps } from "@/composables/useSyncProps";

const componentInstance = getCurrentInstance();

defineOptions({
    name: "BaseInput",
    inheritAttrs: false,
});

const props = defineProps({
    modelValue: {
        type: [String, Number, null] as PropType<any>,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    errors: {
        type: [String, Boolean],
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    noError: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);

const localValue = useSyncProps<any>(props, "modelValue", emit);

const uid = computed(() => {
    return componentInstance?.uid;
});
</script>

<template>
    <div
        class="px-1 transition-all"
        :class="{
            'pb-4.5': !noError && errors,
        }"
    >
        <div class="group">
            <label
                v-if="label"
                :for="`input-${uid}`"
                class="inline-block mb-2.5 text-size_base font-bold select-none transition-colors duration-150"
                :class="{
                    'text-cl-main': !errors && !disabled,
                    'text-red-500': errors && !disabled,
                    'text-gray-400': disabled,
                }"
            >
                {{ label }}
            </label>
            <div class="relative">
                <input
                    :id="`input-${uid}`"
                    v-model="localValue"
                    v-bind="$attrs"
                    :disabled="disabled"
                    :placeholder="placeholder"
                    class="w-full h-12.5 px-2.5 py-3.5 rounded-md appearance-none text-size_14/16 placeholder:text-size_14/16 transition-colors duration-150 outline-none"
                    :class="{
                        'text-red-500 placeholder:text-red-500': errors && !disabled,
                        'text-gray-400': disabled,
                    }"
                />

                <template v-if="!noError">
                    <Transition name="error">
                        <span
                            v-if="errors"
                            class="w-[calc(100%-0.1rem)] absolute top-[calc(100%+0.2rem)] left-[0.05rem] font-medium text-size_11/16 leading-[1.3] text-red-500"
                        >
                            {{ errors }}
                        </span>
                    </Transition>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.error-enter-from,
.error-leave-to {
    opacity: 0;
}

.error-enter-active,
.error-leave-active {
    transition: opacity 150ms ease;
}
</style>
