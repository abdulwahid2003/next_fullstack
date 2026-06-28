import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/Provider";
import { Oswald } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashsj",
  description: "1sksj",
};
const oswald = Oswald({subsets:["cyrillic-ext"]})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={oswald.className}
      >
        <body className="min-h-full flex flex-col">
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
