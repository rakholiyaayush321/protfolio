import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const el = progressRef.current;
      if (!el) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
      el.style.width = `${Math.min(progress, 100)}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] h-[3px] bg-transparent">
      <div
        ref={progressRef}
        className="h-full rounded-r-full transition-[width] duration-100"
        style={{
          background: 'linear-gradient(90deg, #6366f1, #a78bfa, #38bdf8)',
          boxShadow: '0 0 10px rgba(99,102,241,0.7), 0 0 20px rgba(99,102,241,0.3)',
          width: '0%',
        }}
      />
    </div>
  );
}
