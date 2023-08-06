export const slideUpVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,

    }
}
export function getWindowWidth() {
    const { innerWidth } = window;
    return { innerWidth };
}