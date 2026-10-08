import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Choix du Cœur — Un petit test, beaucoup d’amour",
  description:
    "12 questions complices, un résultat qui vous ressemble et un petit défi à faire à deux. Parce que le cœur aussi aime bien les quiz.",
};

export const viewport: Viewport = {
  themeColor: "#faf6f2",
  width: "device-width",
  initialScale: 1,
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
