"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink, Code2 } from "lucide-react";
import { getPlatformIcon } from "@/components/features/PlatformIcons";
import type { Project } from "@/lib/projects";
import { playClick } from "@/components/features/SoundToggle";

interface ProjectsListProps {
  projects: Project[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function ProjectsList({ projects }: ProjectsListProps) {
  const router = useRouter();

  function handleProjectClick(slug: string) {
    playClick("navigate");
    router.push(`/projects/${slug}`);
  }

  return (
    <div className="project-list">
      {projects.map((project, i) => (
        <motion.article
          key={project.slug}
          className="project-card"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onClick={() => handleProjectClick(project.slug)}
          role="button"
          tabIndex={0}
          aria-label={`Mở chi tiết dự án: ${project.title}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleProjectClick(project.slug);
            }
          }}
        >
          {/* Thumbnail placeholder with gradient */}
          <div
            className="project-thumb"
            style={{
              background: `linear-gradient(135deg, ${project.color}18 0%, var(--color-bg-void) 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden="true"
          >
            <span style={{ fontSize: "3rem", opacity: 0.7 }}>{project.icon}</span>
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: `${project.color}22`,
                border: `1px solid ${project.color}40`,
                borderRadius: 6,
                padding: "2px 8px",
                fontSize: "0.7rem",
                color: project.color,
                fontWeight: 600,
              }}
            >
              {project.year}
            </div>
          </div>

          <div className="project-body">
            <div className="project-category">{project.category}</div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tools.slice(0, 4).map((tool) => (
                <span key={tool} className="pill pill-lavender" style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  {getPlatformIcon(tool, 14)}
                  <span>{tool}</span>
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="pill pill-accent">+{project.tools.length - 4}</span>
              )}
            </div>

            {/* Links row */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 12,
                paddingTop: 12,
                borderTop: "1px solid var(--color-border-soft)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill-accent"
                  style={{ textDecoration: "none" }}
                  aria-label={`GitHub repo của ${project.title}`}
                >
                  <Code2 size={12} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill-lavender"
                  style={{ textDecoration: "none" }}
                  aria-label={`Demo của ${project.title}`}
                >
                  <ExternalLink size={12} />
                  <span>Demo</span>
                </a>
              )}
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Xem chi tiết →
              </span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
