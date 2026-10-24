"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Check, ArrowUpRight, FolderGit2 } from "lucide-react";

import { projects, Project } from "@/lib/projects";
import { getPlatformIcon } from "@/components/features/PlatformIcons";
import { playClick } from "@/components/features/SoundToggle";

export default function FreelanceProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" style={{ marginTop: "64px", width: "100%" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 14px",
            borderRadius: "999px",
            background: "rgba(0, 229, 255, 0.1)",
            border: "1px solid rgba(0, 229, 255, 0.25)",
            color: "#00e5ff",
            fontSize: "0.8rem",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          <FolderGit2 size={14} />
          <span>DỰ ÁN THỰC CHIẾN ĐÃ HOÀN THÀNH</span>
        </div>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 800,
            color: "#f2f3f5",
            letterSpacing: "-0.02em",
          }}
        >
          Sản Phẩm Đã Được Triển Khai Thực Tế
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#94a3b8",
            maxWidth: "600px",
            margin: "8px auto 0 auto",
            lineHeight: 1.6,
          }}
        >
          Các dự án Web App, Landing Page và Tự động hóa CI/CD được lập trình
          bằng Next.js hiện đại, tối ưu trải nghiệm và hiệu năng vượt trội.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((p, idx) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{
              background: "rgba(17, 18, 24, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "18px",
              padding: "26px",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 12px 36px rgba(0, 0, 0, 0.5)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Bar: Category & Year */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: p.color,
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${p.color}33`,
                  }}
                >
                  {p.category}
                </span>
                <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>
                  {p.year}
                </span>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#f2f3f5",
                  marginBottom: "8px",
                  lineHeight: 1.35,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#94a3b8",
                  lineHeight: 1.6,
                  marginBottom: "18px",
                }}
              >
                {p.description}
              </p>

              {/* Key Results / Metrics */}
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "10px",
                  padding: "12px",
                  marginBottom: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#8ab4d4",
                    marginBottom: "8px",
                    letterSpacing: "0.04em",
                  }}
                >
                  Điểm nổi bật & Kết quả:
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {p.results.slice(0, 2).map((res, rIdx) => (
                    <li
                      key={rIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.78rem",
                        color: "#cbd5e1",
                        lineHeight: 1.4,
                      }}
                    >
                      <Check size={13} color="#23a55a" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Vector Icons */}
              <div style={{ marginBottom: "20px" }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "#64748b",
                    fontWeight: 600,
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Tech Stack:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tools.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      {getPlatformIcon(t, 14)}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links / Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#cbd5e1",
                    textDecoration: "none",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Code2 size={14} />
                  <span>Mã Nguồn (GitHub)</span>
                </a>
              ) : (
                <span />
              )}

              <button
                onClick={() => {
                  playClick();
                  setSelectedProject(p);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#00e5ff",
                  background: "rgba(0, 229, 255, 0.1)",
                  border: "1px solid rgba(0, 229, 255, 0.3)",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span>Chi Tiết</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "16px",
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              style={{
                background: "#161722",
                border: "1px solid rgba(88, 101, 242, 0.4)",
                borderRadius: "18px",
                padding: "28px",
                maxWidth: "600px",
                width: "100%",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.85)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: selectedProject.color,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${selectedProject.color}44`,
                  }}
                >
                  {selectedProject.category} • {selectedProject.year}
                </span>

                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    borderRadius: "6px",
                    color: "#94a3b8",
                    padding: "4px 10px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                  }}
                >
                  ✕ Đóng
                </button>
              </div>

              <h2
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  color: "#f2f3f5",
                  marginBottom: "12px",
                }}
              >
                {selectedProject.title}
              </h2>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#cbd5e1",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}
              >
                {selectedProject.longDescription}
              </p>

              <div style={{ marginBottom: "20px" }}>
                <h4
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#f2f3f5",
                    marginBottom: "10px",
                  }}
                >
                  Kết quả đạt được:
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {selectedProject.results.map((r, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.85rem",
                        color: "#94a3b8",
                        lineHeight: 1.5,
                      }}
                    >
                      <Check size={16} color="#23a55a" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick()}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 18px",
                      borderRadius: "8px",
                      background: "#5865f2",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    <Code2 size={16} />
                    <span>Xem Repository trên GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
