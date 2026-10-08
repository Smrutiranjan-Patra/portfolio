import React, { useEffect, useRef } from "react";
import "./css/roadCanvas.css";
import { isLowPower } from "../three/capabilities";

/**
 * Mounts the WebGL road behind the page and drives the camera from scroll.
 *
 * three.js is imported dynamically so it lands in its own chunk: the content
 * paints on the main bundle, and the scene arrives afterwards.
 */
const RoadCanvas = ({ theme }) => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        let cancelled = false;
        let scene = null;
        let ticking = false;

        const progress = () => {
            const doc = document.documentElement;
            const scrollable = doc.scrollHeight - window.innerHeight;
            return scrollable > 0 ? window.scrollY / scrollable : 0;
        };

        const onScroll = () => {
            if (ticking || !scene) {
                return;
            }
            ticking = true;
            window.requestAnimationFrame(() => {
                if (scene) {
                    scene.setProgress(progress());
                }
                ticking = false;
            });
        };

        const onResize = () => {
            if (scene) {
                scene.resize();
            }
        };

        import("../three/roadScene")
            .then(({ createRoadScene }) => {
                if (cancelled || !canvasRef.current) {
                    return;
                }

                scene = createRoadScene(canvasRef.current, {
                    theme,
                    lowPower: isLowPower(),
                });
                sceneRef.current = scene;
                scene.setProgress(progress());

                window.addEventListener("scroll", onScroll, { passive: true });
                window.addEventListener("resize", onResize);
                document.body.dataset.road = "ready";
            })
            .catch(() => {
                // A failed chunk or an unsupported GPU just means no 3D; the
                // 2D layout underneath is already complete.
                document.body.dataset.road = "failed";
            });

        return () => {
            cancelled = true;
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            delete document.body.dataset.road;
            if (scene) {
                scene.dispose();
            }
            sceneRef.current = null;
        };
        // Mount once: theme changes are pushed through setTheme below rather
        // than tearing down and rebuilding the whole scene.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (sceneRef.current) {
            sceneRef.current.setTheme(theme);
        }
    }, [theme]);

    return <canvas className="road-canvas" ref={canvasRef} aria-hidden="true" />;
};

export { RoadCanvas };
