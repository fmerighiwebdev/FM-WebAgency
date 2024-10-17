import styles from "./page.module.css";
import lightBubble from "@/assets/light-bubble.svg";
import darkBubble from "@/assets/dark-bubble.svg";
import websiteIcon from "@/assets/website.svg";
import appIcon from "@/assets/app.svg";
import cartIcon from "@/assets/cart.svg";
import upTrendIcon from "@/assets/up-trend.svg";
import rightArrow from "@/assets/right-arrow.svg";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles["home-page"]}>
      <section className={styles["hero-section"]}>
        <h1 className={styles["hero-title"]}>FM WEB AGENCY</h1>
        <p className={styles["hero-description"]}>
          Accelera la crescita del tuo business con <br></br>
          <span>SOLUZIONI WEB SU MISURA</span> <br></br>
          che portano risultati concreti.
        </p>
        <Link href="#" className={styles["hero-btn"]}>
          Scopri di più
        </Link>
        <Image
          src={lightBubble}
          className={`${styles["light-bubble"]} ${styles["big"]}`}
          alt="Background Bubble"
        />
        {/* <Image
          src={darkBubble}
          className={`${styles["dark-bubble"]}`}
          alt="Background Bubble"
        />
        <Image
          src={lightBubble}
          className={`${styles["light-bubble"]} ${styles["medium"]}`}
          alt="Background Bubble"
        /> */}
      </section>

      <section className={styles["services-home-section"]}>
        <div className="container">
          <div
            className={`row g-5 align-items-center ${styles["services-columns"]}`}
          >
            <div className={`col-12 col-lg-6 ${styles["services-col"]}`}>
              <div className={styles["services-header"]}>
                <h2>I NOSTRI SERVIZI</h2>
                <p className="text-highlight">
                  Siamo qui per accompagnarti in ogni fase del tuo percorso
                  digitale.
                </p>
              </div>
              <p className={styles["home-section-text"]}>
                Dedichiamo tempo per ascoltare le tue esigenze e creare
                soluzioni <em>su misura</em> per la tua azienda. Che tu abbia
                bisogno di un{" "}
                <span className="span-highlight">sito web professionale</span>, una{" "}
                <span className="span-highlight">web app intuitiva</span> o di
                migliorare la tua visibilità con{" "}
                <span className="span-highlight">
                  strategie di digital marketing
                </span>
                , siamo pronti a darti gli strumenti giusti per crescere.
              </p>
              <Link href="/services" className={styles["section-link"]}>
                Scopri i nostri servizi <Image src={rightArrow} alt="Right Arrow" />
              </Link>
            </div>
            <div className={`col-12 col-lg-6 ${styles["services-col"]}`}>
              <div className={styles["services-grid"]}>
                <div className={styles["service-card"]} data-aos="fade-up">
                  <div className={styles["service-card-header"]}>
                    <h3>Siti Web</h3>
                    <Image src={websiteIcon} alt="Website Icon" />
                  </div>
                  <p className={styles["service-card-description"]}>
                    Realizziamo siti web personalizzati, studiati per migliorare
                    l&apos;immagine della tua azienda e offrirti una presenza
                    online moderna ed efficace.
                  </p>
                </div>
                <div className={styles["service-card"]}>
                  <div className={styles["service-card-header"]}>
                    <h3>Web Apps</h3>
                    <Image src={appIcon} alt="Web App Icon" />
                  </div>
                  <p className={styles["service-card-description"]}>
                    Progettiamo web app funzionali e su misura per la tua
                    attività, utili per ottimizzare i processi interni e
                    migliorare l&apos;interazione con i tuoi clienti.
                  </p>
                </div>
                <div className={styles["service-card"]}>
                  <div className={styles["service-card-header"]}>
                    <h3>eCommerce</h3>
                    <Image src={cartIcon} alt="Cart Icon" />
                  </div>
                  <p className={styles["service-card-description"]}>
                    Ti forniamo gli strumenti per vendere online in modo
                    semplice e sicuro, con soluzioni eCommerce personalizzate
                    per gestire ogni aspetto delle tue vendite digitali.
                  </p>
                </div>
                <div className={styles["service-card"]}>
                  <div className={styles["service-card-header"]}>
                    <h3>Marketing</h3>
                    <Image src={upTrendIcon} alt="Up Trend Icon" />
                  </div>
                  <p className={styles["service-card-description"]}>
                    Sfrutta il potenziale del web per raggiungere nuovi clienti
                    e migliorare la reputazione del tuo brand, grazie alle
                    nostre strategie di digital marketing su misura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["about-us-home-section"]}>

      </section>
    </main>
  );
}
