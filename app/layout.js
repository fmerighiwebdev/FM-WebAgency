import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Script from "next/script";

import BootstrapClient from "../components/bootstrapclient";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Maintenance from "@/components/maintenance/maintenance";
import AOSClient from "@/components/aosclient";

export const metadata = {
  title: "FM Web Agency",
  description:
    "Accelera la crescita del tuo business con SOLUZIONI WEB SU MISURA che portano risultati concreti."
};

const isMaintenance = true;

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <Script
          src="https://cdn-cookieyes.com/client_data/683bf24b15ab8621d974e7b8/script.js"
          strategy="beforeInteractive"
        ></Script>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {isMaintenance ? (
          <Maintenance />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
            <AOSClient />
            <BootstrapClient />
          </>
        )}
      </body>
    </html>
  );
}
