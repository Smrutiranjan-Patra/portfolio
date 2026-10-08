import React from "react";
import "./css/route.css";

/**
 * The rail is a single continuous line behind every section. It is drawn once,
 * in <main>, and positioned to land exactly on the left edge of the shared
 * section container, so every marker in every section can sit on it by
 * offsetting itself by --route-indent.
 */
const RouteRail = () => (
    <div className="route-rail" aria-hidden="true">
        <span className="route-rail-cap route-rail-start" />
        <span className="route-rail-line" />
        <span className="route-rail-progress" data-route-progress="" />
        <span className="route-rail-cap route-rail-end" />
    </div>
);

/**
 * A signposted stop on the road. Replaces the plain eyebrow at the top of each
 * section: a marker that sits on the rail, plus the mile number and label.
 */
const RouteStop = ({ mile, label }) => (
    <p className="route-stop">
        <span className="route-stop-marker" aria-hidden="true" />
        <span className="route-stop-mile">Mile {mile}</span>
        <span className="route-stop-label">{label}</span>
    </p>
);

export { RouteRail, RouteStop };
