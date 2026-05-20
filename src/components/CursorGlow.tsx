import { useEffect, useState } from "react";

/**
 * Global mouse-following radial spotlight. Sits above the page but ignores pointer events.
 * Fades out when the cursor leaves the window or the user is on a touch device.
 */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] transition-opacity duration-500 mix-blend-screen"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.18) 0%, hsl(var(--accent) / 0.06) 35%, transparent 70%)",
          transition: "left 0.18s ease-out, top 0.18s ease-out",
        }}
      />
    </div>
  );
};

export default CursorGlow;
