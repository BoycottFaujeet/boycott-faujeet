import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Boycott Faujeet - گولی کیوں چلائی ",
  description: "Boycott Faujeet is a platform dedicated to raising awareness about the oppressive practices of military elites in Pakistan and their exploitation of the nation's resources. This app empowers users to make informed decisions by boycotting businesses controlled or influenced by these entities, while supporting ethical and local alternatives. Join the movement to stand against oppression and advocate for a fairer, resource-equitable Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
