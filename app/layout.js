import React from "react";
import GlobalStyles from "./_styles/GlobalStyles";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import BodyStructure from "./_components/BodyStructure";

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
    <>
      <GlobalStyles />
      <BodyStructure>{children}</BodyStructure>
    </>
  );
}
