import axios from "axios";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function POST(request) {
  const analysisData = await request.json();

  if (!analysisData.name || !analysisData.company || !analysisData.websiteURL) {
    return NextResponse.json({
      message: "Tutti i campi obbligatori vanno compilati.",
      status: "error",
    });
  }

  if (!analysisData.privacy) {
    return NextResponse.json({
      message: "Devi accettare i termini e le condizioni.",
      status: "error",
    });
  }

  if (
    !analysisData.websiteURL.startsWith("http") ||
    !analysisData.websiteURL.includes(".")
  ) {
    return NextResponse.json({
      message: "Inserisci un URL valido.",
      status: "error",
    });
  }

  console.log(analysisData);
  return NextResponse.json({ status: "success" });
}

export async function GET(request) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({
      message: "Inserisci un URL valido.",
      status: "error",
    });
  }

  const API_KEY = process.env.PSI_API_KEY;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${API_KEY}&category=performance&category=seo&category=best-practices&category=accessibility`,
      { timeout: 60000 }
    );

    return NextResponse.json({ results: response.data, status: "success" });
  } catch (err) {
    console.error("Error fetching analysis data:", err);
    return NextResponse.json({
      message: "Si è verificato un errore. Riprova più tardi.",
      status: "error",
    });
  }
}
