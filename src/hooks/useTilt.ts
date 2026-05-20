import { useEffect, useRef } from "react";

/**
 * Adds a 3D tilt effect to a card based on cursor position over it.
 */
export const useTilt = <T extends HTMLElement>(max = 8) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-6px)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
    };

    el.style.transition = "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transformStyle = "preserve-3d";
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return ref;
};
