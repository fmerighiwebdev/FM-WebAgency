import styles from "./services.module.css";

import Image from "next/image";
import logo from "../../assets/fm-logo.svg";

export default function ServicesPage() {
    return (
        <main className={`${styles["maintenance-page"]} ${styles["services-page"]}`}>
            <Image src={logo} alt="Logo" width={200} height={200} />
            <h1>IN AGGIORNAMENTO...</h1>
        </main>
    )
}