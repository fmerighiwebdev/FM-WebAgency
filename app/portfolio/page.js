import styles from "./portfolio.module.css";

import alTeatro1 from "../../assets/al-teatro.webp";
import trePini1 from "../../assets/tre-pini.webp";
import esc1 from "../../assets/esc.webp";

import Image from "next/image";

export default function PortfolioPage() {
  const projects = {
    "ristorante-al-teatro": {
      title: 'Ristorante Pizzeria "Al Teatro"',
      address: "Via Angelo Anelli, 40A - Desenzano del Garda (BS)",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed ac felis metus. Etiam non erat tortor. Phasellus bibendum fringilla libero, sit amet accumsan elit fringilla nec. Donec sit amet tincidunt libero. Cras malesuada nulla sed quam volutpat condimentum. Sed ac ligula sit amet mi scelerisque imperdiet. Praesent ut magna non nulla convallis venenatis.",
      images: [alTeatro1],
      url: "https://www.ristorantealteatro.it",
    },
    "ristorante-3-pini": {
      title: 'Ristorante Pizzeria "3 Pini"',
      address: "Via Stazione Mori, 14 - Rovereto (TN)",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      images: [trePini1],
      url: "https://www.ristorante3pini.it",
    },
    "esc-corporation": {
      title: "ESC CORPORATION",
      address: "Via Don Lorenzo Guetti, 9 - Trento (TN)",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      images: [esc1],
      url: "/portfolio/project-3",
    },
  };

  return (
    <main className={styles["portfolio-page"]}>
      <div className="container">
        <h1>Scopri i nostri progetti</h1>
        <div className={styles["projects"]}>
          {Object.keys(projects).map((key) => {
            const project = projects[key];
            const projectLink = `/portfolio/${key}`;
            return (
              <div key={key} className={styles["project"]}>
                <div className={styles["image-container"]}>
                  <Image src={project.images[0]} alt={project.title} />
                </div>
                <div className="p-3 d-flex flex-column gap-5">
                  <div className={`${styles["project-header"]} d-flex flex-column gap-2`}>
                    <h2>{project.title}</h2>
                    <p>{project.address}</p>
                    <p>{project.shortDescription}</p>
                  </div>
                  <div className={`${styles["project-footer"]} d-flex gap-2`}>
                    <a href={project.url}>Visita il sito web</a>
                    <a href={projectLink}>Scopri di più</a>
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
