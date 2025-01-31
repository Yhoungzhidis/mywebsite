import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Esug E-learning Platform",
  description: "A platform for Engineering Students in the University of Ghana",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/android-chrome-192x192.png",
        href: "/android-chrome-192x192.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/android-chrome-192x192.png",
        href: "/android-chrome-192x192.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Sans.className} "max-w-screen overflow-clip" `}
      >
          {children}
      </body>
    </html>
  );
}