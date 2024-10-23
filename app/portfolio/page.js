import styles from "./portfolio.module.css";
import logo from "../../assets/fm-logo.svg";

import Image from "next/image";

export default function PortfolioPage() {
    return (
        <main className={`${styles["maintenance-page"]} ${styles["portfolio-page"]}`}>
            <Image src={logo} alt="Logo" width={200} height={200} />
            <h1>IN AGGIORNAMENTO...</h1>
        </main>
    )
}