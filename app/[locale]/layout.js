import React from "react";
import GlobalStyles from "../_styles/GlobalStyles";
import Robt from "../_components/Robt";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { isValidLocale } from "../../lib/i18n";
import { notFound } from "next/navigation";
import { LanguageProvider } from "../_components/LanguageProvider";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // تحقق من صحة اللغة
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <GlobalStyles />
      <LanguageProvider locale={locale}>
        <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
          <Robt />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
}
