import SubScreen from "@/components/features/SubScreen";
import { skills } from "@/lib/skills";
import { getPlatformIcon } from "@/components/features/PlatformIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tech Stack",
  description: "Các công nghệ, ngôn ngữ và nền tảng đang trực tiếp áp dụng vào các dự án sản phẩm.",
};

const CATEGORIES = [
  "Frontend & 3D",
  "Languages",
  "Backend & Database",
  "DevOps & Tools",
] as const;

export default function SkillsPage() {
  return (
    <main>
      <SubScreen title="Tech Stack & Tools">
        <div className="skills-section">
          {CATEGORIES.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (!catSkills.length) return null;
            return (
              <section key={cat} aria-label={cat} style={{ marginBottom: "24px" }}>
                <h2
                  className="skill-category-title"
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-accent)",
                    marginBottom: "12px",
                  }}
                >
                  {cat}
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                    gap: "10px",
                  }}
                  role="list"
                >
                  {catSkills.map((skill) => (
                    <div
                      key={skill.name}
                      role="listitem"
                      style={{
                        padding: "10px 14px",
                        background: "var(--color-bg-elevated)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          flexShrink: 0,
                        }}
                      >
                        {getPlatformIcon(skill.name, 18)}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            color: "var(--color-text-primary)",
                            lineHeight: 1.3,
                          }}
                        >
                          {skill.name}
                        </div>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            color: "var(--color-text-muted)",
                            lineHeight: 1.3,
                            marginTop: "2px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {skill.focus}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          <div
            style={{
              marginTop: 12,
              padding: "14px 18px",
              background: "rgba(88, 101, 242, 0.08)",
              border: "1px solid rgba(88, 101, 242, 0.2)",
              borderRadius: "var(--radius-lg)",
              fontSize: "0.82rem",
              color: "#cbd5e1",
              lineHeight: 1.6,
            }}
          >
            ⚡ <strong>Cam kết chất lượng:</strong> Toàn bộ công nghệ được áp dụng theo tiêu chuẩn nghiêm ngặt (Strict TypeScript, Clean Architecture, CI/CD tự động) để đảm bảo sản phẩm luôn ổn định và dễ bảo trì lâu dài.
          </div>
        </div>
      </SubScreen>
    </main>
  );
}
