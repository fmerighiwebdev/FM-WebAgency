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
        <button>Sputtan dio</button>
      </section>
    </main>
  );
}
