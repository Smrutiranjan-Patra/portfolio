import React, { useEffect, useRef, useState } from "react";
import "./css/mascot.css";
import { portfolio } from "../data/portfolio";
import { prefersReducedMotion } from "../three/capabilities";

/**
 * Pit: a little camper van that roams the page like a game character.
 *
 * While you scroll he drives towards a new perch, flipping to face the way he
 * is travelling. When scrolling stops he settles there and says his line about
 * whatever section you have parked on.
 */

// Section element ids do not all match the keys the copy is filed under:
// the skills section is #Resume and contact is #Contact.
const MESSAGE_KEY_BY_ID = {
    home: "home",
    about: "about",
    experience: "experience",
    project: "project",
    Resume: "skills",
    Contact: "contact",
};

// Resting spots as a fraction of the viewport, one per section, alternating
// sides so he crosses the screen rather than hugging one edge.
const PERCHES = [
    { x: 0.03, y: 0.70 },
    { x: 0.90, y: 0.22 },
    { x: 0.03, y: 0.32 },
    { x: 0.90, y: 0.70 },
    { x: 0.03, y: 0.74 },
    { x: 0.90, y: 0.26 },
];

const VAN_WIDTH = 92;
const VAN_HEIGHT = 74;
const EDGE = 14;
const TOP_SAFE = 90; // clear of the header

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Mascot = ({ hidden }) => {
    const { mascot } = portfolio;

    const [sectionId, setSectionId] = useState("home");
    const [resting, setResting] = useState(true);
    const [side, setSide] = useState("left");
    const [bubbleBelow, setBubbleBelow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [awake, setAwake] = useState(false);
    const [facing, setFacing] = useState(1);

    const rootRef = useRef(null);
    const eyesRef = useRef(null);

    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });
    const placed = useRef(false);
    const rafId = useRef(null);
    const idleTimer = useRef(null);
    const reduce = useRef(false);
    const lastFacing = useRef(1);

    useEffect(() => {
        reduce.current = prefersReducedMotion();
        const timer = window.setTimeout(() => setAwake(true), 1000);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (dismissed) {
            return undefined;
        }

        const sections = Array.from(document.querySelectorAll("main .section"));

        const write = () => {
            if (rootRef.current) {
                rootRef.current.style.transform =
                    `translate3d(${pos.current.x.toFixed(1)}px, ${pos.current.y.toFixed(1)}px, 0)`;
            }
        };

        /** Where should he be right now, given the scroll position? */
        const computeTarget = () => {
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            const line = vh * 0.45;
            let index = 0;
            sections.forEach((section, i) => {
                if (section.getBoundingClientRect().top <= line) {
                    index = i;
                }
            });

            const active = sections[index];
            const id = (active && active.id) || "home";
            setSectionId((previous) => (previous === id ? previous : id));

            const perch = PERCHES[index % PERCHES.length];

            // A slow wander on top of the perch, so he keeps drifting while the
            // page moves instead of snapping between six fixed points.
            const drift = Math.sin(window.scrollY / 300);
            const bob = Math.cos(window.scrollY / 210);

            const x = clamp((perch.x + drift * 0.03) * vw, EDGE, Math.max(EDGE, vw - VAN_WIDTH - EDGE));
            const y = clamp((perch.y + bob * 0.05) * vh, TOP_SAFE, Math.max(TOP_SAFE, vh - VAN_HEIGHT - EDGE));

            target.current = { x, y };
            setSide(x + VAN_WIDTH / 2 > vw * 0.55 ? "right" : "left");
            setBubbleBelow(y < TOP_SAFE + 70);
        };

        // --- the drive loop --------------------------------------------------
        const step = () => {
            const dx = target.current.x - pos.current.x;
            const dy = target.current.y - pos.current.y;

            pos.current.x += dx * 0.085;
            pos.current.y += dy * 0.085;

            if (Math.abs(dx) > 1.2) {
                const dir = dx > 0 ? 1 : -1;
                if (dir !== lastFacing.current) {
                    lastFacing.current = dir;
                    setFacing(dir);
                }
            }

            write();

            // Park the loop once he has arrived; scrolling wakes it again.
            if (Math.hypot(dx, dy) < 0.4) {
                rafId.current = null;
                return;
            }
            rafId.current = window.requestAnimationFrame(step);
        };

        const wake = () => {
            if (rafId.current === null) {
                rafId.current = window.requestAnimationFrame(step);
            }
        };

        let ticking = false;
        const onScroll = () => {
            if (ticking) {
                return;
            }
            ticking = true;
            window.requestAnimationFrame(() => {
                ticking = false;
                computeTarget();

                if (reduce.current) {
                    // No roaming for reduced motion: place him and stop.
                    pos.current = { ...target.current };
                    write();
                    return;
                }

                setResting(false);
                wake();

                window.clearTimeout(idleTimer.current);
                idleTimer.current = window.setTimeout(() => setResting(true), 400);
            });
        };

        const onResize = () => {
            computeTarget();
            wake();
        };

        computeTarget();
        if (!placed.current) {
            placed.current = true;
            // Drop him straight onto his first perch rather than sliding in
            // from the top-left corner.
            pos.current = { ...target.current };
            write();
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            window.clearTimeout(idleTimer.current);
            if (rafId.current !== null) {
                window.cancelAnimationFrame(rafId.current);
                rafId.current = null;
            }
        };
    }, [dismissed]);

    // --- eyes follow the pointer --------------------------------------------
    useEffect(() => {
        if (dismissed) {
            return undefined;
        }

        let ticking = false;
        let pointer = { x: 0, y: 0 };

        const apply = () => {
            ticking = false;
            const eyes = eyesRef.current;
            if (!eyes) {
                return;
            }
            const box = eyes.getBoundingClientRect();
            const dx = pointer.x - (box.left + box.width / 2);
            const dy = pointer.y - (box.top + box.height / 2);
            const distance = Math.hypot(dx, dy) || 1;
            const reach = Math.min(distance, 220) / 220;
            eyes.style.setProperty("--pupil-x", `${((dx / distance) * reach * 2.6).toFixed(2)}px`);
            eyes.style.setProperty("--pupil-y", `${((dy / distance) * reach * 2.2).toFixed(2)}px`);
        };

        const onMove = (event) => {
            pointer = { x: event.clientX, y: event.clientY };
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(apply);
            }
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [dismissed]);

    if (dismissed) {
        return null;
    }

    const message = mascot.messages[MESSAGE_KEY_BY_ID[sectionId] || sectionId] || mascot.greeting;

    return (
        <div
            className="mascot"
            ref={rootRef}
            data-awake={awake ? "yes" : "no"}
            data-hidden={hidden ? "yes" : "no"}
            data-resting={resting ? "yes" : "no"}
            data-side={side}
            data-bubble-below={bubbleBelow ? "yes" : "no"}
        >
            <div className="mascot-body" style={{ "--facing": facing }} aria-hidden="true">
                <svg viewBox="0 0 120 96" className="mascot-van" role="img">
                    <title>{mascot.label}</title>
                    <ellipse className="van-shadow" cx="60" cy="90" rx="34" ry="5" />
                    <path
                        className="van-shell"
                        d="M14 66V38c0-5 3-9 8-10l24-5c3-1 5-1 8-1h38c6 0 10 4 10 10v34c0 4-3 7-7 7H21c-4 0-7-3-7-7z"
                    />
                    <path className="van-roof" d="M34 23h40c4 0 7 3 7 7v3H27v-3c0-4 3-7 7-7z" />
                    <rect className="van-glass" x="24" y="34" width="46" height="22" rx="7" />
                    <g className="van-eyes" ref={eyesRef}>
                        <circle className="van-eye" cx="39" cy="45" r="7.5" />
                        <circle className="van-eye" cx="57" cy="45" r="7.5" />
                        <circle className="van-pupil" cx="39" cy="45" r="3.4" />
                        <circle className="van-pupil" cx="57" cy="45" r="3.4" />
                    </g>
                    <rect className="van-stripe" x="78" y="40" width="22" height="9" rx="4" />
                    <rect className="van-stripe van-stripe--soft" x="18" y="62" width="84" height="5" rx="2.5" />
                    <g className="van-wheels">
                        <circle className="van-tyre" cx="36" cy="79" r="11" />
                        <circle className="van-tyre" cx="86" cy="79" r="11" />
                        <circle className="van-hub" cx="36" cy="79" r="4.2" />
                        <circle className="van-hub" cx="86" cy="79" r="4.2" />
                    </g>
                </svg>
            </div>

            <div className="mascot-bubble" role="status" aria-live="polite">
                <p key={message}>{message}</p>
                <button
                    type="button"
                    className="mascot-dismiss"
                    onClick={() => setDismissed(true)}
                    aria-label={mascot.dismissLabel}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export { Mascot };
