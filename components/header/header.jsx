"use client";

import styles from "@/components/header/header.module.css";
import logo from "@/assets/fm-logo.svg";
import igLogo from "@/assets/ig-logo.svg";
import emailIcon from "@/assets/envelope.svg";
import phoneIcon from "@/assets/phone.svg";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cssHeaderClasses = isScrolled
    ? `${styles.header} ${styles["header-scrolled"]}`
    : styles.header;

  const cssHamburgerClasses = isMenuOpen
    ? `${styles.hamburger} ${styles.active}`
    : styles.hamburger;

  return (
    <header className={cssHeaderClasses}>
      <div className={`container ${styles["header-container"]}`}>
        <Link href="/">
          <Image
            src={logo}
            className={styles["header-logo"]}
            alt="FM WEB AGENCY LOGO"
          ></Image>
        </Link>
        <nav className={styles["header-nav"]}>
          <Link href="/servizi">Servizi</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/contatti">Contatti</Link>
        </nav>
        <div className={cssHamburgerClasses} onClick={handleMenuOpen}>
          <div className={styles["hamburger-line"]}></div>
          <div className={styles["hamburger-line"]}></div>
          <div className={styles["hamburger-line"]}></div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={styles["header-mobile-nav"]}
            >
              <Link href="/">
                <Image
                  src={logo}
                  className={styles["header-mobile-logo"]}
                  alt="FM WEB AGENCY LOGO"
                ></Image>
              </Link>
              <div>
                <Link href="/servizi" onClick={handleMenuOpen}>Servizi</Link>
                <Link href="/portfolio" onClick={handleMenuOpen}>Portfolio</Link>
                <Link href="/chi-siamo" onClick={handleMenuOpen}>Chi siamo</Link>
                <Link href="/contatti" onClick={handleMenuOpen}>Contatti</Link>
              </div>
              <div className={`${styles["header-mobile-social"]}`}>
                <a
                  href="https://www.instagram.com/fm.webagency"
                  target="_blank"
                >
                  <Image src={igLogo} alt="PAGINA INSTAGRAM FM WEB AGENCY" />
                </a>
                <a href="mailto:francescomerighi61@gmail.com">
                  <Image src={emailIcon} alt="EMAIL FM WEB AGENCY" />
                </a>
                <a href="tel:3426476626">
                  <Image src={phoneIcon} alt="TELEFONO FM WEB AGENCY" />
                </a>
              </div>
            </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
