import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokémon App",
  description: "A Next.js Pokémon API project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
