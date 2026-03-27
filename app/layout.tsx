import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import PlanBadge from "@/components/common/plan-badge";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Suspense } from "react";
const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summarix - AI-powered summarization tool",
  description:
    "Summarix transforms long articles into concise summaries with our advanced AI technology",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`font-sans ${fontSans.variable} ${robotoFlex.variable} antialiased`}
        >
          <div className="relative flex flex-col min-h-screen">
            <Header 
              planBadge={
                <Suspense fallback={<div className="w-16 h-6 animate-pulse bg-slate-200 rounded-full ml-2"></div>}>
                  <PlanBadge />
                </Suspense>
              } 
            />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
