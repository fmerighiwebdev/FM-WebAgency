"use client";

import styles from "./analysis.module.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function AnalysisPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      async function fetchAnalysis() {
        try {
          const response = await axios.get(`/api/analysis?url=${url}`);
          console.log(response.data);
          setAnalysis(response.data);
        } catch (err) {
          console.error(err);
        }
      }

    fetchAnalysis();
  }}, [url]);

  const lightHouseResults = analysis?.results.lighthouseResult;

  let performanceScore, seoScore, bestPracticesScore, accessibilityScore;

  if (analysis) {
    performanceScore =
      Math.round(lightHouseResults.categories.performance.score * 100);
    seoScore =
      Math.round(lightHouseResults.categories.seo.score * 100);
    bestPracticesScore =
      Math.round(lightHouseResults.categories["best-practices"].score *
      100);
    accessibilityScore =
      Math.round(lightHouseResults.categories.accessibility.score * 100);
  }

  const avgScore = Math.round(
    (performanceScore + seoScore + bestPracticesScore + accessibilityScore) / 4
  );

  const cssPerformanceClasses =
    performanceScore >= 90
      ? `${styles.score} ${styles.good}`
      : performanceScore >= 70
      ? `${styles.score} ${styles.ok}`
      : `${styles.score} ${styles.bad}`;
  const cssSeoClasses =
    seoScore >= 90
      ? `${styles.score} ${styles.good}`
      : seoScore >= 70
      ? `${styles.score} ${styles.ok}`
      : `${styles.score} ${styles.bad}`;
  const cssBestPracticesClasses =
    bestPracticesScore >= 90
      ? `${styles.score} ${styles.good}`
      : bestPracticesScore >= 70
      ? `${styles.score} ${styles.ok}`
      : `${styles.score} ${styles.bad}`;
  const cssAccessibilityClasses =
    accessibilityScore >= 90
      ? `${styles.score} ${styles.good}`
      : accessibilityScore >= 70
      ? `${styles.score} ${styles.ok}`
      : `${styles.score} ${styles.bad}`;

  return (
    <main className={styles["analysis-page"]}>
      <section className="container">
        <div className={styles["analysis-header"]}>
          <h1>Analisi URL</h1>
          <h2>{url}</h2>
        </div>
        <div className={styles["analysis-content"]}>
          {analysis ? (
            <div className={styles["analysis-results"]}>
              <div className={styles["analysis-results-grid"]}>
                <div className={styles["lighthouse-card"]}>
                  <h3>Performance</h3>
                  <p className={cssPerformanceClasses}>{performanceScore}</p>
                  <p>
                    Indica la velocità di caricamento del sito e l&apos;efficienza
                    complessiva.
                  </p>
                </div>
                <div className={styles["lighthouse-card"]}>
                  <h3>SEO</h3>
                  <p className={cssSeoClasses}>{seoScore}</p>
                  <p>
                    Misura quanto il sito è ottimizzato per essere trovato sui
                    motori di ricerca.
                  </p>
                </div>
                <div className={styles["lighthouse-card"]}>
                  <h3>Best Practices</h3>
                  <p className={cssBestPracticesClasses}>
                    {bestPracticesScore}
                  </p>
                  <p>
                    Rappresenta l&apos;adesione agli standard di sviluppo web e
                    sicurezza.
                  </p>
                </div>
                <div className={styles["lighthouse-card"]}>
                  <h3>Accessibilità</h3>
                  <p className={cssAccessibilityClasses}>
                    {accessibilityScore}
                  </p>
                  <p>
                    Valuta quanto il sito sia facilmente utilizzabile da tutti
                    gli utenti, inclusi quelli con disabilità.
                  </p>
                </div>
              </div>
              <div className={styles["analysis-results-summary"]}>
                {avgScore >= 90 ? (
                  <div className={styles["avg-score"]}>
                    <p className={styles["avg-score-title"]}>
                      Il tuo sito web ha un punteggio medio di{" "}
                      <span className={`${styles.score} ${styles.good}`}>
                        {avgScore}
                      </span>
                    </p>
                    <p className={styles["avg-score-description"]}>
                      Gli utenti ottengono un'esperienza ottimale, il sito web è
                      ben ottimizzato per le prestazioni, accessibile a un'ampia
                      gamma di utenti, sicuro e rilevabile dai motori di
                      ricerca.
                    </p>
                  </div>
                ) : avgScore >= 70 ? (
                  <div className={styles["avg-score"]}>
                    <p className={styles["avg-score-title"]}>
                      {" "}
                      Il tuo sito web ha un punteggio medio di{" "}
                      <span className={`${styles.score} ${styles.ok}`}>
                        {avgScore}
                      </span>
                    </p>
                    <p className={styles["avg-score-description"]}>
                      Il sito web funziona, ma potrebbe beneficiare di
                      un'ulteriore ottimizzazione in uno o più ambiti.
                    </p>
                  </div>
                ) : (
                  <div className={styles["avg-score"]}>
                    <p className={styles["avg-score-title"]}>
                      Il tuo sito web ha un punteggio medio di{" "}
                      <span className={`${styles.score} ${styles.bad}`}>
                        {avgScore}
                      </span>
                    </p>
                    <p className={styles["avg-score-description"]}>
                      Il sito web è probabilmente lento, difficile da utilizzare per
                      alcuni tipi di pubblico e manca di importanti best
                      practices per la sicurezza e/o l'accessibilità, richiedendo una
                      strategia di ottimizzazione più completa.
                    </p>
                  </div>
                )}
              </div>
              {avgScore >= 70 && avgScore < 90 && (
                <div
                  className={`${styles["analysis-cta"]} ${styles["warning"]}`}
                >
                  <p>
                    Hai appena eseguito un'analisi del tuo sito web e i
                    risultati non sono male, ma sai che potresti ottenere ancora
                    di più? 😊
                  </p>
                  <p>
                    Prenota una <strong>consulenza gratuita</strong> con il
                    nostro team e ti mostreremo come possiamo aiutarti a
                    sviluppare un sito web che sia davvero il top in termini di
                    velocità, usabilità e visibilità. Non accontentarti di buoni
                    risultati, punta all'eccellenza! 💪
                  </p>
                  <Link href="/contatti">
                    Richiedi una consulenza gratuita
                  </Link>
                </div>
              )}
              {avgScore < 70 && (
                <div
                  className={`${styles["analysis-cta"]} ${styles["danger"]}`}
                >
                  <p>
                    L'analisi del tuo sito web ha rilevato alcuni problemi
                    importanti: con un punteggio sotto i 70, il sito non sta
                    performando come dovrebbe. Ma non preoccuparti, siamo qui
                    per aiutarti! 😉
                  </p>
                  <p>
                    <strong>
                      Non lasciare che un sito lento o inefficiente danneggi la
                      tua immagine online!
                    </strong>{" "}
                    Prenota una consulenza gratuita e insieme valuteremo come
                    migliorare drasticamente le prestazioni andando a sviluppare
                    un sito web che si carica in un batter d'occhio,
                    perfettamente ottimizzato per i motori di ricerca e che
                    offra un'esperienza fluida e accessibile a tutti i tuoi
                    utenti. 💪
                  </p>
                  <Link href="/contatti">
                    Richiedi una consulenza gratuita
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="loading-spinner">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          {error && <p className="error-message">{error} <br></br> Indirizzo URL non trovato.</p>}
        </div>
      </section>
    </main>
  );
}
