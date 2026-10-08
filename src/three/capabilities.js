/**
 * Decide whether this device should get the WebGL road.
 *
 * The 3D scene is an enhancement, never a requirement: if any of these checks
 * fail the app keeps the 2D roadtrip layout, which is fully self-sufficient.
 */
const hasWebGL = () => {
    try {
        const canvas = document.createElement("canvas");
        return Boolean(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl2") || canvas.getContext("webgl"))
        );
    } catch (error) {
        return false;
    }
};

export const prefersReducedMotion = () =>
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const supports3d = () => {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return false;
    }

    if (prefersReducedMotion()) {
        return false;
    }

    const connection = navigator.connection || {};
    if (connection.saveData) {
        return false;
    }

    // These two are only reported by some browsers. Treat "unknown" as capable
    // rather than locking out Safari, which reports neither.
    if (typeof navigator.deviceMemory === "number" && navigator.deviceMemory < 4) {
        return false;
    }

    if (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency < 4) {
        return false;
    }

    return hasWebGL();
};

/** Cheap proxy for "this GPU will struggle": drives pixel ratio and scene density. */
export const isLowPower = () =>
    (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 6) ||
    Math.min(window.innerWidth, window.innerHeight) < 700;
