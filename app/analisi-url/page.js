import styles from "./analysis.module.css";
import AnalysisResults from "@/components/analysis-results/analysis-results";

import { Suspense } from "react";

export default function AnalysisPage() {
  return (
      <main className={styles["analysis-page"]}>
        <Suspense fallback={<p>Loading...</p>}>
         <AnalysisResults />
        </Suspense>
      </main>
  );
}
