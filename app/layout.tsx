import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  icons: [
    {
      url: "/tesoura.ico",
      type: "icon",
    },
  ],
  title: "Dom Ramon Barbearia",
  description: "Site para o dom ramon barberia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main id="root" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
