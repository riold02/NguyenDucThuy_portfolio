"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import * as Popover from "@radix-ui/react-popover";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  Copy,
  Check,
  Code2,
  Sparkles,
  Send,
  Terminal,
  Layers,
  MessageSquare,
  User,
  Briefcase,
  ExternalLink,
} from "lucide-react";

import { siteConfig } from "@/lib/config";
import { badges, skills } from "@/lib/skills";
import { projects } from "@/lib/projects";
import { playClick } from "@/components/features/SoundToggle";
import BannerSVG from "@/components/features/BannerSVG";
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  GitIcon,
  ApiIcon,
  VSCodeIcon,
  DiscordIcon,
  getPlatformIcon,
} from "@/components/features/PlatformIcons";

type TabId = "overview" | "projects" | "skills" | "contact";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Overview", icon: <User size={15} /> },
  { id: "projects", label: "Projects", icon: <Layers size={15} /> },
  { id: "skills", label: "Skills", icon: <Terminal size={15} /> },
  { id: "contact", label: "Message", icon: <MessageSquare size={15} /> },
];

const BADGE_ICONS: Record<string, React.ReactNode> = {
  nextjs: <NextjsIcon size={22} />,
  typescript: <TypeScriptIcon size={22} />,
  react: <ReactIcon size={22} />,
  tailwind: <TailwindIcon size={22} />,
  git: <GitIcon size={22} />,
  api: <ApiIcon size={22} />,
};

