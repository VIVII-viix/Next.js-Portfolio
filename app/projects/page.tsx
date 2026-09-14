import { getProjects } from "@/app/lib/projects";
import { ProjectSearch } from "./project-search";

import styles from "../css/projects-style.module.css";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className={`main-content ${styles.override}`}>
      <h1 className="page-title text-4xl font-bold">Projects</h1>
      <ProjectSearch projects={projects} />
    </main>
  );
}
