"use client";

import { useState } from "react";
import { Copy, Check, Calculator } from "lucide-react";

import { siteConfig } from "@/lib/config";
import { DiscordIcon } from "@/components/features/PlatformIcons";
import { playClick } from "@/components/features/SoundToggle";

const PROJECT_TYPES = [
  { id: "webapp", label: "Web App Next.js Fullstack", desc: "App Router, Database, Auth, Dashboard", est: "Liên hệ để nhận báo giá" },
  { id: "3dlanding", label: "Landing Page 3D & Interactive", desc: "Three.js WebGL, 60 FPS, High-conversion", est: "Liên hệ để nhận báo giá" },
  { id: "ecom", label: "Website Bán Hàng / Khóa Học", desc: "Catalog, Giỏ hàng, Thanh toán, Quản lý", est: "Liên hệ để nhận báo giá" },
  { id: "perf", label: "Tối Ưu SEO & Tốc Độ 99+", desc: "Lighthouse 95+, nén ảnh, Core Web Vitals", est: "Liên hệ để nhận báo giá" },
];


const TIMELINES = [
  { id: "rush", label: "Cần gấp (1 - 2 tuần)" },
  { id: "standard", label: "Tiêu chuẩn (2 - 4 tuần)" },
  { id: "flexible", label: "Linh hoạt (> 1 tháng)" },
];

export default function FreelanceQuoteEstimator() {
  const [selectedType, setSelectedType] = useState("webapp");
  const [selectedTimeline, setSelectedTimeline] = useState("standard");
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [projectNote, setProjectNote] = useState("");
  const [copied, setCopied] = useState(false);

  const currentProject = PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0];
  const currentTimeline = TIMELINES.find((t) => t.id === selectedTimeline) || TIMELINES[1];

  const generatedMessage = `Chào Thuỷ (ducthuy9999), mình cần tư vấn dự án Freelance:
- Khách hàng: ${clientName || "[Tên của bạn]"}
- Liên hệ (SĐT / Zalo / Telegram): ${clientContact || "[Thông tin liên hệ]"}
- Loại dự án: ${currentProject.label}
- Thời gian mong muốn: ${currentTimeline.label}
- Yêu cầu tóm tắt: ${projectNote || "Cần tư vấn giải pháp và báo giá chi tiết"}`;

  const handleCopyInquiry = () => {
    playClick();
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="quote" style={{ marginTop: "64px", width: "100%", marginBottom: "48px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(22, 23, 34, 0.9), rgba(17, 18, 24, 0.95))",
          border: "1px solid rgba(88, 101, 242, 0.35)",
          borderRadius: "22px",
          padding: "clamp(20px, 4vw, 36px)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.6)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 14px",
              borderRadius: "999px",
              background: "rgba(88, 101, 242, 0.15)",
              border: "1px solid rgba(88, 101, 242, 0.3)",
              color: "#8ab4d4",
              fontSize: "0.8rem",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            <Calculator size={14} />
            <span>TÍNH BÁO GIÁ & GỬI YÊU CẦU NHANH</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
              fontWeight: 800,
              color: "#f2f3f5",
            }}
          >
            Ước Tính Chi Phí & Lên Kế Hoạch Dự Án
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginTop: "6px" }}>
            Chọn cấu hình phù hợp với dự án của bạn để nhận phản hồi trong vòng 15 phút.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {/* Left Column: Form Controls */}
          <div>
            {/* 1. Chọn loại dự án */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#cbd5e1",
                  marginBottom: "10px",
                }}
              >
                1. Chọn loại dự án bạn cần phát triển:
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PROJECT_TYPES.map((pt) => {
                  const active = pt.id === selectedType;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => {
                        playClick();
                        setSelectedType(pt.id);
                      }}
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        background: active ? "rgba(88, 101, 242, 0.18)" : "rgba(255, 255, 255, 0.03)",
                        border: active
                          ? "1px solid rgba(88, 101, 242, 0.5)"
                          : "1px solid rgba(255, 255, 255, 0.08)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            color: active ? "#8ab4d4" : "#f2f3f5",
                          }}
                        >
                          {pt.label}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: active ? "#00e5ff" : "#94a3b8",
                            fontWeight: 700,
                          }}
                        >
                          {pt.est}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "4px" }}>
                        {pt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Chọn tiến độ */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#cbd5e1",
                  marginBottom: "8px",
                }}
              >
                2. Thời gian mong muốn hoàn thành:
              </label>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {TIMELINES.map((tl) => {
                  const active = tl.id === selectedTimeline;
                  return (
                    <button
                      key={tl.id}
                      type="button"
                      onClick={() => {
                        playClick();
                        setSelectedTimeline(tl.id);
                      }}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        background: active ? "#5865f2" : "rgba(255, 255, 255, 0.04)",
                        color: active ? "#ffffff" : "#cbd5e1",
                        border: active ? "1px solid #5865f2" : "1px solid rgba(255, 255, 255, 0.08)",
                        cursor: "pointer",
                      }}
                    >
                      {tl.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Tên & Thông tin liên hệ */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", marginBottom: "4px" }}>
                  Tên của bạn:
                </label>
                <input
                  type="text"
                  placeholder="Anh / Chị..."
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    background: "#090a0f",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#f2f3f5",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", marginBottom: "4px" }}>
                  SĐT / Zalo / Telegram:
                </label>
                <input
                  type="text"
                  placeholder="0987..."
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    background: "#090a0f",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#f2f3f5",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* 4. Ghi chú */}
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", marginBottom: "4px" }}>
                Ghi chú thêm về dự án:
              </label>
              <textarea
                rows={2}
                placeholder="Ví dụ: Cần tính năng thanh toán online và giao diện Dark mode..."
                value={projectNote}
                onChange={(e) => setProjectNote(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  background: "#090a0f",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#f2f3f5",
                  fontSize: "0.85rem",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>
          </div>

          {/* Right Column: Preview & Action Box */}
          <div
            style={{
              background: "rgba(9, 10, 15, 0.7)",
              border: "1px solid rgba(88, 101, 242, 0.3)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <DiscordIcon size={18} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f2f3f5" }}>
                    Bản tin nhắn sẵn sàng gửi Discord
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#23a55a",
                    fontWeight: 700,
                    background: "rgba(35, 165, 90, 0.15)",
                    padding: "2px 8px",
                    borderRadius: "999px",
                  }}
                >
                  🟢 Phản hồi nhanh
                </span>
              </div>

              <div
                style={{
                  background: "#111218",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "10px",
                  padding: "14px",
                  fontSize: "0.8rem",
                  color: "#cbd5e1",
                  fontFamily: "monospace",
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.6,
                  maxHeight: "220px",
                  overflowY: "auto",
                }}
              >
                {generatedMessage}
              </div>
            </div>

            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                type="button"
                onClick={handleCopyInquiry}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  background: copied ? "#23a55a" : "#5865f2",
                  color: "#ffffff",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 4px 16px rgba(88, 101, 242, 0.4)",
                  transition: "all 0.2s ease",
                }}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? "Đã chép nội dung tin nhắn!" : "Sao chép tin nhắn để gửi Discord"}</span>
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "0.8rem",
                  color: "#94a3b8",
                }}
              >
                <span>Discord Handle: <strong style={{ color: "#8ab4d4" }}>{siteConfig.discordUsername}</strong></span>
                <span>•</span>
                <span>Email: <strong style={{ color: "#cbd5e1" }}>{siteConfig.email}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
