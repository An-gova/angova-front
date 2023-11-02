import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Angova`,
  description:
    "Angova est une application permettant d'apprendre le code de la route français en plusieurs langues. Anglais, Espagnol, Marrocain, et Portugais sont les langues disponibles pour le moment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
