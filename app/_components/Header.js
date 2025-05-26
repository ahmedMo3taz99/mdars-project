"use client";

import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import LogIn from "@/app/_components/LogIn";

import styled from "styled-components";

const HeaderStled = styled.header`
  padding: 4rem 0;
  position: absolute;
  left: 0;
  right: 0;
  overflow-x: clip;
  overflow-y: visible;
  background: var(--primary-color);
`;

const HeaderSR = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderStled>
      <div className="container">
        <HeaderSR>
          <Logo />
          <Navigation />
          {/* <LogIn /> */}
        </HeaderSR>
      </div>
    </HeaderStled>
  );
}
