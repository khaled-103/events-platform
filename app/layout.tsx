import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted_grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Events Platform App",
  description: "An application to manage and view events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.className} bg-neutral-950 text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}