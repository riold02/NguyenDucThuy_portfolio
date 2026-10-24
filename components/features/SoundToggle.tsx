"use client";

import { useSyncExternalStore, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

let audioCtx: AudioContext | null = null;

export function playClick(type: "navigate" | "back" | "hover" = "navigate") {
  if (typeof window === "undefined") return;
  const enabled = localStorage.getItem("sound") !== "off";
  if (!enabled) return;

  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const ctx = audioCtx;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === "navigate") {
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.06);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    } else if (type === "back") {
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(330, now + 0.06);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.10);
    } else {
      osc.frequency.setValueAtTime(550, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    }

    osc.type = "sine";
    osc.start(now);
    osc.stop(now + 0.15);
  } catch {
    // AudioContext may be blocked before user interaction
  }
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return localStorage.getItem("sound") !== "off";
}

function getServerSnapshot() {
  return false;
}

export default function SoundToggle() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !enabled;
    localStorage.setItem("sound", next ? "on" : "off");
    window.dispatchEvent(new Event("storage"));
    if (next) playClick("navigate");
  }, [enabled]);

  return (
    <button
      className="sound-toggle"
      onClick={toggle}
      aria-label={enabled ? "Tắt âm thanh" : "Bật âm thanh"}
      title={enabled ? "Tắt âm thanh" : "Bật âm thanh"}
    >
      {enabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
    </button>
  );
}
