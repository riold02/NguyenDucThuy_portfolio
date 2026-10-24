import SubScreen from "@/components/features/SubScreen";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import { Sparkles, Terminal, Code2, Rocket, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Thông tin chuyên môn và định hướng của Nguyen Duc Thuy.",
};

const HIGHLIGHTS = [
  {
    icon: <Code2 size={20} className="text-[#5865F2]" />,
    title: "Chuyên môn cốt lõi",
    desc: "Xây dựng web applications hiện đại với Next.js (App Router), React 19 và TypeScript. Tập trung vào code sạch, khả năng mở rộng và trải nghiệm người dùng.",
  },
  {
    icon: <Sparkles size={20} className="text-[#00e5ff]" />,
    title: "Trải nghiệm UI/UX & Micro-interactions",
    desc: "Chăm chút từng chuyển động (Framer Motion), tối ưu layout responsive, Dark mode chuẩn chỉnh và tốc độ phản hồi tức thì.",
  },
  {
    icon: <Terminal size={20} className="text-[#a855f7]" />,
    title: "Tối ưu hiệu năng & Web Vitals",
    desc: "Tối ưu Core Web Vitals, server components, bundle size và lazy loading hình ảnh/dữ liệu để đạt điểm số Lighthouse tối đa.",
  },
  {
    icon: <Rocket size={20} className="text-[#23a55a]" />,
    title: "Định hướng & Thực chiến",
    desc: "Sẵn sàng nhận các dự án freelance, web landing page, SaaS frontend và cộng tác xây dựng sản phẩm chất lượng cao.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <SubScreen title="Giới thiệu & Chuyên môn">
        <div style={{ padding: "20px 24px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Hero Profile Summary Card */}
          <div
            style={{
              padding: "24px 20px",
              borderRadius: "var(--radius-xl)",
              background: "linear-gradient(135deg, rgba(88, 101, 242, 0.12) 0%, rgba(30, 31, 41, 0.8) 100%)",
              border: "1px solid rgba(88, 101, 242, 0.25)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #5865F2, #9333ea)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "#fff",
                }}
              >
                N
              </div>
              <div>
                <h1
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {siteConfig.displayName}
                </h1>
                <p style={{ fontSize: "0.825rem", color: "#5865F2", margin: "2px 0 0", fontWeight: 600 }}>
                  {siteConfig.handle} • {siteConfig.title}
                </p>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.65, margin: 0 }}>
              Developer &amp; Designer đam mê tạo ra các giải pháp phần mềm, giao diện UI/UX trực quan, Web App mượt mà và trải nghiệm tương tác 3D chất lượng cao.
              Ưu tiên giải pháp kỹ thuật tinh gọn, giải quyết bài toán thực tế và mang lại giá trị bền vững cho người dùng và doanh nghiệp.
            </p>
          </div>

          {/* Section: Điểm mạnh kỹ thuật */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Năng lực & Thế mạnh
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "16px 18px",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: 8,
                      borderRadius: "var(--radius-md)",
                      background: "rgba(255, 255, 255, 0.04)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Connect Actions */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 8,
            }}
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="pill pill-accent"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px 16px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              <Mail size={16} />
              Gửi Email
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-lavender"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px 16px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              <ExternalLink size={16} />
              GitHub Profile
            </a>
          </div>
        </div>
      </SubScreen>
    </main>
  );
}