export default function ProfileCard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [clickCount, setClickCount] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const [activityTime, setActivityTime] = useState("02:45:18");
  const [contactName, setContactName] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3D Motion Physics on Mouse Hover
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springX = useSpring(mouseX, { stiffness: 220, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);
  const glareX = useTransform(springX, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["10%", "90%"]);

  const handleCardMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    },
    [mouseX, mouseY]
  );

  const handleCardMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Live timer for Discord rich presence
  useEffect(() => {
    let seconds = 9918;
    const interval = setInterval(() => {
      seconds++;
      const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      setActivityTime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAvatarClick = useCallback(() => {
    const next = clickCount + 1;
    setClickCount(next);
    playClick("hover");
    if (next >= 5) {
      setEasterEgg(true);
      setClickCount(0);
      setTimeout(() => setEasterEgg(false), 4500);
    }
  }, [clickCount]);

  const copyDiscordId = useCallback(() => {
    navigator.clipboard?.writeText(siteConfig.discordUsername);
    setCopiedDiscord(true);
    playClick("hover");
    setTimeout(() => setCopiedDiscord(false), 2000);
  }, []);

  const handleTabChange = useCallback((id: TabId) => {
    playClick("navigate");
    setActiveTab(id);
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMsg.trim()) return;
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName.trim() || "Anonymous",
          email: "guest@profile.dev",
          message: contactMsg.trim(),
          website: "",
        }),
      });
      setMsgSent(true);
      setContactMsg("");
      playClick("navigate");
    } catch {
      // Fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Tooltip.Provider delayDuration={200}>
      <div style={{ perspective: 1200, padding: "10px 0" }}>
        <motion.div
          ref={cardRef}
          className="profile-card-outer"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            willChange: "transform",
            position: "relative",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 25 }}
        >
          {/* Dynamic 3D Holographic Glare Layer */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: 30,
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle 380px at ${gx} ${gy}, rgba(255, 255, 255, 0.08), transparent 70%)`
              ),
            }}
          />

          {/* ─── BANNER (3D Layer Z: 15px) ─── */}
          <div
            className="banner-wrap"
            style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
          >
            <BannerSVG mouseX={0.5} mouseY={0.5} />
          </div>

          {/* ─── AVATAR & STATUS ROW (3D Layer Z: 45px) ─── */}
          <div
            className="avatar-zone"
            style={{
              transform: "translateZ(45px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="avatar-ring" style={{ position: "relative" }}>
              {/* Animated 3D Conic Glow Ring on Avatar */}
              <div
                style={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  background: easterEgg
                    ? "conic-gradient(from 0deg, #ff007f, #00f5ff, #7928ca, #ff007f)"
                    : "conic-gradient(from 0deg, #5865F2, #00e5ff, #9333ea, #5865F2)",
                  animation: "spin 3s linear infinite",
                  zIndex: 0,
                  opacity: 0.95,
                  boxShadow: "0 0 20px rgba(88, 101, 242, 0.5)",
                }}
              />

              <motion.button
                onClick={handleAvatarClick}
                aria-label={`Ảnh đại diện của ${siteConfig.displayName}`}
                whileTap={{ scale: 0.93 }}
                whileHover={{ scale: 1.04 }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <div
                  className="avatar-img"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={siteConfig.avatar}
                    alt={siteConfig.displayName}
                    width={88}
                    height={88}
                    priority
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      display: "block",
                    }}
                  />

                </div>
              </motion.button>

              {/* Status Indicator with Popover */}
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button
                    className={`status-dot ${siteConfig.status}`}
                    aria-label="Xem trạng thái"
                  />
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    className="status-popover"
                    side="right"
                    align="start"
                    sideOffset={8}
                  >
                    <div className="status-popover-title">Trạng thái hiện tại</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "var(--color-online)",
                          boxShadow: "0 0 8px var(--color-online)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {siteConfig.statusLabel}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {siteConfig.statusDetail}
                    </p>
                    <Popover.Arrow style={{ fill: "var(--color-bg-overlay)" }} />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>

            {/* Quick External Links / Discord Badge Button */}
            <div
              style={{
                display: "flex",
                gap: 8,
                paddingBottom: 6,
                transform: "translateZ(30px)",
              }}
            >
              {/* Discord ID Copy Button */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button
                    onClick={copyDiscordId}
                    className="pill"
                    style={{
                      background: "rgba(88, 101, 242, 0.2)",
                      border: "1px solid #5865F2",
                      color: "#fff",
                      cursor: "pointer",
                      padding: "6px 12px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    aria-label="Copy Discord handle"
                  >
                    <DiscordIcon size={15} />
                    <span>{siteConfig.discordUsername}</span>
                    {copiedDiscord ? (
                      <Check size={13} style={{ color: "var(--color-online)" }} />
                    ) : (
                      <Copy size={12} opacity={0.7} />
                    )}
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Content
                  style={{
                    background: "var(--color-bg-overlay)",
                    color: "#fff",
                    padding: "6px 10px",
                    borderRadius: 6,
                    fontSize: "0.75rem",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {copiedDiscord ? "Đã copy Discord handle!" : "Click để copy Discord ID"}
                  <Tooltip.Arrow style={{ fill: "var(--color-bg-overlay)" }} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* GitHub Button */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill pill-accent"
                    style={{ textDecoration: "none", padding: "6px 12px" }}
                    aria-label="Mở GitHub profile"
                  >
                    <Code2 size={14} />
                    <span>GitHub</span>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content
                  style={{
                    background: "var(--color-bg-overlay)",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: 6,
                    fontSize: "0.75rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  }}
                >
                  github.com/riold02
                  <Tooltip.Arrow style={{ fill: "var(--color-bg-overlay)" }} />
                </Tooltip.Content>
              </Tooltip.Root>
            </div>
          </div>

          {/* Easter Egg Toast */}
          <AnimatePresence>
            {easterEgg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  margin: "10px 24px 0",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-md)",
                  background:
                    "linear-gradient(135deg, rgba(88,101,242,0.25), rgba(0,229,255,0.25))",
                  border: "1px solid rgba(0,229,255,0.4)",
                  fontSize: "0.8rem",
                  color: "#00e5ff",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Sparkles size={16} />
                <span>3D Cyber Mode Active: WebGL Engine & 3D Tilt enabled!</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── USER IDENTITY (3D Layer Z: 35px) ─── */}
          <div
            className="profile-info"
            style={{
              transform: "translateZ(35px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="profile-name-row">
              <h1 className="profile-name">{siteConfig.displayName}</h1>
              {/* Discord Verified Developer Hexagon Badge */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#5865F2",
                      color: "#fff",
                      boxShadow: "0 0 12px rgba(88, 101, 242, 0.7)",
                      cursor: "pointer",
                    }}
                    aria-label="Verified Developer"
                  >
                    <Sparkles size={12} />
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Content
                  style={{
                    background: "var(--color-bg-overlay)",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: 6,
                    fontSize: "0.75rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  }}
                >
                  Verified Freelance Developer
                  <Tooltip.Arrow style={{ fill: "var(--color-bg-overlay)" }} />
                </Tooltip.Content>
              </Tooltip.Root>
            </div>

            {/* Handle & Discord Tag */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                @{siteConfig.handle}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  borderRadius: 4,
                  background: "rgba(88, 101, 242, 0.15)",
                  color: "#5865F2",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <DiscordIcon size={12} />
                {siteConfig.discordUsername}
              </span>
            </div>

            {/* Role Pills */}
            <div className="profile-tags">
              {siteConfig.tags.map((tag) => (
                <span key={tag.label} className={`pill pill-${tag.variant}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* ─── CUSTOM STATUS BUBBLE (3D Layer Z: 25px) ─── */}
          <div
            className="thought-bubble"
            role="note"
            style={{ transform: "translateZ(25px)" }}
          >
            <span style={{ fontSize: "1rem" }}>⚡</span>
            <span>{siteConfig.bio}</span>
          </div>

          {/* ─── DISCORD RICH PRESENCE (Visual Studio Code Activity - 3D Layer Z: 40px) ─── */}
          <div
            className="activity-card"
            role="region"
            aria-label="Hoạt động hiện tại"
            style={{
              transform: "translateZ(40px)",
              transformStyle: "preserve-3d",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              className="activity-icon-wrap"
              style={{
                background: "rgba(0, 122, 204, 0.14)",
                boxShadow: "0 0 14px rgba(0, 122, 204, 0.3)",
              }}
            >
              <VSCodeIcon size={26} />
            </div>
            <div className="activity-details">
              <div className="activity-header">ĐANG LẬP TRÌNH</div>
              <div className="activity-title">Visual Studio Code</div>
              <div className="activity-sub">Xây dựng ứng dụng Web 3D & Next.js 16</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 4,
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <div className="equalizer">
                  <span className="equalizer-bar" />
                  <span className="equalizer-bar" />
                  <span className="equalizer-bar" />
                  <span className="equalizer-bar" />
                </div>
                <span>{activityTime} đã trôi qua</span>
              </div>
            </div>
          </div>

          {/* ─── DISCORD NAVIGATION TABS (3D Layer Z: 30px) ─── */}
          <div
            className="tab-bar"
            role="tablist"
            style={{ transform: "translateZ(30px)" }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="tab-active-indicator"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ─── TAB CONTENT PANELS (3D Layer Z: 20px) ─── */}
          <div
            style={{
              padding: "16px 24px 32px",
              minHeight: 280,
              transform: "translateZ(20px)",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="wait">
              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  {/* Freelancer Offer Card */}
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "var(--radius-lg)",
                      background:
                        "linear-gradient(135deg, rgba(88, 101, 242, 0.16) 0%, rgba(30, 31, 41, 0.85) 100%)",
                      border: "1px solid rgba(88, 101, 242, 0.35)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--color-accent)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <Briefcase size={14} /> DỊCH VỤ FREELANCE
                      </span>
                      <span
                        className="pill"
                        style={{
                          background: "rgba(35, 165, 90, 0.2)",
                          color: "#23a55a",
                          fontSize: "0.68rem",
                          border: "1px solid rgba(35, 165, 90, 0.4)",
                        }}
                      >
                        ● Đang nhận dự án
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                        margin: "0 0 12px",
                      }}
                    >
                      Nhận phát triển <strong>Fullstack Web, Interactive 3D Landing Page</strong> và tối ưu UI/UX mượt mà trên Next.js & React.
                      Cam kết chất lượng mã nguồn sạch, tốc độ tải trang nhanh và hỗ trợ bàn giao tận tâm.
                    </p>

                    <button
                      onClick={() => handleTabChange("contact")}
                      className="pill pill-accent"
                      style={{
                        padding: "8px 16px",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        border: "none",
                        background: "var(--color-accent)",
                        color: "#fff",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span>Gửi yêu cầu dự án ngay</span>
                      <ExternalLink size={13} />
                    </button>
                  </div>

                  {/* Tech Badges with Official Vector SVGs */}
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--color-text-muted)",
                        marginBottom: 10,
                      }}
                    >
                      Huy hiệu công nghệ chính
                    </div>
                    <div className="badge-row" style={{ padding: 0 }}>
                      {badges.map((badge) => (
                        <Tooltip.Root key={badge.id}>
                          <Tooltip.Trigger asChild>
                            <div className="badge-item" role="listitem">
                              {BADGE_ICONS[badge.id] || getPlatformIcon(badge.label, 20)}
                            </div>
                          </Tooltip.Trigger>
                          <Tooltip.Content
                            style={{
                              background: "var(--color-bg-overlay)",
                              color: "var(--color-text-primary)",
                              padding: "8px 12px",
                              borderRadius: "var(--radius-md)",
                              fontSize: "0.8rem",
                              border: "1px solid var(--color-border)",
                              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                              maxWidth: 240,
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 700,
                                color: badge.color,
                                marginBottom: 2,
                              }}
                            >
                              {badge.label}
                            </div>
                            <div
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--color-text-secondary)",
                              }}
                            >
                              {badge.description}
                            </div>
                            <Tooltip.Arrow style={{ fill: "var(--color-bg-overlay)" }} />
                          </Tooltip.Content>
                        </Tooltip.Root>
                      ))}
                    </div>
                  </div>

                  {/* Quick Navigation Cards */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <button
                      onClick={() => router.push("/projects")}
                      className="menu-item"
                      style={{ padding: "12px", borderRadius: "var(--radius-md)" }}
                    >
                      <Layers size={18} color="#5865F2" />
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>4 Dự án</div>
                        <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                          Xem chi tiết →
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => router.push("/skills")}
                      className="menu-item"
                      style={{ padding: "12px", borderRadius: "var(--radius-md)" }}
                    >
                      <Terminal size={18} color="#00e5ff" />
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>Tech Stack</div>
                        <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                          Tất cả công cụ →
                        </div>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: PROJECTS */}
              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {projects.map((p) => (
                    <div
                      key={p.slug}
                      onClick={() => router.push(`/projects/${p.slug}`)}
                      style={{
                        padding: "14px 16px",
                        borderRadius: "var(--radius-lg)",
                        background: "var(--color-bg-elevated)",
                        border: "1px solid var(--color-border)",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(88, 101, 242, 0.4)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "var(--color-accent)",
                            textTransform: "uppercase",
                          }}
                        >
                          {p.category}
                        </span>
                        <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
                          {p.year}
                        </span>
                      </div>

                      <h2
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--color-text-primary)",
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {p.title}
                      </h2>

                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--color-text-secondary)",
                          margin: "6px 0 10px",
                          lineHeight: 1.5,
                        }}
                      >
                        {p.description}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {p.tools.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="pill pill-lavender"
                            style={{
                              fontSize: "0.7rem",
                              padding: "3px 8px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            {getPlatformIcon(t, 13)}
                            <span>{t}</span>
                          </span>
                        ))}
                        {p.tools.length > 4 && (
                          <span
                            className="pill pill-accent"
                            style={{ fontSize: "0.7rem", padding: "3px 8px" }}
                          >
                            +{p.tools.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 3: SKILLS */}
              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  {["Frontend & 3D", "Languages", "Backend & Database", "DevOps & Tools"].map((cat) => {
                    const catSkills = skills.filter((s) => s.category === cat);
                    return (
                      <div key={cat}>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "var(--color-accent)",
                            marginBottom: 8,
                          }}
                        >
                          {cat}
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 8,
                          }}
                        >
                          {catSkills.map((s) => (
                            <div
                              key={s.name}
                              style={{
                                padding: "8px 12px",
                                borderRadius: "var(--radius-md)",
                                background: "var(--color-bg-elevated)",
                                border: "1px solid var(--color-border)",
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                fontSize: "0.825rem",
                                fontWeight: 600,
                              }}
                            >
                              <span style={{ display: "flex", alignItems: "center" }}>
                                {getPlatformIcon(s.name, 18)}
                              </span>
                              <span>{s.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* TAB 4: DIRECT MESSAGE */}
              {activeTab === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  {/* Chat Header Message */}
                  <div
                    style={{
                      padding: "14px 16px",
                      borderRadius: "var(--radius-lg)",
                      background: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={siteConfig.avatar}
                        alt={siteConfig.displayName}
                        width={38}
                        height={38}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />

                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {siteConfig.displayName}
                        </span>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            padding: "1px 5px",
                            borderRadius: 3,
                            background: "#5865F2",
                            color: "#fff",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 3,
                          }}
                        >
                          <DiscordIcon size={10} /> DISCORD / DEV
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--color-text-secondary)",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        Hộp thư Discord trực tiếp của <strong>{siteConfig.discordUsername}</strong>.
                        Hãy nhắn tin mô tả dự án hoặc ý tưởng hợp tác, mình sẽ phản hồi sớm nhất!
                      </p>
                    </div>
                  </div>

                  {/* Direct Message Form */}
                  {msgSent ? (
                    <div
                      style={{
                        padding: "24px 16px",
                        borderRadius: "var(--radius-lg)",
                        background: "rgba(35, 165, 90, 0.12)",
                        border: "1px solid rgba(35, 165, 90, 0.3)",
                        textAlign: "center",
                      }}
                    >
                      <Check size={28} color="#23a55a" style={{ margin: "0 auto 8px" }} />
                      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>
                        Tin nhắn đã gửi thành công!
                      </div>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--color-text-muted)",
                          margin: "4px 0 12px",
                        }}
                      >
                        Cảm ơn bạn đã liên hệ. Mình sẽ kiểm tra và phản hồi lại sớm.
                      </p>
                      <button
                        onClick={() => setMsgSent(false)}
                        className="pill pill-accent"
                        style={{ border: "none", cursor: "pointer", padding: "6px 14px" }}
                      >
                        Gửi tin nhắn khác
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSendMessage}
                      style={{ display: "flex", flexDirection: "column", gap: 10 }}
                    >
                      <input
                        type="text"
                        placeholder="Tên hoặc Discord handle của bạn..."
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="chat-input"
                        style={{ fontSize: "0.825rem", padding: "8px 12px" }}
                      />
                      <textarea
                        rows={3}
                        placeholder={`Nhắn tin trực tiếp đến @${siteConfig.discordUsername}...`}
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        required
                        className="chat-textarea"
                        style={{ fontSize: "0.825rem", padding: "8px 12px" }}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting || !contactMsg.trim()}
                        className="pill pill-accent"
                        style={{
                          padding: "10px 16px",
                          justifyContent: "center",
                          fontSize: "0.85rem",
                          cursor:
                            isSubmitting || !contactMsg.trim() ? "not-allowed" : "pointer",
                          opacity: isSubmitting || !contactMsg.trim() ? 0.6 : 1,
                          background: "var(--color-accent)",
                          color: "#fff",
                          border: "none",
                          fontWeight: 600,
                        }}
                      >
                        <Send size={14} />
                        <span>{isSubmitting ? "Đang gửi..." : "Gửi Direct Message"}</span>
                      </button>
                    </form>
                  )}

                  {/* Direct quick links */}
                  <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                    <button
                      onClick={copyDiscordId}
                      className="quick-cmd"
                      style={{
                        flex: 1,
                        textAlign: "center",
                        background: "none",
                        border: "1px solid var(--color-border)",
                        cursor: "pointer",
                      }}
                    >
                      👾 Discord: {siteConfig.discordUsername}
                    </button>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="quick-cmd"
                      style={{ flex: 1, textAlign: "center" }}
                    >
                      ✉️ {siteConfig.email}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Tooltip.Provider>
  );
}
