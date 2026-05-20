import { useEffect, useRef } from "react";

/**
 * Magnetic hover effect: target element subtly follows the cursor while hovered.
 * Strength is the max pixel displacement at the edge of the bounding box.
 */
export const useMagnetic = <T extends HTMLElement>(strength = 18) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0,0)";
    };

    el.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
};
