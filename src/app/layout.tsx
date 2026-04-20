// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { GeneralProvider } from "./contexts/generalContext";
import { LanguageProvider } from "./contexts/languageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Bullet",
  description: "Michael Bullet Portfolio",
  icons: { icon: "/bulletlogo.png" },
  openGraph: {
    title: "Michael Bullet",
    description: "FullStack Developer • Java • Ruby on Rails • Vue.js",
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
    description: "FullStack Developer • Java • Ruby on Rails • Vue.js",
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
      <body className={inter.className}>
        <LanguageProvider>
          <GeneralProvider>
            <Navigation />
            {children}
          </GeneralProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
