"use client";

import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import LogIn from "@/app/_components/LogIn";

import styled from "styled-components";

const HeaderStled = styled.header`
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;

export default function Header() {
  return (
    <HeaderStled>
      <Logo />
      <Navigation />
      <LogIn />
    </HeaderStled>
  );
}
