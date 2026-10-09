"use client";

import {
  Component,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Html, useGLTF } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

type SceneName =
  | "hero"
  | "attendance"
  | "students"
  | "faculty"
  | "intelligence"
  | "stats"
  | "security"
  | "cta";

type PhonePose = {
  horizontal: number;
  scale: number;
  vertical?: number;
  rotation: [number, number, number];
};

const SCENE_ORDER: SceneName[] = [
  "hero",
  "attendance",
  "students",
  "faculty",
  "intelligence",
  "stats",
  "security",
  "cta",
];

const SCENE_POSES: Record<SceneName, PhonePose> = {
  hero: { horizontal: 0.22, scale: 1, rotation: [0.08, 0.38, -0.04] },
  attendance: { horizontal: 0.22, scale: 0.98, rotation: [0.04, 0.62, 0.02] },
  students: { horizontal: -0.22, scale: 1, rotation: [0.02, -0.62, -0.06] },
  faculty: { horizontal: -0.22, scale: 0.96, rotation: [0.12, -0.35, 0.06] },
  intelligence: { horizontal: 0.22, scale: 1.02, rotation: [0.06, 0.78, -0.02] },
  stats: { horizontal: 0.22, scale: 0.96, rotation: [0.04, 0.36, -0.02] },
  security: { horizontal: 0.22, scale: 0.98, rotation: [0.08, 0.28, 0.04] },
  cta: { horizontal: 0.22, scale: 1.04, rotation: [0.08, 0.44, -0.03] },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(value: number) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function rotatedFootprint(
  dimensions: THREE.Vector3,
  rotation: PhonePose["rotation"],
) {
  const bounds = new THREE.Box3();
  const euler = new THREE.Euler(...rotation);

  for (const x of [-0.5, 0.5]) {
    for (const y of [-0.5, 0.5]) {
      for (const z of [-0.5, 0.5]) {
        bounds.expandByPoint(
          new THREE.Vector3(
            dimensions.x * x,
            dimensions.y * y,
            dimensions.z * z,
          ).applyEuler(euler),
        );
      }
    }
  }

  return bounds.getSize(new THREE.Vector3());
}

function interpolatePose(progress: number, names: SceneName[]): PhonePose {
  const lastIndex = names.length - 1;
  const fromIndex = Math.min(Math.floor(progress), lastIndex);
  const toIndex = Math.min(fromIndex + 1, lastIndex);
  const amount = smoothstep(progress - fromIndex);
  const from = SCENE_POSES[names[fromIndex]];
  const to = SCENE_POSES[names[toIndex]];
  const crossing =
    from.horizontal * to.horizontal < 0 ? Math.sin(Math.PI * amount) : 0;

  return {
    horizontal: THREE.MathUtils.lerp(from.horizontal, to.horizontal, amount),
    scale:
      THREE.MathUtils.lerp(from.scale, to.scale, amount) * (1 - crossing * 0.4),
    vertical: crossing * 0.85,
    rotation: [
      THREE.MathUtils.lerp(from.rotation[0], to.rotation[0], amount),
      THREE.MathUtils.lerp(from.rotation[1], to.rotation[1], amount),
      THREE.MathUtils.lerp(from.rotation[2], to.rotation[2], amount),
    ],
  };
}

function PhoneModel({
  progress,
  names,
  reducedMotion,
}: {
  progress: { current: number };
  names: { current: SceneName[] };
  reducedMotion: boolean;
}) {
  const { scene } = useGLTF("/iphone3dmodel/scene.gltf");
  const positionGroup = useRef<THREE.Group>(null);
  const rotationGroup = useRef<THREE.Group>(null);
  const modelGroup = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const { size, viewport } = useThree();

  const modelData = useMemo(() => {
    const clone = scene.clone(true);
    clone.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(clone);
    const dimensions = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    clone.position.sub(center);

    const centeredModel = new THREE.Group();
    centeredModel.add(clone);
    centeredModel.scale.setScalar(1 / dimensions.y);

    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return {
      object: centeredModel,
      dimensions: new THREE.Vector3(
        dimensions.x / dimensions.y,
        1,
        dimensions.z / dimensions.y,
      ),
    };
  }, [scene]);

  useFrame((_, delta) => {
    const position = positionGroup.current;
    const rotation = rotationGroup.current;
    const modelTransform = modelGroup.current;
    if (!position || !rotation || !modelTransform || names.current.length === 0) {
      return;
    }

    const isMobile = size.width < 1024;
    const pose = interpolatePose(
      clamp(progress.current, 0, names.current.length - 1),
      names.current,
    );
    const follow = reducedMotion ? 1 : 1 - Math.exp(-delta * 8);
    const targetX =
      (pose.horizontal / 0.22) *
      viewport.width *
      (isMobile ? 0.06 : 0.25);
    const targetY =
      (isMobile ? 0 : (-16 * viewport.height) / size.height) +
      (isMobile ? 0 : (pose.vertical ?? 0));

    elapsed.current += delta;
    const entrance = reducedMotion
      ? 1
      : smoothstep(elapsed.current / 0.65);

    position.position.x = THREE.MathUtils.lerp(
      position.position.x,
      targetX,
      follow,
    );
    position.position.y = THREE.MathUtils.lerp(
      position.position.y,
      targetY,
      follow,
    );
    rotation.rotation.x = THREE.MathUtils.lerp(
      rotation.rotation.x,
      pose.rotation[0],
      follow,
    );
    rotation.rotation.y = THREE.MathUtils.lerp(
      rotation.rotation.y,
      pose.rotation[1],
      follow,
    );
    rotation.rotation.z = THREE.MathUtils.lerp(
      rotation.rotation.z,
      pose.rotation[2],
      follow,
    );
    const footprint = rotatedFootprint(modelData.dimensions, [
      rotation.rotation.x,
      rotation.rotation.y,
      rotation.rotation.z,
    ]);
    const targetCenterY =
      size.height / 2 -
      (position.position.y * size.height) / viewport.height;
    const verticalMargin = isMobile ? size.height * 0.06 : 64;
    const bottomMargin = isMobile ? size.height * 0.06 : 32;
    const safeHeight =
      (2 *
        Math.max(
          0,
          Math.min(
            targetCenterY - verticalMargin,
            size.height - bottomMargin - targetCenterY,
          ),
        ) *
        viewport.height) /
      size.height;
    const safeWidth = viewport.width * (isMobile ? 0.8 : 0.34);
    const desiredScale = (isMobile ? 1.95 : 2.35) * pose.scale;
    const targetScale = Math.min(
      desiredScale,
      (safeHeight / footprint.y) * 0.94,
      (safeWidth / footprint.x) * 0.94,
    );
    modelTransform.scale.setScalar(
      targetScale * (reducedMotion ? 1 : entrance),
    );
  });

  return (
    <group ref={positionGroup}>
      <ContactShadows
        position={[0, -1.13, 0]}
        opacity={0.2}
        scale={2.3}
        blur={2.4}
        far={2.8}
        resolution={512}
      />
      <group ref={rotationGroup}>
        <group ref={modelGroup}>
          <primitive object={modelData.object} />
        </group>
      </group>
    </group>
  );
}

class ModelErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unable to load the Venthen iPhone model.", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <p className="rounded-full border border-[#dce9e2] bg-white/90 px-4 py-2 text-xs font-medium text-[#6b7f7e] shadow-lg">
            3D preview unavailable
          </p>
        </Html>
      );
    }

    return this.props.children;
  }
}

