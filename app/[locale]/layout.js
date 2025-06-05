import React from "react";
import GlobalStyles from "../_styles/GlobalStyles";
import Robt from "../_components/Robt";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { plex } from "@/public/fonts/fonts";
import { isValidLocale } from "../../lib/i18n";
import { notFound } from 'next/navigation';
import { LanguageProvider } from "../_components/LanguageProvider";

export const metadata = {
  title: {
    template: "%s | Mdares",
    default: "Welcome To | Mdares",
  },
  description:
    "The biggest website for school reservations for your child",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  
  // تحقق من صحة اللغة
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <GlobalStyles />
      <body className={plex.className}>
        <LanguageProvider locale={locale}>
          <Robt />
          <Header />
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
