"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800, // The width of the globe canvas in pixels.
  height: 800, // The height of the globe canvas in pixels.
  onRender: () => {}, // A callback function that is called on each render frame.
  devicePixelRatio: 2, // The device pixel ratio for high-resolution displays.
  phi: 0.75, // The initial rotation angle around the vertical axis (longitude).
  theta: 0.3, // The initial rotation angle around the horizontal axis (latitude).
  dark: 0, // The darkness level of the globe, where 0 is fully lit and 1 is completely dark.
  diffuse: 0, // The diffuse lighting intensity on the globe's surface.
  mapSamples: 40000, // The number of samples used for the globe's texture mapping.
  mapBrightness: 5, // The brightness level of the globe's map texture.
  baseColor: [0.294, 0.3, 0.51], // The base color of the globe in RGB format (values between 0 and 1).
  markerColor: [1, 0.8, 0.2], // The color of the markers on the globe in RGB format (values between 0 and 1).
  glowColor: [1, 1, 1], // The color of the glow effect around the globe in RGB format (values between 0 and 1).
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 }, // Marker at Manila, Philippines with a size of 0.03.
    { location: [19.076, 72.8777], size: 0.1 }, // Marker at Mumbai, India with a size of 0.1.
    { location: [23.8103, 90.4125], size: 0.05 }, // Marker at Dhaka, Bangladesh with a size of 0.05.
    { location: [30.0444, 31.2357], size: 0.07 }, // Marker at Cairo, Egypt with a size of 0.07.
    { location: [39.9042, 116.4074], size: 0.08 }, // Marker at Beijing, China with a size of 0.08.
    { location: [-23.5505, -46.6333], size: 0.1 }, // Marker at São Paulo, Brazil with a size of 0.1.
    { location: [19.4326, -99.1332], size: 0.1 }, // Marker at Mexico City, Mexico with a size of 0.1.
    { location: [40.7128, -74.006], size: 0.1 }, // Marker at New York City, USA with a size of 0.1.
    { location: [34.6937, 135.5022], size: 0.05 }, // Marker at Osaka, Japan with a size of 0.05.
    { location: [41.0082, 28.9784], size: 0.06 }, // Marker at Istanbul, Turkey with a size of 0.06.
    // Marker at Oklahoma City, Oklahoma, USA with a size of 0.1.
    { location: [35.4676, -97.5164], size: 0.1 },
  ],
};

export default function Globe({
  className,
  config = {},
}: {
  className?: string;
  config?: Partial<COBEOptions>;
}) {
  const mergedConfig = useMemo(
    () => ({ ...GLOBE_CONFIG, ...config }),
    [config]
  );
  const phiRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const widthRef = useRef(0);

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  const onRender = useCallback(
    (state: Record<string, unknown>) => {
      if (!pointerInteracting.current) phiRef.current += 0.005;
      state.phi = phiRef.current + r;
      state.width = widthRef.current * 2;
      state.height = widthRef.current * 2;
    },
    [r]
  );

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...mergedConfig,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [mergedConfig, onResize, onRender]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
