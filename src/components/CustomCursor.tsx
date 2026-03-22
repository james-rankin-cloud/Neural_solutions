import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    let raf: number;
    const lerp = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ background: "hsl(270 80% 65%)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border"
        style={{ borderColor: "hsl(270 80% 65% / 0.4)" }}
      />
    </>
  );
};

export default CustomCursor;
