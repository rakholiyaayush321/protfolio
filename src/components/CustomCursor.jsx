import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    let rafId;
    const animateRing = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const onMouseEnterInteractive = () => setIsHovered(true);
    const onMouseLeaveInteractive = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .glass-card, label');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999, borderRadius: '50%', width: '8px', height: '8px', background: 'white', transform: 'translate(-50%, -50%)', mixBlendMode: 'difference', transition: 'transform 0.15s ease' }}
      />
      {/* Cursor ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999, borderRadius: '50%', width: isHovered ? '60px' : '40px', height: isHovered ? '60px' : '40px', border: `2px solid ${isHovered ? 'rgba(99,102,241,0.8)' : 'rgba(255,255,255,0.5)'}`, transform: 'translate(-50%, -50%)', transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease', mixBlendMode: 'difference' }}
      />
    </>
  );
}
