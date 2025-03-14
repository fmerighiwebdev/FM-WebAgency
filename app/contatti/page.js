import styles from "./contacts.module.css";
import Form from "@/components/form/form";

export const metadata = {
    title: "Contatti - FM Web Agency",
    description: "Hai un progetto in mente? Contattaci per trasformare le tue idee in realtà. Compila il modulo o contattaci direttamente via email o telefono.",
};

export default function ContactsPage() {
    return (
        <main className={`${styles["contacts-page"]}`}>
            <section className="container">
            <div className={`${styles["contacts-columns"]} row align-items-center`}>
                <div className={`col-12 col-lg-6 ${styles["contacts-content"]}`}>
                    <h1>Hai un progetto in mente? Parliamone!</h1>
                    <p className="text-highlight">
                        Siamo qui per ascoltarti e aiutarti a trasformare le tue idee in realtà.
                    </p>
                    <p className={styles["contacts-section-text"]}>
                        Compila il seguente modulo o contattaci 
                        direttamente via email o telefono, e ti risponderemo il prima possibile. 
                        Non vediamo l&apos;ora di lavorare insieme!
                    </p>
                </div>
                <div className={`col-12 col-lg-6 d-flex justify-content-center ${styles["contacts-form-container"]}`}>
                    <Form />
                </div>
            </div>
            </section>
        </main>
    );
}