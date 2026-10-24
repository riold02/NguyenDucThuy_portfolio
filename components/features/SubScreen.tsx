"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { playClick } from "@/components/features/SoundToggle";
import { useEffect, useRef } from "react";

interface SubScreenProps {
  title: string;
  children: React.ReactNode;
  backHref?: string;
}

const variants = {
  enter: {
    x: "100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.22,
      ease: [0.7, 0, 0.84, 0] as const,
    },
  },
};

export default function SubScreen({ title, children, backHref = "/" }: SubScreenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const startXRef = useRef<number | null>(null);

  function handleBack() {
    playClick("back");
    router.push(backHref);
  }

  // Swipe to go back (mobile)
  useEffect(() => {
    const el = document.querySelector(".subscreen-card");
    if (!el) return;

    const onTouchStart = (e: Event) => {
      const te = e as TouchEvent;
      startXRef.current = te.touches[0].clientX;
    };
    const onTouchEnd = (e: Event) => {
      const te = e as TouchEvent;
      if (startXRef.current === null) return;
      const dx = te.changedTouches[0].clientX - startXRef.current;
      if (dx > 60) handleBack();
      startXRef.current = null;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="subscreen-backdrop"
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        exit={{ backgroundColor: "rgba(0,0,0,0)" }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="subscreen-card"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Header */}
          <div className="subscreen-header">
            <button
              className="back-btn"
              onClick={handleBack}
              aria-label="Quay lại trang chính"
            >
              <ChevronLeft size={18} />
              <span>Quay lại</span>
            </button>
            <h1 className="subscreen-title">{title}</h1>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
