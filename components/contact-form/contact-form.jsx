"use client";

import FormInput from "../form-input/form-input";
import styles from "./contact-form.module.css";

import Link from "next/link";
import { useRef, useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const privacyRef = useRef(false);

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
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
        setIsSending(false);
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

  return (
    <form className={styles["contacts-form"]} onSubmit={handleSubmit}>
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
            <div class="spinner-grow spinner-grow-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Invia"
          )}
        </button>
      )}
    </form>
  );
}
