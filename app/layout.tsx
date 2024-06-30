"use client";
import Footer from "@/Components/Footer";
// app/layout.tsx
import { fonts } from "./fonts";
import { Providers } from "./providers";
import Header from "@/Components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.montserrat.variable}>
      <body>
        <div className="container mx-auto">
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
