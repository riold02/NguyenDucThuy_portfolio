import type { Metadata } from "next";
import ProfileCard from "@/components/features/ProfileCard";
import DiscordPresenceBadge from "@/components/features/DiscordPresenceBadge";
import FreelanceServices from "@/components/features/FreelanceServices";
import FreelanceProjectsShowcase from "@/components/features/FreelanceProjectsShowcase";
import FreelanceQuoteEstimator from "@/components/features/FreelanceQuoteEstimator";
import { siteConfig } from "@/lib/config";
import { Sparkles, ArrowRight, Zap, Code2 } from "lucide-react";


export const metadata: Metadata = {
  title: `${siteConfig.displayName} — Freelance Fullstack Developer & Designer`,
  description: `${siteConfig.bio} | Chuyên thiết kế UI/UX, phát triển Web App, phần mềm & 3D tương tác.`,
};

export default function HomePage() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Floating Command Bar */}
      <header
        style={{
          width: "100%",
          maxWidth: "1280px",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          position: "sticky",
          top: "12px",
          zIndex: 50,
        }}
      >
        <div
          style={{
            background: "rgba(17, 18, 24, 0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#23a55a",
              boxShadow: "0 0 10px #23a55a",
            }}
          />
          <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "#f2f3f5", letterSpacing: "-0.01em" }}>
            {siteConfig.displayName}
          </span>
          <span style={{ fontSize: "0.75rem", color: "#64748b" }}>•</span>
          <span style={{ fontSize: "0.8rem", color: "#8ab4d4", fontWeight: 600 }}>
            @{siteConfig.handle}
          </span>
        </div>

        {/* Center Nav Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "6px",
            background: "rgba(17, 18, 24, 0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "6px 12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
          className="desktop-nav"
        >
          <a
            href="#hero"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "8px",
              transition: "all 0.2s ease",
            }}
          >
            Hồ Sơ
          </a>
          <a
            href="#services"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "8px",
              transition: "all 0.2s ease",
            }}
          >
            Dịch Vụ
          </a>
          <a
            href="#projects"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "8px",
              transition: "all 0.2s ease",
            }}
          >
            Dự Án
          </a>
          <a
            href="#quote"
            style={{
              color: "#8ab4d4",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              padding: "6px 12px",
              borderRadius: "8px",
              background: "rgba(88, 101, 242, 0.15)",
              border: "1px solid rgba(88, 101, 242, 0.3)",
              transition: "all 0.2s ease",
            }}
          >
            Báo Giá
          </a>
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="#quote"
            style={{
              background: "#5865f2",
              color: "#ffffff",
              textDecoration: "none",
              padding: "8px 16px",
              borderRadius: "12px",
              fontSize: "0.82rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 4px 16px rgba(88, 101, 242, 0.4)",
            }}
          >
            <Sparkles size={14} />
            <span>Hợp Tác Freelance</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main
        id="main-content"
        style={{
          width: "100%",
          maxWidth: "1280px",
          padding: "24px 20px 80px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* HERO SECTION: Dual-Wing 3D Layout */}
        <section
          id="hero"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "36px",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          {/* Wing 1: The Interactive 3D Discord Profile Card */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ProfileCard />
          </div>

          {/* Wing 2: Freelancer Showcase & Value Proposition */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              width: "100%",
            }}
          >
            {/* Tagline Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(0, 229, 255, 0.12)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                color: "#00e5ff",
                fontSize: "0.8rem",
                fontWeight: 700,
                alignSelf: "flex-start",
                letterSpacing: "0.02em",
              }}
            >
              <Zap size={14} />
              <span>FREELANCE FULLSTACK & 3D WEB DEVELOPER</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#f2f3f5",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              Thiết Kế UI/UX & Phát Triển Phần Mềm, Web 3D Đột Phá —{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00e5ff 0%, #5865f2 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mượt Mà, Toàn Diện & Chuẩn Quốc Tế.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1rem",
                color: "#94a3b8",
                lineHeight: 1.7,
              }}
            >
              Xin chào, tôi là <strong>{siteConfig.displayName}</strong>. Tôi đồng hành cùng các
              Doanh nghiệp, Startup và Nhà sáng tạo để thiết kế giao diện UI/UX, phát triển ứng dụng Web &amp; phần mềm số,
              tích hợp giải pháp 3D tương tác cao cấp, cam kết đúng hạn và tối ưu trải nghiệm người dùng thực tế.
            </p>

            {/* Discord Presence & Live Widget */}
            <DiscordPresenceBadge />

            {/* 4 Freelancer Trust Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
              }}
            >
              <div
                style={{
                  background: "rgba(17, 18, 24, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#23a55a" }}>100%</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>
                  Đúng tiến độ cam kết
                </div>
              </div>

              <div
                style={{
                  background: "rgba(17, 18, 24, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#00e5ff" }}>99+</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>
                  Hiệu năng &amp; Trải nghiệm
                </div>
              </div>

              <div
                style={{
                  background: "rgba(17, 18, 24, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#8ab4d4" }}>Đa Năng</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>
                  Web, App, UI/UX &amp; 3D
                </div>
              </div>

              <div
                style={{
                  background: "rgba(17, 18, 24, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#a855f7" }}>&lt; 15 min</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>
                  Phản hồi Discord / Email
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "4px",
              }}
            >
              <a
                href="#quote"
                style={{
                  background: "linear-gradient(135deg, #5865f2, #4752c4)",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 6px 20px rgba(88, 101, 242, 0.4)",
                  transition: "all 0.2s ease",
                }}
              >
                <span>Nhận Báo Giá Dự Án</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
              >
                <Code2 size={16} />
                <span>Xem GitHub (@riold02)</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: DỊCH VỤ FREELANCE */}
        <FreelanceServices />

        {/* SECTION 3: DỰ ÁN THỰC CHIẾN TIÊU BIỂU */}
        <FreelanceProjectsShowcase />

        {/* SECTION 4: TÍNH BÁO GIÁ DỰ ÁN & ĐẶT LỊCH */}
        <FreelanceQuoteEstimator />

        {/* Footer */}
        <footer
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
            © {new Date().getFullYear()} <strong>{siteConfig.displayName}</strong> (@{siteConfig.handle}).
            Tất cả quyền được bảo lưu.
          </p>
          <p style={{ fontSize: "0.78rem", color: "#64748b" }}>
            Xây dựng với Next.js 16 (App Router), Three.js WebGL & Discord Profile Card Concept.
          </p>
        </footer>
      </main>
    </div>
  );
}
