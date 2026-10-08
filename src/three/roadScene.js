import * as THREE from "three";

/**
 * A procedural road built from a spline. Scroll position drives the camera
 * along the curve, so the page itself becomes the drive.
 *
 * Everything here is generated in code — there are no model or texture assets
 * to download beyond the three.js runtime.
 */

const PALETTES = {
    light: {
        bg: 0xf0ece1,
        fog: 0xf0ece1,
        ground: 0xdcd8c8,
        groundFar: 0xc9c5b2,
        road: 0x4a4f4a,
        roadEdge: 0xe9e5d8,
        dash: 0xf2efe4,
        accent: 0x327a47,
        accent2: 0xc95d35,
        scenery: 0x3f7a52,
        sky: 0xf7f5ef,
        light: 0xffffff,
        lightIntensity: 2.0,
        ambient: 0.85,
    },
    dark: {
        bg: 0x0c1110,
        fog: 0x0c1110,
        // Lifted from near-black: at the original values the road, verges and
        // hills were all within a few points of the fog and the scene read as
        // an empty black frame on the opening stretch.
        ground: 0x1b241f,
        groundFar: 0x121917,
        road: 0x2c3339,
        roadEdge: 0x3d4840,
        dash: 0xc3d6bd,
        accent: 0x7fd069,
        accent2: 0xff8a5b,
        scenery: 0x24412e,
        sky: 0x16201c,
        light: 0xd8f0db,
        lightIntensity: 1.9,
        ambient: 0.82,
    },
};

const ROAD_HALF_WIDTH = 4.2;
const CURVE_DIVISIONS = 700;

/** Waypoints: a long road that meanders laterally and rolls gently. */
const buildCurve = () => {
    const points = [];
    const legs = 14;
    for (let i = 0; i <= legs; i += 1) {
        const t = i / legs;
        points.push(
            new THREE.Vector3(
                Math.sin(t * Math.PI * 1.6) * 24 + Math.sin(t * Math.PI * 3.1) * 6,
                Math.sin(t * Math.PI * 1.3) * 3.4,
                -t * 1250
            )
        );
    }
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
};

