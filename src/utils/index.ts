export async function scrollTo(to = 0, speed = 2000) {
    const from = Math.min(window.scrollY, 3000);
    const sign = from <= to ? 1 : -1;
    const length = Math.abs(from - to);
    const duration = Math.min((1000 * length) / speed, 500);
    return await animate({
        draw: (progress: number) => {
            window.scrollTo({
                top: from + sign * length * progress,
            });
        },
        timing: (fraction: number) => Math.sin((fraction * Math.PI) / 2),
        duration,
    });
}

export function animate({
    draw,
    timing,
    duration,
}: {
    draw: (progress: number) => void;
    timing: (fraction: number) => number;
    duration: number;
}) {
    return new Promise<void>((resolve) => {
        const start = performance.now();
        const handler = (time: number) => {
            const fraction = Math.min((time - start) / duration, 1);
            draw(timing(fraction));
            if (fraction < 1) {
                requestAnimationFrame(handler);
            } else {
                resolve();
            }
        };
        requestAnimationFrame(handler);
    });
}
