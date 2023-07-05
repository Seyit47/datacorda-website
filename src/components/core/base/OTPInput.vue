<template>
    <div class="flex flex-col justify-center w-full">
        <label class="text-size_14/16 mb-2.5">Verification code:</label>
        <div class="grid grid-cols-6 gap-x-3.75">
            <input
                v-for="(_, index) in otp"
                :key="index"
                ref="otpInput"
                v-model.trim="otp[index]"
                type="text"
                class="sm--2:h-13.5 sm--4:h-10 h-9.5 sm--2:text-size_24/16 text-size_20/16 text-center outline-none border rounded transition-colors duration-150"
                :class="{
                    'focus:border-cl-main': !disabled && !invalid,
                    'border-red-500 text-red-500': invalid && !disabled,
                }"
                @focus="onFocus(index)"
                @input.prevent="handleInput($event, index)"
                @paste.prevent="handlePaste"
                @keydown.right="handleRightArrow(index)"
                @keydown.left="handleLeftArrow(index)"
                @keydown.backspace.prevent="handleBackspace(index)"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "OtpInput",

    props: {
        length: {
            type: Number,
            default: 6,
        },
        modelValue: {
            type: String,
            required: true,
        },
        invalid: {
            type: [String, Boolean],
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    emits: ["update:modelValue", "filled"],

    data() {
        return {
            otp: Array(this.length).fill(""),
        };
    },

    computed: {
        curIndex() {
            return this.otp.filter((item) => !!item).length;
        },
    },

    watch: {
        modelValue: {
            immediate: true,
            handler() {
                this.parseValue(this.modelValue);
            },
        },

        curIndex() {
            this.setFocus(this.curIndex);
        },
    },

    mounted() {
        this.setFocus(0);
    },

    methods: {
        validateInput(value) {
            const input = value;
            const expected = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            if (!expected.includes(input)) {
                return false;
            }
            return true;
        },

        setFocus(index) {
            this.$refs.otpInput?.[index]?.focus();
        },

        onFocus(index) {
            if (!this.otp[index]) {
                if (this.otp[this.currentIndex]) {
                    this.setFocus(this.curIndex + 1);
                    return;
                }
                this.setFocus(this.curIndex);
            }
        },

        handleInput(event, index) {
            if (!this.validateInput(event.data.slice(-1))) {
                this.otp[index] = "";
                return;
            }

            if (event.target.value.length > 1) {
                const arrChar = Array.from(this.otp[index]);
                const char = arrChar.reduce((acc, curValue) => {
                    if (this.modelValue[index] !== curValue) {
                        return curValue;
                    }
                    return acc;
                }, this.modelValue[index]);
                event.target.value = char;
            }

            this.otp.splice(index, 1, event.target.value);
            this.moveToNextInput(index);
        },

        handlePaste(event) {
            const clipboardData = event.clipboardData || window.clipboardData;
            const pastedData = clipboardData.getData("text");

            if (pastedData && pastedData.length !== this.length) {
                return;
            }

            const pastedArr = Array.from(pastedData);

            const checks = pastedArr.reduce((acc, curValue) => {
                if (!this.validateInput(curValue)) {
                    return acc.push(false);
                }
                return acc;
            }, []);

            if (checks.includes(false)) {
                return;
            }

            this.parseValue(pastedData);
            this.setFocus(this.length - 1);
            this.$emit("update:modelValue", this.otp.join(""));
            this.$refs.otpInput[this.length - 1].blur();
        },

        parseValue(value) {
            value = value || "";
            const chunks = value.split("");
            for (let i = 0; i < chunks.length; i++) {
                this.otp[i] = chunks[i];
            }

            for (let i = chunks.length; i < this.length; i++) {
                this.otp[i] = "";
            }
        },

        handleRightArrow(index) {
            if (index < this.length - 1) {
                this.setFocus(index + 1);
            }
        },

        handleLeftArrow(index) {
            if (index > 0) {
                this.setFocus(index - 1);
            }
        },

        handleBackspace() {
            const lastIndex = this.modelValue.length - 1;
            this.otp[lastIndex] = "";
            this.$emit("update:modelValue", this.otp.join(""));
        },

        moveToNextInput(index) {
            this.$emit("update:modelValue", this.otp.join(""));
            if (index < this.length - 1) {
                this.setFocus(index + 1);
                return;
            }
            const input = this.$refs.otpInput[index];
            input.blur();

            this.$nextTick(() => {
                this.$emit("filled");
            });
        },
    },
});
</script>
