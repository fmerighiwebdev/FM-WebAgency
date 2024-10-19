"use client";

import styles from "./analysis.module.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

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
          setLoading(true);
          const response = await axios.get(`/api/analysis?url=${url}`);
          console.log(response.data);

          if (response.data.status === "error") {
            setError(response.data.message);
            setLoading(false);
            return;
          }

          setAnalysis(response.data);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          console.error(err);
        }
      }

      fetchAnalysis();
    }
  }, [url]);

  let performanceScore, seoScore, bestPracticesScore, accessibilityScore;

  if (analysis) {
    performanceScore =
      analysis.results.lighthouseResult.categories.performance.score * 100;
    seoScore = analysis.results.lighthouseResult.categories.seo.score * 100;
    bestPracticesScore =
      analysis.results.lighthouseResult.categories["best-practices"].score *
      100;
    accessibilityScore =
      analysis.results.lighthouseResult.categories.accessibility.score * 100;
  }

  const cssPerformanceClasses =
    performanceScore >= 90
      ? `${styles.score} ${styles.good}`
      : performanceScore >= 50
      ? `${styles.score} ${styles.ok}`
      : `${styles.score} ${styles.bad}`;
  const cssSeoClasses =
    seoScore >= 90
      ? `${styles.score} ${styles.good}`
      : seoScore >= 50
      ? `${styles.score} ${styles.ok}`
      : `${styles.score} ${styles.bad}`;
  const cssBestPracticesClasses =
    bestPracticesScore >= 90
      ? `${styles.score} ${styles.good}`
      : bestPracticesScore >= 50
      ? `${styles.score} ${styles.ok}`
      : `${styles.score} ${styles.bad}`;
  const cssAccessibilityClasses =
    accessibilityScore >= 90
      ? `${styles.score} ${styles.good}`
      : accessibilityScore >= 50
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
          {analysis && (
            <div className={styles["analysis-results"]}>
              <div className={styles["analysis-results-grid"]}>
                <div className={styles["lighthouse-card"]}>
                  <h3>Performance</h3>
                  <p className={cssPerformanceClasses}>
                    {analysis.results.lighthouseResult.categories.performance
                      .score * 100}
                  </p>
                  <p>
                    Indica la velocità di caricamento del sito e l'efficienza
                    complessiva.
                  </p>
                </div>
                <div className={styles["lighthouse-card"]}>
                  <h3>SEO</h3>
                  <p className={cssSeoClasses}>
                    {analysis.results.lighthouseResult.categories.seo.score *
                      100}
                  </p>
                  <p>
                    Misura quanto il sito è ottimizzato per essere trovato sui
                    motori di ricerca.
                  </p>
                </div>
                <div className={styles["lighthouse-card"]}>
                  <h3>Best Practices</h3>
                  <p className={cssBestPracticesClasses}>
                    {analysis.results.lighthouseResult.categories[
                      "best-practices"
                    ].score * 100}
                  </p>
                  <p>
                    Rappresenta l'adesione agli standard di sviluppo web e
                    sicurezza.
                  </p>
                </div>
                <div className={styles["lighthouse-card"]}>
                  <h3>Accessibilità</h3>
                  <p className={cssAccessibilityClasses}>
                    {analysis.results.lighthouseResult.categories.accessibility
                      .score * 100}
                  </p>
                  <p>
                    Valuta quanto il sito sia facilmente utilizzabile da tutti
                    gli utenti, inclusi quelli con disabilità.
                  </p>
                </div>
              </div>
            </div>
          )}
          {loading && (
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
