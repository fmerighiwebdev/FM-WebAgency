import styles from "./portfolio.module.css";

import locationIcon from "../../assets/location.svg";

import { projects } from "../../utils/projects";

import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className={styles["portfolio-page"]}>
      <div className="container">
        <div className="d-flex flex-column flex-lg-row align-items-center gap-0 gap-lg-2">
          <h1 className={styles["portfolio-heading"]}>IL NOSTRO PORTFOLIO</h1>
          <p className={styles["portfolio-subheading"]}>
            Nel nostro portfolio troverai una selezione dei progetti che
            raccontano la passione e l&apos;attenzione che mettiamo in ogni
            dettaglio. <br></br>
            <br></br>
            Ogni sito è pensato per unire design accattivante, funzionalità
            avanzate e un&apos;esperienza utente fluida, adattandosi
            perfettamente a ogni dispositivo. <br></br>
            <br></br> Che si tratti di piccole realtà o grandi aziende, creiamo
            soluzioni su misura che riflettono l&apos;identità unica di ogni
            brand.
          </p>
        </div>
        <div className={styles.projects}>
          {Object.keys(projects).map((key) => {
            const project = projects[key];
            const projectLink = `/portfolio/${key}`;
            return (
              <div key={key} className={styles.project}>
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
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
