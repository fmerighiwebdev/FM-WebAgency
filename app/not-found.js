import styles from "./page.module.css";

import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className={styles["not-found-page"]}>
            <h1>404</h1>
            <p>Pagina non trovata</p>
            <Link href="/">
                Torna alla home
            </Link>
        </main>
    )
}