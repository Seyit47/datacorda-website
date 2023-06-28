<script lang="ts" setup>
import BaseMaxContent from "@/components/core/base/BaseMaxContent.vue";

defineOptions({
    name: "MainSection",
});
</script>

<template>
    <div class="relative w-full h-full min-h-[85vh] bg-gradient-to-b from-white to-cl-main/20">
        <div class="absolute top-0 left-0 w-full h-[85vh] scale-x-[-1] flex items-end text-cl-main">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                class="absolute stroke-2"
            >
                <path
                    fill="currentColor"
                    fill-opacity="0.5"
                    stroke="white"
                    d="M0,32L30,58.7C60,85,120,139,180,144C240,149,300,107,360,80C420,53,480,43,540,69.3C600,96,660,160,720,181.3C780,203,840,181,900,154.7C960,128,1020,96,1080,117.3C1140,139,1200,213,1260,256C1320,299,1380,309,1410,314.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
            </svg>
        </div>

        <div class="absolute top-0 left-0 w-full h-[85vh] scale-x-[-1] flex items-end text-cl-main">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="relative">
                <path
                    fill="currentColor"
                    fill-opacity="0.6"
                    d="M0,32L30,74.7C60,117,120,203,180,245.3C240,288,300,288,360,256C420,224,480,160,540,122.7C600,85,660,75,720,96C780,117,840,171,900,208C960,245,1020,267,1080,256C1140,245,1200,203,1260,202.7C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
            </svg>
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
.element {
    background: lightblue;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid slateblue;
    border-radius: 5px;
}
.element {
    offset-path: path(
        "M0,32L30,58.7C60,85,120,139,180,144C240,149,300,107,360,80C420,53,480,43,540,69.3C600,96,660,160,720,181.3C780,203,840,181,900,154.7C960,128,1020,96,1080,117.3C1140,139,1200,213,1260,256C1320,299,1380,309,1410,314.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
    );
    animation: move 2000ms infinite ease-in-out;
}
@keyframes move {
    100% {
        offset-distance: 48%;
    }
}

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
