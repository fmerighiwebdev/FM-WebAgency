import styles from "@/components/footer/footer.module.css";
import logo from "@/assets/fm-logo.svg";
import igLogo from "@/assets/ig-logo.svg";
import emailIcon from "@/assets/envelope.svg";
import phoneIcon from "@/assets/phone.svg";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`row ${styles["footer-columns"]}`}>
          <div className={`col ${styles["footer-info"]}`}>
            <Image src={logo} alt="FM WEB AGENCY LOGO" />
            <div>
              <p>
                <span>FM WEB AGENCY</span>
              </p>
              <p>di Francesco Merighi</p>
              <p>Via III Novembre, 6</p>
              <p>Nogaredo (TN)</p>
              <p>
                <strong>P.IVA: IT02721170229</strong>
              </p>
            </div>
          </div>
          <div className={`col ${styles["footer-links"]}`}>
            <h4>Link Utili</h4>
            <ul>
              <li>
                <a href="/services">Servizi</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/about">Chi siamo</a>
              </li>
              <li>
                <a href="/contacts">Contatti</a>
              </li>
              <li>
                <Link href="/privacy-cookie-policy">Privacy & Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className={`col ${styles["footer-social"]}`}>
            <a href="https://www.instagram.com/fm.webagency" target="_blank">
              <Image src={igLogo} alt="PAGINA INSTAGRAM FM WEB AGENCY" />
            </a>
            <a href="mailto:francescomerighi61@gmail.com">
              <Image src={emailIcon} alt="EMAIL FM WEB AGENCY" />
            </a>
            <a href="tel:3426476626">
              <Image src={phoneIcon} alt="TELEFONO FM WEB AGENCY" />
            </a>
          </div>
        </div>
        <p className={styles["footer-caption"]}>
          Sviluppo, innovazione e strategia per un <span>successo online</span>{" "}
          senza limiti.
        </p>
        <p className={styles["copy-text"]}>FM Web Agency © {year}</p>
      </div>
    </footer>
  );
}
