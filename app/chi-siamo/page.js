import Image from "next/image";

import styles from "./about.module.css";
import aboutUs1 from "../../assets/about-us-1.webp";
import aboutUs2 from "../../assets/about-us-2.webp";
import aboutUs3 from "../../assets/about-us-3.webp";
import Link from "next/link";

export const metadata = {
  title: "Chi Siamo - FM Web Agency",
  description:
    "FM Web Agency è il partner digitale che trasforma le idee in realtà. Scopri la nostra visione, il team e il nostro impegno nel creare soluzioni innovative per il tuo successo online.",
};

export default function AboutPage() {
  return (
    <main className={styles["about-us-page"]}>
      <div className="container">
        <section>
          <div className={styles["about-card-container"]}>
            <div className={styles["card-text"]}>
              <h2>Chi siamo</h2>
              <p>
                FM WEB AGENCY nasce dall&apos;esigenza di adattarsi a un mercato
                in costante evoluzione, dove affermarsi significa costruire
                un&apos;identità <strong>forte e distinguibile</strong>. In un
                mondo dove ogni giorno nascono nuove aziende, noi puntiamo a
                renderti visibile e a <strong>valorizzare</strong> la tua
                professionalità con una presenza digitale solida e sempre
                accessibile.
              </p>
            </div>
            <div className={styles["card-image"]}>
              <Image src={aboutUs1} alt="Chi siamo" />
            </div>
          </div>
          <div className={styles["about-card-container"]}>
            <div className={styles["card-image"]}>
              <Image src={aboutUs3} alt="Chi siamo" />
            </div>
            <div className={styles["card-text"]}>
              <h2>La Nostra Visione</h2>
              <p>
                Vogliamo costruire rapporti che durino e che portino a{" "}
                <strong>risultati concreti</strong> e di valore. Il nostro
                impegno è nel fornire servizi su misura, studiati per rispondere
                in modo preciso alle esigenze di ogni cliente. Crediamo che una
                collaborazione solida e strategica sia la chiave per dare
                stabilità e crescere in un mercato competitivo.
              </p>
            </div>
          </div>
          <div className={styles["about-card-container"]}>
            <div className={styles["card-text"]}>
              <h2>Il Nostro Team</h2>
              <p>
                Il nostro team è composto da un gruppo di giovani professionisti
                che combinano conoscenza, creatività e competenza. Con un
                bagaglio di esperienze concrete, il nostro team mette impegno e
                serietà in ogni progetto, garantendo un supporto solido e
                professionale.
              </p>
            </div>
            <div className={styles["card-image"]}>
              <Image src={aboutUs2} alt="Chi siamo" />
            </div>
          </div>
          <div className={styles["about-us-cta"]}>
            <h2>Perché scegliere noi?</h2>
            <p>
              Siamo al fianco di chi vuole lasciare un segno nel mercato
              moderno. La nostra forza è nella passione e nella determinazione
              che mettiamo in ogni collaborazione, per rendere le aziende più
              visibili e competitive. Sceglierci significa affidarsi a un
              partner che guarda lontano e pensa al successo dei propri clienti
              come al proprio.
            </p>
            <Link href="/contatti">Contattaci ora!</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
