import Image from "next/image";

import styles from "./about.module.css";
import aboutUs1 from "../../assets/about-us-1.webp";
import aboutUs2 from "../../assets/about-us-2.webp";
import aboutUs3 from "../../assets/about-us-3.webp";

export default function AboutPage() {
    return (
      <main className={styles["about-us-page"]}>
        <div className="container">
          <section>
            <div className={styles["about-card-container"]}>
              <div className={styles["card-text"]}>
                <h2>Chi siamo</h2>
                <p>
                  FM WEB AGENCY nasce dall&apos;esigenza di adattarsi a un
                  mercato in costante evoluzione, dove affermarsi significa
                  costruire un&apos;identità forte e distinguibile. In un mondo
                  dove ogni giorno nascono nuove aziende, noi puntiamo a
                  renderti visibile e a valorizzare la tua professionalità con
                  una presenza digitale solida e sempre accessibile.
                </p>
              </div>
              <div className={styles["card-image"]}>
                <Image src={aboutUs1} alt="Chi siamo" />
              </div>
            </div>
            <div className={styles["about-card-container"]}>
              <div className={styles["card-text"]}>
                <h2>La Nostra Visione</h2>
                <p>
                  Vogliamo costruire rapporti che durino e che portino a
                  risultati concreti e di valore. Il nostro impegno è nel
                  fornire servizi su misura, studiati per rispondere in modo
                  preciso alle esigenze di ogni cliente. Crediamo che una
                  collaborazione solida e strategica sia la chiave per dare
                  stabilità e crescere in un mercato competitivo.
                </p>
              </div>
              <div className={styles["card-image"]}>
                <Image src={aboutUs3} alt="Chi siamo" />
              </div>
            </div>
            <div className={styles["about-card-container"]}>
              <div className={styles["card-text"]}>
                <h2>Il Nostro Team</h2>
                <p>
                  Il nostro team è composto da un gruppo di giovani
                  professionisti che combinano conoscenza, creatività e
                  competenza. Ci battiamo per superare il pregiudizio che la
                  giovane età possa essere una barriera: siamo qui per
                  dimostrare che l&apos;entusiasmo e la determinazione fanno la
                  differenza. Con un bagaglio di esperienze concrete, il nostro
                  team mette impegno e serietà in ogni progetto, garantendo un
                  supporto solido e professionale.
                </p>
              </div>
              <div className={styles["card-image"]}>
                <Image src={aboutUs2} alt="Chi siamo" />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
}