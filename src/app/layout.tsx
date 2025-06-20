import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guilhermeaguiar.me"),
  title: "Guilherme Ataide - Desenvolvedor Fullstack",
  description: "Desenvolvedor Frontend, apaixonado por tecnologia e inovação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-arp="">
      <body className={`${poppins.variable} font-sans`}>
        <header className="fixed flex justify-center top-0 left-0 w-full z-50 mx-auto">
          <Header />
        </header>
        <div className="h-16"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
