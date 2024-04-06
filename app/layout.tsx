import localFont from 'next/font/local'
import type { Metadata } from "next";
import './globals.css'






export const metadata: Metadata = {
  title: "Maia",
  description: "Maia is a disrupting tech in passwordless authentication. Maia's novel architecture offers a seamless (stealthy) authorization experience for the users. Moreover, Maia ensures security even if user credentials are compromised; hence there are no harmful consequences of user corruption or phishing attacks.",
};
const PPObjectSans = localFont({
  src: [
    {
      path: './assets/PPObjectSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/PPObjectSans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/PPObjectSans-Semibold.woff',
      weight: '600',
      style: 'normal',
    },

  ],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={PPObjectSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <main>
        {children}
      </main>





    </html>
  );
}
