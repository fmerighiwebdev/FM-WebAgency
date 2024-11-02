import styles from "./services.module.css";

import websiteIcon from "@/assets/website.svg";
import appIcon from "@/assets/app.svg";
import cartIcon from "@/assets/cart.svg";
import upTrendIcon from "@/assets/up-trend.svg";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className={styles["services-page"]}>
      <section className="container">
        <div className={styles["services-header"]}>
          <h1>I NOSTRI SERVIZI</h1>
          <p class="text-highlight">
            Siamo il partner ideale per guidarti in un mondo digitale sempre più
            competitivo.
          </p>
          <p>
            Offriamo soluzioni digitali che combinano design innovativo e
            tecnologie all&apos;avanguardia per far crescere la tua attività.
            Scopri i nostri servizi principali e i vantaggi che possono portare
            al tuo business.
          </p>
        </div>
        <ul className={styles["services-list"]}>
          <li className={styles.service}>
            <div className="row align-items-start g-4">
              <div class="col-12 col-lg-6">
                <div className={styles["service-header"]}>
                  <Image src={websiteIcon} alt="Sviluppo Sito Web" />
                  <h2>Sito Web</h2>
                </div>
                <p className="text-highlight">
                  Migliora l'immagine del tuo brand con un sito web
                  professionale.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles["service-content"]}>
                  <p>
                    Realizziamo siti web su misura, curati nei minimi dettagli
                    per rappresentare la tua azienda in modo professionale e
                    accattivante. Dalla struttura intuitiva al design
                    responsive, ogni elemento è pensato per offrire
                    un&apos;esperienza utente eccellente, migliorare la tua
                    visibilità online e rafforzare la tua identità di marca.
                  </p>
                  <ul>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Design personalizzato che riflette la tua identità
                        aziendale
                      </p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Navigazione ottimizzata per aumentare il tempo di
                        permanenza degli utenti
                      </p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Ottimizzazione per i motori di ricerca (SEO) per
                        migliorare il posizionamento
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.service}>
            <div className="row align-items-start g-4">
              <div class="col-12 col-lg-6">
                <div className={styles["service-header"]}>
                  <Image src={appIcon} alt="Sviluppo Applicazioni" />
                  <h2>Applicazioni Web</h2>
                </div>
                <p className="text-highlight">
                  Automatizza e ottimizza i processi aziendali con una web app
                  su misura.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles["service-content"]}>
                  <p>
                    Le nostre web app sono progettate per rispondere alle
                    esigenze specifiche della tua attività. Semplifica la
                    gestione dei processi interni, migliora l&apos;efficienza e
                    offri un&apos;esperienza interattiva ai tuoi clienti. Che tu
                    abbia bisogno di una piattaforma per gestire il team, per
                    interagire con i clienti o per analizzare i dati,
                    realizziamo soluzioni che semplificano il tuo lavoro.
                  </p>
                  <ul>
                    <li>
                      <span>✅</span>{" "}
                      <p>Progettazione user-friendly, intuitiva e fluida</p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>Funzionalità personalizzate e innovative</p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>Assistenza post-lancio e aggiornamenti costanti</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.service}>
            <div className="row align-items-start g-4">
              <div class="col-12 col-lg-6">
                <div className={styles["service-header"]}>
                  <Image src={cartIcon} alt="Sviluppo eCommerce" />
                  <h2>eCommerce</h2>
                </div>
                <p className="text-highlight">
                  Espandi il tuo business con una piattaforma eCommerce efficace
                  e sicura
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles["service-content"]}>
                  <p>
                    Apri le porte al mondo delle vendite online con una
                    soluzione eCommerce che si adatta al tuo brand e alle tue
                    esigenze. Offriamo piattaforme facili da gestire e sicure,
                    con funzioni avanzate per il controllo dell&apos;inventario,
                    dei pagamenti e delle spedizioni. Ti aiutiamo a raggiungere
                    più clienti, gestire le vendite e aumentare i profitti in
                    modo efficiente.
                  </p>
                  <ul>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Esperienza di acquisto ottimizzata per desktop e mobile
                      </p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>Integrazione con gateway di pagamento sicuri</p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Strumenti di gestione avanzati per ordini e inventario
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.service}>
            <div className="row align-items-start g-4">
              <div class="col-12 col-lg-6">
                <div className={styles["service-header"]}>
                  <Image src={upTrendIcon} alt="Digital Marketing" />
                  <h2>Digital Marketing</h2>
                </div>
                <p className="text-highlight">
                  Raggiungi nuovi clienti e costruisci una forte presenza online
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles["service-content"]}>
                  <p>
                    Il nostro approccio al digital marketing ti aiuta a
                    posizionare il tuo brand dove i tuoi clienti passano più
                    tempo: online. Attraverso strategie su misura, come SEO,
                    pubblicità PPC e social media marketing, lavoriamo per
                    aumentare la tua visibilità, migliorare il traffico al sito
                    e generare leads di qualità.
                  </p>
                  <ul>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Miglioramento della visibilità organica sui motori di
                        ricerca
                      </p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Campagne pubblicitarie mirate per massimizzare il ROI
                      </p>
                    </li>
                    <li>
                      <span>✅</span>{" "}
                      <p>
                        Rafforzamento della tua reputazione e credibilità online
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
