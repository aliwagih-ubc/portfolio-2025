import type { Metadata } from "next";
import { Inter } from "next/font/google"; // focused on clean, neutral look
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ali Wagih | Engineer & AI Builder",
  description: "Civil engineer turned software engineer. Building AI solutions for the physical world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "antialiased min-h-screen font-sans bg-background text-foreground flex flex-col",
          inter.variable
        )}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
