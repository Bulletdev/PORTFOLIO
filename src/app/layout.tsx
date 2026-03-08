// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import EmbedediFrame from "./components/EmbedediFrame";
import { GeneralProvider } from "./contexts/generalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Bullet",
  description: "Michael Bullet Portfolio",
  openGraph: {
    title: "Michael Bullet",
    description: "Desenvolvedor FullStack • Java • Ruby on Rails • Vue.js ",
    url: "https://michaelbullet.dev",
    siteName: "Michael Bullet Portfolio",
    images: [
      {
        url: "https://michaelbullet.dev/preview.png",
        width: 1340,
        height: 860,
        alt: "Michael Bullet Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Bullet",
    description: "Desenvolvedor FullStack • Java • Ruby on Rails • Vue.js ",
    images: ["https://michaelbullet.dev/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/luan.jpg" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <GeneralProvider>
          <Navigation />
          {children}
          {/* <EmbedediFrame /> */}
        </GeneralProvider>
      </body>
    </html>
  );
}
