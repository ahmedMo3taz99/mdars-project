import React from "react";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import GlobalStyles from "./_styles/GlobalStyles";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s | Mdares",
    default: "Welcome To |  Mdares",
  },
  // for SEO
  description:
    "this web site is the bigest website to reservation to your child in any school you want",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
        <footer>the footer</footer>
      </body>
    </html>
  );
}
