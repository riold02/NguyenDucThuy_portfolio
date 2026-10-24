import SubScreen from "@/components/features/SubScreen";
import { projects } from "@/lib/projects";
import ProjectsList from "@/components/features/ProjectsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Những dự án mình đã xây dựng — từ desktop apps đến web.",
};

export default function ProjectsPage() {
  return (
    <main>
      <SubScreen title="Projects">
        <ProjectsList projects={projects} />
      </SubScreen>
    </main>
  );
}
