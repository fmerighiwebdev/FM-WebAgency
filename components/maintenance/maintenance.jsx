import Image from "next/image";
import styles from "./maintenance.module.css";
import logo from "@/assets/fm-logo.svg";

export default function Maintenance() {
  return (
    <section className={styles["maintenance-section"]}>
      <Image src={logo} alt="FM Web Agency Logo" />
      <h1>MANUTENZIONE IN CORSO...</h1>
      <p>
        Ciao! Stiamo lavorando per offrirti un&apos;esperienza ancora migliore!
        🫡 <br></br>
        <br></br>
        Il nostro sito è temporaneamente offline per manutenzione, ma torneremo
        online al più presto! <br></br>
        Grazie per la tua pazienza e comprensione.
        <br></br>
        <br></br>
        Se hai bisogno di assistenza immediata, non esitare a contattarci a
        questo{" "}
        <a href="mailto:fmwebagencysolutions@gmail.com">indirizzo email</a> o
        sui nostri canali social.
      </p>
      <p><strong>A presto! Il team di fmwebagency.it</strong></p>
    </section>
  );
}
