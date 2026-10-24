"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { DiscordIcon } from "@/components/features/PlatformIcons";
import { siteConfig } from "@/lib/config";
import { playClick } from "@/components/features/SoundToggle";

export default function DiscordPresenceBadge() {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    playClick();
    navigator.clipboard.writeText(siteConfig.discordUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      style={{
        background: "rgba(17, 18, 24, 0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(88, 101, 242, 0.25)",
        borderRadius: "14px",
        padding: "12px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Left: Avatar + Identity */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
        {/* Avatar with Online indicator */}
        <div
          style={{
            position: "relative",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(88, 101, 242, 0.5)",
              boxShadow: "0 0 12px rgba(88, 101, 242, 0.3)",
              background: "#111218",
            }}
          >
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.displayName}
              width={44}
              height={44}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Status dot */}
          <span
            style={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#23a55a",
              border: "2.5px solid #111218",
              boxShadow: "0 0 8px #23a55a",
              zIndex: 2,
            }}
            title="Trạng thái: Online"
          />
        </div>

        {/* Text Info */}
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#f2f3f5",
                letterSpacing: "-0.01em",
              }}
            >
              {siteConfig.discordUsername}
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                padding: "2px 8px",
                borderRadius: "6px",
                background: "rgba(88, 101, 242, 0.18)",
                color: "#94b4ff",
                fontWeight: 700,
                border: "1px solid rgba(88, 101, 242, 0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <DiscordIcon size={12} />
              <span>Discord Handle</span>
            </span>
          </div>

          <p
            style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              marginTop: "2px",
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Sẵn sàng nhận tin nhắn & trao đổi dự án
          </p>
        </div>
      </div>

      {/* Right: Only single clean Copy Handle button */}
      <button
        onClick={handleCopyDiscord}
        title="Sao chép Discord handle để kết bạn hoặc nhắn tin"
        style={{
          background: copied ? "rgba(35, 165, 90, 0.2)" : "rgba(88, 101, 242, 0.15)",
          border: copied
            ? "1px solid rgba(35, 165, 90, 0.45)"
            : "1px solid rgba(88, 101, 242, 0.35)",
          color: copied ? "#23a55a" : "#c5d1ff",
          borderRadius: "8px",
          padding: "7px 14px",
          fontSize: "0.82rem",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
          flexShrink: 0,
          transition: "all 0.2s ease",
        }}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        <span>{copied ? "Đã chép!" : "Copy Handle"}</span>
      </button>
    </div>
  );
}
