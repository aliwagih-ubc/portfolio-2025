import type { Metadata } from "next";
import { Inter, Handjet, DM_Mono, Just_Me_Again_Down_Here } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const hand = Just_Me_Again_Down_Here({
  variable: "--font-hand-google",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ali Wagih | Engineer & AI Builder",
  description:
    "Civil engineer turned software builder. Founder of Manara Ventures, building practical AI tools for construction, operations, and finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Font vars must live on <html>: the @theme font chains resolve at :root,
      // so vars declared lower (on body) never make it into the computed values.
      className={cn(
        "scroll-smooth",
        inter.variable,
        handjet.variable,
        dmMono.variable,
        hand.variable
      )}
    >
      <body className="antialiased min-h-screen font-sans bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1 grid-paper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
