import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TUZA fly — Connecter le monde",
  description: "Un espace pour découvrir, partager et créer des communautés.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
