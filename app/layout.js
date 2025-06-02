import React from "react";
import BodyStructure from "./_components/BodyStructure";
import GlobalStyles from "./_styles/GlobalStyles";

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