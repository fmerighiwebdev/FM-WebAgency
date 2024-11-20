import styles from "./portfolio.module.css";

import ProjectsGrid from "@/components/projects-grid/projects-grid";

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
        <ProjectsGrid />
      </div>
    </main>
  );
}
