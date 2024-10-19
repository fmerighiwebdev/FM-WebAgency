"use client";

import FormInput from "../form-input/form-input";
import styles from "./form.module.css";

import Link from "next/link";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Form({ type }) {
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const privacyRef = useRef(false);
  const websiteURLRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  async function handleAnalysisSubmit(e) {
    setIsSending(true);
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      websiteURL: websiteURLRef.current.value,
      privacy: privacyRef.current.checked,
    };

    try {
      const response = await axios.post("/api/analysis", formData);

      console.log(response.data);

      if (response.data.status === "error") {
        setError(response.data.message);
      }

      if (response.data.status === "success") {
        setError(null);
        router.push(`/analisi-url/?url=${encodeURIComponent(formData.websiteURL)}`);
      }

      setIsSending(false);
    } catch (err) {
      console.error(err);
      setIsSending(false);
    }
  }

  async function handleContactSubmit(e) {
    setIsSending(true);
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
      privacy: privacyRef.current.checked,
    };

    try {
      const response = await axios.post("/api/send-email", formData);

      console.log(response.data);

      if (response.data.status === "error") {
        setError(response.data.message);
      }

      if (response.data.status === "success") {
        setIsSent(true);
        setError(null);
      }

      setIsSending(false);
    } catch (err) {
      console.error(err);
      setIsSending(false);
    }

    nameRef.current.value = "";
    companyRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
    privacyRef.current.checked = false;
  }

  if (type === "analysis") {
    return (
      <form className={styles["analysis-form"]} onSubmit={handleAnalysisSubmit}>
        <div className={styles["input-block-triple"]}>
          <FormInput type="text" name="name" ref={nameRef}>
            Nome *
          </FormInput>
          <FormInput type="text" name="company" ref={companyRef}>
            Azienda *
          </FormInput>
          <FormInput type="text" name="website" ref={websiteURLRef}>
            URL Sito Web *
          </FormInput>
        </div>
        <div className={styles["privacy-input-block"]}>
          <input type="checkbox" id="privacy" name="privacy" ref={privacyRef} />
          <label htmlFor="privacy">
            Accetto le condizioni indicate nella{" "}
            <Link href="/privacy-cookie-policy">privacy policy</Link>
          </label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">
          {isSending ? (
            <div
              className="spinner-grow spinner-grow-sm text-light"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "AVVIO ANALISI"
          )}
        </button>
      </form>
    );
  }

  return (
    <form className={styles["contacts-form"]} onSubmit={handleContactSubmit}>
      <div className={styles["input-block-double"]}>
        <FormInput type="text" name="name" ref={nameRef}>
          Nome *
        </FormInput>
        <FormInput type="text" name="company" ref={companyRef}>
          Azienda *
        </FormInput>
      </div>
      <div className={styles["input-block-double"]}>
        <FormInput type="email" name="email" ref={emailRef}>
          Email *
        </FormInput>
        <FormInput type="tel" name="phone" ref={phoneRef}>
          Telefono *
        </FormInput>
      </div>
      <FormInput name="message" ref={messageRef}>
        Note aggiuntive *
      </FormInput>
      <div className={styles["privacy-input-block"]}>
        <input type="checkbox" id="privacy" name="privacy" ref={privacyRef} />
        <label htmlFor="privacy">
          Accetto le condizioni indicate nella{" "}
          <Link href="/privacy-cookie-policy">privacy policy</Link>
        </label>
      </div>
      {error && <p className="error-message">{error}</p>}
      {isSent ? (
        <p className="success-message">Messaggio inviato con successo!</p>
      ) : (
        <button type="submit">
          {isSending ? (
            <div className="spinner-grow spinner-grow-sm text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Invia"
          )}
        </button>
      )}
    </form>
  );
}
