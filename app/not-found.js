import styles from "./page.module.css";

import Link from "next/link";

export const metadata = {
    title: "Pagina Non Trovata - FM Web Agency",
    description: "La pagina che stai cercando non esiste o è stata spostata." 
}

export default function NotFoundPage() {
    return (
        <main className={styles["not-found-page"]}>
            <div className={styles["not-found-header"]}>
                <h1>404</h1>
                <p>Pagina non trovata</p>
            </div>
            <Link href="/">
                Torna alla home
            </Link>
        </main>
    )
}