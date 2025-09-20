import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Accueil - Portfolio Laynaria",
  description: "Page d'accueil du portfolio de Laynaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
