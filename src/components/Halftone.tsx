import { useMemo } from "react";

/**
 * Generative abstract brand artwork: a seeded halftone/dither field with soft
 * geometric shapes. Pure SVG, no images, never a mock product screenshot.
 */

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface HalftoneProps {
  seed: number;
  accent: string;
  alt: string;
  className?: string;
  /** Unique id prefix so multiple instances don't collide on gradient ids. */
  idPrefix: string;
}

export function Halftone({ seed, accent, alt, className, idPrefix }: HalftoneProps) {
  const art = useMemo(() => {
    const rand = mulberry32(seed);
    const cols = 34;
    const rows = 22;
    const dots: { x: number; y: number; r: number; o: number }[] = [];
    // A drifting density wave so the dots read as dithered texture, not a grid.
    const cx = 0.25 + rand() * 0.5;
    const cy = 0.25 + rand() * 0.5;
    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const x = (ix + 0.5) / cols;
        const y = (iy + 0.5) / rows;
        const d = Math.hypot(x - cx, y - cy);
        const density = Math.max(0, 1 - d * 1.7) * (0.75 + rand() * 0.5);
        if (rand() < density) {
          dots.push({
            x: x * 340,
            y: y * 220,
            r: 0.9 + rand() * 2.4 * density,
            o: 0.25 + density * 0.65,
          });
        }
      }
    }
    const shapes = Array.from({ length: 3 }, () => ({
      x: rand() * 300,
      y: rand() * 180,
      r: 26 + rand() * 60,
      o: 0.10 + rand() * 0.14,
      ring: rand() > 0.5,
    }));
    return { dots, shapes };
  }, [seed]);

  return (
    <svg
      viewBox="0 0 340 220"
      className={className}
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`${idPrefix}-wash`} cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="340" height="220" fill={`url(#${idPrefix}-wash)`} />
      {art.shapes.map((s, i) =>
        s.ring ? (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="none"
            stroke={accent}
            strokeWidth={3}
            opacity={s.o + 0.1}
          />
        ) : (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={accent} opacity={s.o} />
        ),
      )}
      {art.dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={accent} opacity={d.o} />
      ))}
    </svg>
  );
}
