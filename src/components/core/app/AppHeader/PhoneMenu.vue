<script lang="ts" setup>
import PhoneMenuPopup from "./PhoneMenu/PhoneMenuPopup.vue";

defineOptions({
    name: "PhoneMenu",
});

defineProps({
    shown: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["hide"]);

const route = useRoute();

watch(route, () => {
    emit("hide");
});
</script>

<template>
    <PhoneMenuPopup :shown="shown" @backdrop-clicked="$emit('hide')">
        <slot />
    </PhoneMenuPopup>
</template>
