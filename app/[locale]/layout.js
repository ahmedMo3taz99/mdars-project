import React from "react";
import Robt from "../_components/Robt";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { isValidLocale } from "../../lib/i18n";
import { notFound } from "next/navigation";
import { LanguageProvider } from "../_components/LanguageProvider";

export const metadata = {
  title: {
    template: "%s | Mdares",
    default: "Welcome To | Mdares",
  },
  description: "The biggest website for school reservations for your child",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // تحقق من صحة اللغة
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <LanguageProvider locale={locale}>
        <Robt />
        <Header />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}
