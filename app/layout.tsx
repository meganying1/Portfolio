import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { pageTitle, site } from "@/lib/site";
import "@/styles/tokens.css";
import "@/styles/globals.css";

// Computer Modern (CMU Serif, SIL OFL), subset to Latin.
const computerModern = localFont({
  src: [
    { path: "./fonts/cmu-serif-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cmu-serif-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cmu-serif-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-cm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: pageTitle("%s") },
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={computerModern.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
