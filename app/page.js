import Link from "next/link";
import styles from "./page.module.css";

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
      </section>

      <section className={styles["services-home-section"]}>
        <div class="container">
          <h2 className={styles["services-home-title"]}>I NOSTRI SERVIZI</h2>
          <p className={styles["services-description"]}>
            Siamo un team di professionisti specializzati in <br></br>
            <span>sviluppo web e marketing digitale</span> <br></br>
            pronti a soddisfare le tue esigenze.
          </p>
          <div className={styles["services-grid"]}>
            <div className={styles["service-card"]}>
              <h3 className={styles["service-card-title"]}>Sito Web</h3>
              <p className={styles["service-card-description"]}>
                Realizziamo siti web professionali, responsive e performanti.
              </p>
            </div>
            <div className={styles["service-card"]}>
              <h3 className={styles["service-card-title"]}>E-commerce</h3>
              <p className={styles["service-card-description"]}>
                Creiamo e-commerce sicuri e intuitivi per vendere online.
              </p>
            </div>
            <div className={styles["service-card"]}>
              <h3 className={styles["service-card-title"]}>SEO</h3>
              <p className={styles["service-card-description"]}>
                Ottimizziamo il tuo sito per i motori di ricerca.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