/** Flat road ribbon: sample the curve and extrude sideways around world-up. */
const buildRoadGeometry = (curve, halfWidth, divisions) => {
    const positions = [];
    const uvs = [];
    const indices = [];
    const up = new THREE.Vector3(0, 1, 0);
    const side = new THREE.Vector3();

    for (let i = 0; i <= divisions; i += 1) {
        const t = i / divisions;
        const point = curve.getPointAt(t);
        const tangent = curve.getTangentAt(t);
        // Cross with world-up (not the Frenet normal) so the road never banks.
        side.crossVectors(tangent, up).normalize().multiplyScalar(halfWidth);

        positions.push(point.x - side.x, point.y - side.y, point.z - side.z);
        positions.push(point.x + side.x, point.y + side.y, point.z + side.z);
        uvs.push(0, t * 120, 1, t * 120);

        if (i < divisions) {
            const a = i * 2;
            indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
};

export function createRoadScene(canvas, options = {}) {
    const { theme = "light", lowPower = false } = options;

    let palette = PALETTES[theme] || PALETTES.light;
    const disposables = [];
    const track = (resource) => {
        disposables.push(resource);
        return resource;
    };

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !lowPower,
        alpha: false,
        powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.75));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(palette.bg);
    scene.fog = new THREE.Fog(palette.fog, 90, 430);

    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 900);

    // --- lights -------------------------------------------------------------
    const hemi = new THREE.HemisphereLight(palette.sky, palette.ground, palette.ambient);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(palette.light, palette.lightIntensity);
    sun.position.set(-60, 90, -40);
    scene.add(sun);

    // --- ground -------------------------------------------------------------
    const groundGeo = track(new THREE.PlaneGeometry(1400, 2400, 60, 90));
    const groundPos = groundGeo.attributes.position;
    for (let i = 0; i < groundPos.count; i += 1) {
        const x = groundPos.getX(i);
        const y = groundPos.getY(i);
        // Gentle rolling hills, pushed down near the middle so the road sits in
        // a shallow valley rather than floating over bumps.
        const distanceFromRoad = Math.min(Math.abs(x) / 70, 1);
        const hill = Math.sin(x * 0.012) * Math.cos(y * 0.009) * 16 + Math.sin(y * 0.021) * 6;
        groundPos.setZ(i, hill * distanceFromRoad);
    }
    groundGeo.computeVertexNormals();
    const groundMat = track(new THREE.MeshStandardMaterial({
        color: palette.ground,
        roughness: 1,
        metalness: 0,
        flatShading: true,
    }));
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    ground.position.z = -560;
    scene.add(ground);

    // --- road ---------------------------------------------------------------
    const curve = buildCurve();
    const divisions = lowPower ? 360 : CURVE_DIVISIONS;

    const roadGeo = track(buildRoadGeometry(curve, ROAD_HALF_WIDTH, divisions));
    const roadMat = track(new THREE.MeshStandardMaterial({
        color: palette.road,
        roughness: 0.92,
        metalness: 0.02,
    }));
    scene.add(new THREE.Mesh(roadGeo, roadMat));

    // Shoulders, slightly wider and just beneath the surface.
    const shoulderGeo = track(buildRoadGeometry(curve, ROAD_HALF_WIDTH + 0.9, divisions));
    const shoulderMat = track(new THREE.MeshStandardMaterial({
        color: palette.roadEdge,
        roughness: 1,
    }));
    const shoulder = new THREE.Mesh(shoulderGeo, shoulderMat);
    shoulder.position.y = -0.06;
    scene.add(shoulder);

    // --- centre line --------------------------------------------------------
    const dashCount = lowPower ? 150 : 300;
    const dashGeo = track(new THREE.PlaneGeometry(0.42, 4.4));
    const dashMat = track(new THREE.MeshBasicMaterial({
        color: palette.dash,
        transparent: true,
        opacity: 0.82,
    }));
    const dashes = new THREE.InstancedMesh(dashGeo, dashMat, dashCount);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < dashCount; i += 1) {
        const t = (i + 0.5) / dashCount;
        const point = curve.getPointAt(t);
        const tangent = curve.getTangentAt(t);
        dummy.position.set(point.x, point.y + 0.02, point.z);
        dummy.rotation.set(-Math.PI / 2, 0, -Math.atan2(tangent.x, -tangent.z));
        dummy.updateMatrix();
        dashes.setMatrixAt(i, dummy.matrix);
    }
    dashes.instanceMatrix.needsUpdate = true;
    scene.add(dashes);
    track(dashes);

    // --- roadside scenery ---------------------------------------------------
    const treeCount = lowPower ? 90 : 220;
    const treeGeo = track(new THREE.ConeGeometry(2.6, 11, 6));
    const treeMat = track(new THREE.MeshStandardMaterial({
        color: palette.scenery,
        roughness: 1,
        flatShading: true,
    }));
    const trees = new THREE.InstancedMesh(treeGeo, treeMat, treeCount);
    const sideVec = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < treeCount; i += 1) {
        const t = Math.random();
        const point = curve.getPointAt(t);
        const tangent = curve.getTangentAt(t);
        sideVec.crossVectors(tangent, up).normalize();
        const offset = (ROAD_HALF_WIDTH + 6 + Math.random() * 52) * (Math.random() < 0.5 ? -1 : 1);
        const scale = 0.55 + Math.random() * 1.1;
        dummy.position.set(
            point.x + sideVec.x * offset,
            point.y - 1 + scale * 3.2,
            point.z + sideVec.z * offset
        );
        dummy.rotation.set(0, Math.random() * Math.PI, 0);
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        trees.setMatrixAt(i, dummy.matrix);
    }
    trees.instanceMatrix.needsUpdate = true;
    dummy.scale.setScalar(1);
    scene.add(trees);
    track(trees);

    // --- camera drive -------------------------------------------------------
    let targetProgress = 0;
    let currentProgress = 0;
    let frame = 0;
    let running = true;
    const lookPoint = new THREE.Vector3();
    const camPoint = new THREE.Vector3();

    const resize = () => {
        const width = canvas.clientWidth || window.innerWidth;
        const height = canvas.clientHeight || window.innerHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
    };

    const render = () => {
        if (!running) {
            return;
        }
        frame = requestAnimationFrame(render);

        // Ease toward the scroll target so flicks feel like momentum, not teleports.
        currentProgress += (targetProgress - currentProgress) * 0.075;

        const t = Math.min(Math.max(currentProgress, 0), 1) * 0.88;
        curve.getPointAt(t, camPoint);
        curve.getPointAt(Math.min(t + 0.03, 1), lookPoint);

        const drift = Math.sin(currentProgress * 18) * 0.5;
        camera.position.set(camPoint.x + drift, camPoint.y + 6.2, camPoint.z);
        camera.lookAt(lookPoint.x, lookPoint.y + 1.2, lookPoint.z);

        renderer.render(scene, camera);
    };

    resize();
    frame = requestAnimationFrame(render);

    return {
        setProgress(value) {
            targetProgress = value;
        },
        setTheme(nextTheme) {
            palette = PALETTES[nextTheme] || PALETTES.light;
            scene.background.setHex(palette.bg);
            scene.fog.color.setHex(palette.fog);
            groundMat.color.setHex(palette.ground);
            roadMat.color.setHex(palette.road);
            shoulderMat.color.setHex(palette.roadEdge);
            dashMat.color.setHex(palette.dash);
            treeMat.color.setHex(palette.scenery);
            hemi.color.setHex(palette.sky);
            hemi.groundColor.setHex(palette.ground);
            hemi.intensity = palette.ambient;
            sun.color.setHex(palette.light);
            sun.intensity = palette.lightIntensity;
        },
        resize,
        dispose() {
            running = false;
            cancelAnimationFrame(frame);
            disposables.forEach((resource) => {
                if (resource && typeof resource.dispose === "function") {
                    resource.dispose();
                }
            });
            renderer.dispose();
        },
    };
}
