import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Regliao — AI-assisted STR drafting for Canadian credit unions and MSBs",
  description:
    "Draft FINTRAC-ready STR narratives, triage alerts, and consolidate case context. Built in Canada. Hosted in Canada. Human always reviews and submits.",
  metadataBase: new URL("https://www.regliao.ca"),
  openGraph: {
    title: "Regliao — AI-assisted compliance for Canadian credit unions and MSBs",
    description:
      "Draft FINTRAC-ready STR narratives. Hosted in Canada. Human always reviews and submits.",
    url: "https://www.regliao.ca",
    siteName: "Regliao",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regliao — AI-assisted compliance for Canadian credit unions and MSBs",
    description:
      "Draft FINTRAC-ready STR narratives. Hosted in Canada. Human always reviews and submits.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
