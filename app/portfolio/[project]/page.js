"use client"

import styles from "../portfolio.module.css";
import fmLogo from "../../../assets/fm-logo.svg";

import { projects } from "../../../utils/projects";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectPage() {

    const { project } = useParams();
    const projectData = projects[project];

    return (
        <main className={styles["project-page"]}>
            <Image src={fmLogo} alt="FM LOGO" />
            <h1>IN AGGIORNAMENTO...</h1>
        </main>
    );
}