import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import SubScreen from "@/components/features/SubScreen";
import type { Metadata } from "next";
import { ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import { getPlatformIcon } from "@/components/features/PlatformIcons";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <SubScreen title={project.title} backHref="/projects">
        <div style={{ padding: "24px 24px 40px" }}>
          {/* Hero */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 7",
              borderRadius: "var(--radius-xl)",
              background: `linear-gradient(135deg, ${project.color}22 0%, var(--color-bg-void) 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              fontSize: "4rem",
              border: `1px solid ${project.color}20`,
            }}
            aria-hidden="true"
          >
            {project.icon}
          </div>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span className="pill pill-accent" style={{ fontSize: "0.7rem" }}>
              {project.category}
            </span>
            <span className="pill pill-lavender" style={{ fontSize: "0.7rem" }}>
              {project.year}
            </span>
            <span className="pill" style={{
              fontSize: "0.7rem",
              background: "var(--color-bg-elevated)",
              color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)",
            }}>
              {project.role}
            </span>
          </div>

          <h1 style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            color: "var(--color-text-primary)",
            marginBottom: 16,
            lineHeight: 1.3,
          }}>
            {project.title}
          </h1>

          {/* Description */}
          <div
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "16px 20px",
              marginBottom: 20,
            }}
          >
            <div style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-accent)",
              fontWeight: 700,
              marginBottom: 8,
            }}>
              Mô tả dự án
            </div>
            <p style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
            }}>
              {project.longDescription}
            </p>
          </div>

          {/* Results */}
          <div
            style={{
              background: "var(--color-bg-elevated)",
              border: `1px solid ${project.color}20`,
              borderRadius: "var(--radius-xl)",
              padding: "16px 20px",
              marginBottom: 20,
            }}
          >
            <div style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: project.color,
              fontWeight: 700,
              marginBottom: 12,
            }}>
              Kết quả đạt được
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {project.results.map((result, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <CheckCircle2
                    size={16}
                    style={{ color: project.color, flexShrink: 0, marginTop: 2 }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "16px 20px",
              marginBottom: 24,
            }}
          >
            <div style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-lavender)",
              fontWeight: 700,
              marginBottom: 12,
            }}>
              Tech stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tools.map((tool) => (
                <span key={tool} className="pill pill-lavender" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {getPlatformIcon(tool, 15)}
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 12 }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px 16px",
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.15s",
                }}
              >
                <Code2 size={16} />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px 16px",
                  background: "var(--color-accent)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  color: "var(--color-text-inverse)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  transition: "all 0.15s",
                }}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </SubScreen>
    </main>
  );
}
