<script lang="ts" setup>
defineOptions({
    name: "PhoneMenuPopup",
    inheritAttrs: false,
});

defineProps({
    shown: {
        type: Boolean,
        default: false,
    },
});

defineEmits(["backdrop-clicked"]);
</script>

<template>
    <Transition name="popup">
        <div
            v-if="shown"
            v-bind="$attrs"
            class="fixed top-20.5 left-0 z-[-1] w-full h-full overflow-hidden bg-black/80"
            @click.self.prevent="$emit('backdrop-clicked')"
        >
            <div class="dialog">
                <slot />
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.popup-appear-active,
.popup-enter-active,
.popup-leave-active {
    transition: opacity 0.25s ease;

    :deep(.dialog) {
        transition: transform 0.25s ease;
    }
}

.popup-appear-from,
.popup-enter-from,
.popup-leave-to {
    opacity: 0;

    :deep(.dialog) {
        transform: translateY(-110px);
    }
}
</style>
