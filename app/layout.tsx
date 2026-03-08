import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/contexts/auth-context";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket for Sport",
  description:
    "Compare sport tickets and travel packages in seconds. Find the best prices on football, basketball, boxing and more – All from 100% guaranteed ticket sellers.",
  generator: "md shah aman patwary",
  icons: {
    icon: [
      {
        url: "/mini.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/mini.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/mini.png",
        type: "image/png",
      },
    ],
    apple: "/mini.png",
  },
};

import ClientLayout from "./client-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
