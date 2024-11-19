"use client"

import styles from "../portfolio.module.css";

import { projects } from "../../../utils/projects";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectPage() {

    const { project } = useParams();
    const projectData = projects[project];

    return (
        <main className={styles["project-page"]}>
            <section className={styles["project-hero"]}>
                <Image src={projectData.images[0]} alt={projectData.title} />
            </section>
        </main>
    );
}