import styles from "../portfolio.module.css";
import fmLogo from "../../../assets/fm-logo.svg";

import { projects } from "../../../utils/projects";

import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const projectData = projects[params.projectSlug];

  if (!projectData) {
    notFound();
  }

  return {
    title: projectData.title || "Project",
    description: `Scopri i dettagli del progetto ${projectData.title}`,
  };
}

export default function ProjectPage({ params }) {

    const projectSlug = params.projectSlug;
    const projectData = projects[projectSlug];

    return (
        <main className={styles["project-page"]}>
            <div class="container">
                <Image src={fmLogo} alt="FM LOGO" />
                <h1>IN AGGIORNAMENTO...</h1>
            </div>
        </main>
    );
}