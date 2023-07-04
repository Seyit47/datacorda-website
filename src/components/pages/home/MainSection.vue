<script lang="ts" setup>
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";

defineOptions({
    name: "MainSection",
});

const circle = ref<SVGCircleElement | null>(null);
const exampleLine = ref<SVGPathElement | null>(null);
const animations = ref<gsap.core.Tween[]>([]);

onMounted(() => {
    gsap.registerPlugin(MotionPathPlugin);

    if (circle.value && exampleLine.value) {
        const dashes = exampleLine.value.getTotalLength();

        exampleLine.value.style.strokeDasharray = `${dashes}`;
        exampleLine.value.style.strokeDashoffset = `${dashes}`;

        const lineAnimation = gsap.to(exampleLine.value, {
            duration: 5,
            strokeDashoffset: 1940,
            repeat: -1,
        });

        const circleAnimation = gsap.to(circle.value, {
            duration: 5,
            repeat: -1,
            motionPath: {
                path: exampleLine.value,
                align: exampleLine.value,
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 0.487,
            },
        });

        animations.value.push(lineAnimation);
        animations.value.push(circleAnimation);
    }
});

onBeforeUnmount(() => {
    animations.value.map((tween) => tween.kill());
    animations.value = [];
    circle.value = null;
    exampleLine.value = null;
});
</script>

<template>
    <div
        class="relative w-full h-full min-h-[calc(100vh-8.125rem)] bg-gradient-to-b from-white to-cl-main/20"
    >
        <div class="absolute top-0 right-0 w-full h-full flex items-end text-cl-main">
            <svg
                id="e1eoxGqLUl21"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1920 1080"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
            >
                <path
                    d="M627.928894,1080l156.215035-96.174522c136.532336-84.943134,269.021034-65.107376,357.077003-40.593145c401.689529,135.859318,510.110003-209.210823,563.246464-254.487778c51.011-71.818655,136.029336-151.443668,252.929543-34.348059c106.272916,67.134817,235.925862-31.225512,278.435028-60.889721c110.523831-87.431398,206.169475-221.701018,310.151618-132.708359v619.826093L627.928894,1080Z"
                    transform="matrix(.879719 0 0 1.197615-319.750137-213.4242)"
                    opacity="0.71"
                    fill="#35275E"
                />
            </svg>
        </div>
        <div class="absolute top-0 left-0 w-full h-full flex items-end text-cl-main">
            <svg
                id="e0XKMkTo6es1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1920 1080"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
            >
                <path
                    ref="exampleLine"
                    d="M627.928894,1080L818.560847,895.257876c114.431002-101.17787,190.881671-50.385854,314.158253-.000001c131.778417,57.342105,279.268696-163.768833,329.446041-228.37118c62.471949-74.351106,138.154792-88.992667,233.800423,21.85786c48.885543,56.205878,80.767417,29.664209,123.276583,0c110.523831-87.431398,167.911213-167.056418,271.893356-78.063759v469.319204h-1463.206609Z"
                    transform="matrix(.879719 0 0 1.197615 80.388366-213.4242)"
                    fill="#35275E"
                    stroke="white"
                    opacity="0.7"
                    stroke-width="3.84"
                />
            </svg>
            <div class="absolute top-0 left-0 w-full h-full flex items-end">
                <div class="w-6">
                    <svg
                        id="eS9u3BoaVbH1"
                        ref="circle"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 300 300"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                    >
                        <ellipse
                            rx="110"
                            ry="110"
                            transform="translate(150.000001 150)"
                            stroke-width="0"
                            fill="white"
                        />
                        <ellipse
                            rx="140.561455"
                            ry="139.935961"
                            transform="matrix(.960434 0 0 0.964727 150.000001 150)"
                            fill="none"
                            stroke="white"
                            stroke-width="30"
                            stroke-opacity="0.8"
                        />
                    </svg>
                </div>
            </div>
        </div>

        <BaseMaxContent class="relative px-6">
            <section id="home" class="relative max-w-[64rem] w-full mx-auto">
                <div class="h-full flex flex-col gap-y-2.5">
                    <h1 class="text-[4rem] font-semibold">
                        Revolutionizing Mobile Gaming Analytics!
                    </h1>
                    <div class="flex flex-col gap-y-7.5">
                        <p class="w-1/2 text-size_base leading-[1.8]">
                            Datacorda is an AI-powered prediction and analytics SaaS platform for
                            mobile games. We help businesses in the mobile gaming industry overcome
                            challenges. With our platform, companies can increase their player
                            retention and decrease churn rates. Join us to reach the full potential
                            of your mobile gaming business.
                        </p>
                        <div class="w-52">
                            <button
                                class="flex items-center justify-center w-full h-full py-4 border-2 border-cl-main text-white hover:text-cl-text bg-cl-main hover:bg-transparent rounded-full font-bold transition-colors duration-150"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </BaseMaxContent>
    </div>
</template>

<style lang="scss" scoped>
.main-banner-left-animation {
    animation: main-banner-left 1s ease-in-out infinite alternate;
}

@keyframes main-banner-left {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(10px);
    }
}

.main-banner-right-animation {
    animation: main-banner-right 1.5s ease-in-out infinite alternate;
}

@keyframes main-banner-right {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(10px);
    }
}
</style>
