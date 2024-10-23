import Image from "next/image";

import logo from "../../assets/fm-logo.svg";
import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <main className={`${styles["maintenance-page"]} ${styles["about-us-page"]}`}>
            <Image src={logo} alt="Logo" width={200} height={200} />
            <h1>IN AGGIORNAMENTO...</h1>
        </main>
    )
}