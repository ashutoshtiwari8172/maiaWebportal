import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Maia",
  description: "Maia is a disrupting tech in passwordless authentication. Maia's novel architecture offers a seamless (stealthy) authorization experience for the users. Moreover, Maia ensures security even if user credentials are compromised; hence there are no harmful consequences of user corruption or phishing attacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <main>
        {children}
      </main>
      <Footer />




    </html>
  );
}