export function IPhoneScene() {
  const stage = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const names = useRef<SceneName[]>(SCENE_ORDER);
  const anchors = useRef<number[]>([]);
  const sectionEnds = useRef<number[]>([]);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const markers = SCENE_ORDER.map((name) => ({
      name,
      element: document.querySelector<HTMLElement>(
        `[data-phone-scene="${name}"]`,
      ),
    })).filter(
      (marker): marker is { name: SceneName; element: HTMLElement } =>
        marker.element !== null,
    );

    if (markers.length === 0) return;

    names.current = markers.map((marker) => marker.name);

    const measureAnchors = () => {
      anchors.current = markers.map(({ element }) => {
        const scrollY = window.scrollY;
        const currentTop = element.getBoundingClientRect().top + scrollY;
        return currentTop;
      });
      sectionEnds.current = markers.map(
        ({ element }) =>
          element.getBoundingClientRect().bottom + window.scrollY,
      );
    };

    const updateProgress = () => {
      if (stage.current) {
        if (window.innerWidth >= 1024) {
          stage.current.style.opacity = "1";
        } else {
          const viewportHeight = window.innerHeight;
          const hero = markers.find((marker) => marker.name === "hero");
          const heroRect = hero?.element.getBoundingClientRect();
          const heroIsVisible =
            heroRect !== undefined &&
            heroRect.bottom > 0 &&
            heroRect.top < viewportHeight;

          if (heroIsVisible) {
            stage.current.style.opacity = String(
              clamp(1 - window.scrollY / (viewportHeight * 0.55), 0, 1),
            );
          } else {
            const stageRect = stage.current.getBoundingClientRect();
            const visibleFeature = markers.find(({ name, element }) => {
              if (name === "hero") return false;
              const rect = element.getBoundingClientRect();
              return rect.bottom > 0 && rect.top < viewportHeight;
            });
            const content = visibleFeature
              ? Array.from(visibleFeature.element.children).find(
                  (child) => getComputedStyle(child).position !== "absolute",
                )
              : null;
            const contentRect = content?.getBoundingClientRect();
            const contentOverlapsStage =
              contentRect !== undefined &&
              contentRect.bottom > stageRect.top &&
              contentRect.top < stageRect.bottom;
            stage.current.style.opacity =
              visibleFeature && !contentOverlapsStage ? "1" : "0";
          }
        }
      }

      const positions = anchors.current;
      const ends = sectionEnds.current;
      if (positions.length === 0 || ends.length === 0) return;

      const scrollY = window.scrollY;
      if (scrollY <= ends[0]) {
        progress.current = 0;
        return;
      }

      const last = positions.length - 1;
      for (let segment = 0; segment < last; segment += 1) {
        if (scrollY <= ends[segment]) {
          progress.current = segment;
          return;
        }

        if (scrollY < positions[segment + 1]) {
          const gap = Math.max(1, positions[segment + 1] - ends[segment]);
          progress.current =
            segment + clamp((scrollY - ends[segment]) / gap, 0, 1);
          return;
        }
      }
      progress.current = last;
    };

    let frame = 0;
    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateProgress();
      });
    };

    const refresh = () => {
      measureAnchors();
      scheduleUpdate();
    };

    const resizeObserver = new ResizeObserver(refresh);
    const main = document.querySelector("main");
    if (main) resizeObserver.observe(main);

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", refresh);
    refresh();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", refresh);
      resizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={stage}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-16 z-[3] h-[34svh] transition-opacity duration-200 lg:inset-0 lg:h-[100svh]"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 34 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        fallback={
          <div className="flex h-full items-center justify-center text-xs text-[#6b7f7e]">
            3D preview unavailable
          </div>
        }
      >
        <ambientLight intensity={1.15} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} />
        <directionalLight position={[-4, 1, -3]} intensity={0.65} />
        <Environment preset="studio" />
        <ModelErrorBoundary>
          <Suspense
            fallback={
              <Html center>
                <p className="rounded-full border border-[#dce9e2] bg-white/90 px-4 py-2 text-xs font-medium text-[#6b7f7e] shadow-lg">
                  Preparing the 3D preview
                </p>
              </Html>
            }
          >
            <PhoneModel
              progress={progress}
              names={names}
              reducedMotion={prefersReducedMotion}
            />
          </Suspense>
        </ModelErrorBoundary>
      </Canvas>
    </div>
  );
}
