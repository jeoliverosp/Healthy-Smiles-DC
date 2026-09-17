import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Chatbox from "@/components/chatbox";
import JsonLd, { dentalClinicSchema } from "@/components/json-ld";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Healthy Smiles Dental Care | Family & Cosmetic Dentistry in Maryland",
  description:
    "Healthy Smiles Dental Care provides general, family and cosmetic dentistry in Silver Spring, Rockville, and College Park, MD. Call us to schedule your appointment.",
  keywords: [
    "dentist",
    "dental care",
    "family dentistry",
    "cosmetic dentistry",
    "Silver Spring",
    "Rockville",
    "College Park",
    "Maryland",
    "dental implants",
    "orthodontics",
    "emergency dentist",
  ],
  openGraph: {
    title: "Healthy Smiles Dental Care",
    description:
      "Family & Cosmetic Dentistry in Maryland. 5 convenient locations.",
    url: "https://hsdentalmd.com",
    siteName: "Healthy Smiles Dental Care",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd data={dentalClinicSchema} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbox />
      </body>
    </html>
  );
}
