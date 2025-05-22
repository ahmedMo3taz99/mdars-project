"use client";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Body = styled.div`
  background-color: var(--color-grey-200);
`;

export default function BodyStructure({ children }) {
  return (
    <html lang="ar" dir="rtl">
       <Body as="body">
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </Body>
    </html>
  );
}
