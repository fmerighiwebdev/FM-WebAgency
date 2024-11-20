"use client"

import { projects } from "@/utils/projects";

import styles from "./projects-grid.module.css";

import locationIcon from "../../assets/location.svg";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsGrid() {
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className={styles.projects}>
      {Object.keys(projects).map((key, index) => {
        const project = projects[key];
        const projectLink = `/portfolio/${key}`;
        return (
          <motion.div
            key={key}
            className={styles.project}
            variants={fadeInFromBottom}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <div className={styles["image-container"]}>
              <Image src={project.images[0]} alt={project.title} />
            </div>
            <div className="p-3 d-flex flex-column gap-5">
              <div
                className={`${styles["project-header"]} d-flex flex-column gap-3`}
              >
                <h2>{project.title}</h2>
                <div className="d-flex align-start gap-2">
                  <Image
                    src={locationIcon}
                    alt="Location"
                    width={20}
                    height={20}
                  />
                  <div className={styles.address}>
                    <p>{project.address}</p>
                    <p>{project.city}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Image
                    src={project.serviceIcon}
                    alt="Service Icon"
                    width={20}
                    height={20}
                  />
                  <div className={styles.service}>
                    <p>{project.serviceText}</p>
                  </div>
                </div>
                <p>{project.shortDescription}</p>
              </div>
              <div className={`${styles["project-footer"]} d-flex gap-2`}>
                <Link href={project.url} target="_blank">
                  Visita il sito web
                </Link>
                <Link href={projectLink}>Scopri di più</Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
