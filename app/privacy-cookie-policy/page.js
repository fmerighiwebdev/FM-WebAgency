import Link from "next/link";
import styles from "./privacy.module.css";

export default function PrivacyCookiePolicyPage() {
  return (
    <main className={styles["privacy-page"]}>
      <div className="container">
        <section className={styles["privacy-header"]}>
          <h1>Privacy e Cookie Policy</h1>
          <p>
            <em>Ultimo aggiornamento: 23/10/2024</em>
          </p>
          <p>
            La presente Privacy Policy descrive le modalità di raccolta,
            utilizzo, condivisione e protezione dei dati personali e i diritti
            degli utenti ai sensi del Regolamento UE 2016/679 (GDPR).
          </p>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Tipologie di Dati Raccolti</h2>
          <p>
            Durante la navigazione su fmwebagency.it, possono essere raccolti i
            seguenti dati:
          </p>
          <ul>
            <li>
              Dati di Navigazione: informazioni raccolte automaticamente dai
              sistemi informatici del sito, come indirizzi IP, tipo di browser,
              sistema operativo, URL di provenienza, ecc.
            </li>
            <li>
              Dati Forniti Volontariamente dall&apos;Utente: informazioni
              personali fornite attraverso moduli di contatto, come nome, email,
              numero di telefono e altre informazioni comunicate spontaneamente.
            </li>
            <li>
              Cookie: piccoli file di testo memorizzati nel dispositivo
              dell&apos;utente che possono raccogliere dati di navigazione per
              migliorare l&apos;esperienza utente (vedi sezione Cookie).
            </li>
          </ul>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Finalità del Trattamento</h2>
          <p>Vengono raccolti e trattati i dati per le seguenti finalità:</p>
          <ul>
            <li>
              Fornire i servizi richiesti dagli utenti, come la risposta a
              richieste di informazioni o preventivi.
            </li>
            <li>Migliorare la qualità del sito web e dei servizi offerti.</li>
            <li>Adempiere agli obblighi legali e contrattuali.</li>
            <li>Analisi statistiche (anonime) del traffico web.</li>
            <li>
              Gestione delle preferenze relative ai cookie (vedi sezione
              Cookie).
            </li>
          </ul>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Base Giuridica del Trattamento</h2>
          <p>
            Il trattamento dei dati si basa su una o più delle seguenti basi
            giuridiche:
          </p>
          <ul>
            <li>
              Consenso espresso dall&apos;utente (per esempio, nel caso di dati
              forniti volontariamente tramite moduli di contatto).
            </li>
            <li>Esecuzione di un contratto o pre-contratto.</li>
            <li>Adempimento di obblighi legali.</li>
            <li>Analisi statistiche (anonime) del traffico web.</li>
            <li>Legittimo interesse del titolare del trattamento.</li>
          </ul>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Condivisione dei Dati</h2>
          <p>
            I dati personali raccolti non verranno condivisi ne
            venduti a terze parti, a meno che ciò non sia necessario per fornire
            i servizi richiesti dall&apos;utente o per ottemperare a obblighi
            legali. I dati possono essere condivisi con:
          </p>
          <ul>
            <li>
              Fornitori di servizi tecnici necessari al funzionamento del sito
              (es. provider di hosting).
            </li>
            <li>Autorità competenti su richiesta legittima.</li>
          </ul>
          <p>
            Tutti i fornitori sono vincolati da accordi contrattuali che
            garantiscono il trattamento sicuro e conforme dei dati personali.
          </p>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Conservazione dei Dati</h2>
          <p>
            I dati personali sono conservati per il tempo necessario a
            soddisfare le finalità per cui sono stati raccolti, salvo
            diversamente richiesto dalla legge. In generale, i dati raccolti per
            finalità contrattuali o legali saranno conservati per 1 anno.
          </p>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Sicurezza dei Dati</h2>
          <p>
            Vengono adottate misure di sicurezza tecniche e organizzative
            appropriate per proteggere i dati personali da accessi non
            autorizzati, perdita, distruzione o alterazione. Tuttavia, nessun
            sistema di trasmissione o archiviazione dati è sicuro al 100%, e non
            possiamo garantire l&apos;assoluta sicurezza dei dati.
          </p>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Diritti dell&apos;Interessato</h2>
          <p>In conformità al GDPR, l&apos;utente ha il diritto di:</p>
          <ul>
            <li>Accedere ai propri dati personali.</li>
            <li>
              Richiedere la rettifica o l&apos;aggiornamento dei dati inesatti.
            </li>
            <li>
              Richiedere la cancellazione dei dati personali (diritto
              all&apos;oblio).
            </li>
            <li>Limitare il trattamento dei dati.</li>
            <li>Opporsi al trattamento, ove applicabile.</li>
            <li>
              Richiedere la portabilità dei dati in un formato strutturato e
              leggibile.
            </li>
            <li>
              Revocare il consenso in qualsiasi momento, senza pregiudicare la
              liceità del trattamento basato sul consenso prestato prima della
              revoca.
            </li>
          </ul>
          <p>
            Le richieste possono essere inviate attraverso il form alla seguente{" "}
            <Link href="/contatti">pagina</Link>.
          </p>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Cookie Policy</h2>
          <p>
            Il sito fmwebagency.it utilizza cookie per migliorare
            l&apos;esperienza dell&apos;utente. I cookie possono essere:
          </p>
          <ul>
            <li>
              Cookie Tecnici: necessari per il corretto funzionamento del sito.
            </li>
            <li>
              Cookie di Terze Parti: utilizzati per analisi statistiche anonime
              (es. Google Analytics) o per migliorare l&apos;interazione con
              piattaforme esterne (es. pulsanti di social media).
            </li>
          </ul>
          <p>
            L&apos;utente può gestire le preferenze sui cookie direttamente
            tramite le impostazioni del proprio browser o utilizzare il banner
            di gestione cookie presente sul sito per accettare o rifiutare
            specifiche categorie di cookie.
          </p>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Modifiche alla Privacy Policy</h2>
          <p>
            Ci riserviamo il diritto di aggiornare la presente Privacy Policy.
            Eventuali modifiche saranno comunicate agli utenti tramite il sito
            web o via email, ove necessario.
          </p>
        </section>
        <section className={styles["privacy-content"]}>
          <h2>Contatti</h2>
          <p>
            Per domande o richieste relative alla presente Privacy e Cookie
            Policy, è possibile contattarci FM WEB AGENCY tramite email
            compilando il form presente a questa{" "}
            <Link href="/contatti">pagina</Link> o scrivendo
            all&apos;indirizzo Via III Novembre, 6, Nogaredo (TN), 38060.
          </p>
        </section>
      </div>
    </main>
  );
}
