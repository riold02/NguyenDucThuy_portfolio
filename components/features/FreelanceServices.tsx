"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Cpu, Zap, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { playClick } from "@/components/features/SoundToggle";
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  GitIcon,
  DockerIcon,
} from "@/components/features/PlatformIcons";

const SERVICES = [
  {
    id: "fullstack-web",
    title: "Phát Triển Web App Next.js Fullstack",
    subtitle: "Xây dựng ứng dụng web hoàn chỉnh từ giao diện đến cơ sở dữ liệu",
    icon: <Globe size={26} color="#5865f2" />,
    badge: "Phổ Biến Nhất",
    gradient: "linear-gradient(135deg, rgba(88, 101, 242, 0.15), rgba(88, 101, 242, 0.03))",
    borderColor: "rgba(88, 101, 242, 0.3)",
    features: [
      "Next.js 16 App Router, React 19 & TypeScript type-safe 100%",
      "Cơ sở dữ liệu PostgreSQL / MySQL kết hợp Prisma ORM",
      "Authentication an toàn, phân quyền đa cấp, Dashboard quản trị",
      "Thiết kế API RESTful mượt mà, sẵn sàng mở rộng quy mô",
    ],
    techs: [<NextjsIcon key="1" size={18} />, <ReactIcon key="2" size={18} />, <TypeScriptIcon key="3" size={18} />],
  },
  {
    id: "3d-creative",
    title: "Website 3D & UI/UX Tương Tác Đột Phá",
    subtitle: "Tạo ấn tượng thị giác đỉnh cao, giữ chân khách hàng trên website",
    icon: <Cpu size={26} color="#00e5ff" />,
    badge: "Xu Hướng 2026",
    gradient: "linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 229, 255, 0.03))",
    borderColor: "rgba(0, 229, 255, 0.3)",
    features: [
      "Trải nghiệm 3D WebGL với Three.js mượt mà trên cả điện thoại",
      "Micro-interactions tinh tế với Framer Motion",
      "Phong cách Cyberpunk / Glassmorphism hiện đại chuẩn quốc tế",
      "Chuyển cảnh không giật lag, tối ưu 60 FPS",
    ],
    techs: [<ReactIcon key="1" size={18} />, <TailwindIcon key="2" size={18} />],
  },
  {
    id: "performance-seo",
    title: "Tối Ưu Hiệu Năng & SEO Top 1 Google",
    subtitle: "Tăng tốc độ tải trang dưới 1s, x2 tỷ lệ chuyển đổi khách hàng",
    icon: <Zap size={26} color="#f0b232" />,
    badge: "Tối Ưu Doanh Số",
    gradient: "linear-gradient(135deg, rgba(240, 178, 50, 0.15), rgba(240, 178, 50, 0.03))",
    borderColor: "rgba(240, 178, 50, 0.3)",
    features: [
      "Điểm số Google PageSpeed / Lighthouse đạt 95 - 100 điểm",
      "Tối ưu Core Web Vitals (LCP, FID, CLS) theo chuẩn mới nhất",
      "Cấu trúc dữ liệu Semantic HTML5 & JSON-LD thân thiện với Google",
      "Nén ảnh tự động chuẩn WebP / AVIF thế hệ mới",
    ],
    techs: [<NextjsIcon key="1" size={18} />, <TailwindIcon key="2" size={18} />],
  },
  {
    id: "devops-cicd",
    title: "Tự Động Hóa CI/CD & Cloud Deployment",
    subtitle: "Đảm bảo website vận hành ổn định 24/7, cập nhật code trong vài giây",
    icon: <ShieldCheck size={26} color="#a855f7" />,
    badge: "Ổn Định & An Toàn",
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.03))",
    borderColor: "rgba(168, 85, 247, 0.3)",
    features: [
      "Thiết lập quy trình GitHub Actions tự động kiểm thử và deploy",
      "Đóng gói Docker Container nhẹ nhàng, nhất quán môi trường",
      "Triển khai Vercel / Cloud VPS với bảo mật HTTPS chuẩn",
      "Giám sát uptime 24/7 và sao lưu dữ liệu tự động",
    ],
    techs: [<GitIcon key="1" size={18} />, <DockerIcon key="2" size={18} />],
  },
];

export default function FreelanceServices() {
  return (
    <section id="services" style={{ marginTop: "48px", width: "100%" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 14px",
            borderRadius: "999px",
            background: "rgba(88, 101, 242, 0.12)",
            border: "1px solid rgba(88, 101, 242, 0.25)",
            color: "#8ab4d4",
            fontSize: "0.8rem",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          <Sparkles size={14} />
          <span>DỊCH VỤ FREELANCE CHUYÊN NGHIỆP</span>
        </div>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 800,
            color: "#f2f3f5",
            letterSpacing: "-0.02em",
          }}
        >
          Giải Pháp Công Nghệ Toàn Diện Cho Dự Án Của Bạn
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#94a3b8",
            maxWidth: "640px",
            margin: "8px auto 0 auto",
            lineHeight: 1.6,
          }}
        >
          Từ ý tưởng sơ khai đến sản phẩm thực tế chạy mượt mà trên Production.
          Mỗi dòng code đều được viết tỉ mỉ, cam kết chất lượng cao nhất.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {SERVICES.map((s, idx) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{
              background: s.gradient,
              border: `1px solid ${s.borderColor}`,
              borderRadius: "18px",
              padding: "24px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div>
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(17, 18, 24, 0.8)",
                    border: `1px solid ${s.borderColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "999px",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#f2f3f5",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {s.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#f2f3f5",
                  marginBottom: "6px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#94a3b8",
                  marginBottom: "18px",
                  lineHeight: 1.5,
                }}
              >
                {s.subtitle}
              </p>

              {/* Features List */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {s.features.map((feat, fIdx) => (
                  <li
                    key={fIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.83rem",
                      color: "#cbd5e1",
                      lineHeight: 1.45,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="#23a55a"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer: Tech Icons & CTA */}
            <div
              style={{
                marginTop: "24px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600 }}>
                  Công nghệ:
                </span>
                <div style={{ display: "flex", gap: "6px" }}>{s.techs}</div>
              </div>

              <a
                href="#quote"
                onClick={() => playClick()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#8ab4d4",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <span>Báo giá</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
