"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";

// ========== Animations ==========

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
`;

// ========== Styled Components ==========

const Main = styled.main`
  background-color: var(--color-grey-900);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-200);
  padding: 2rem;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-in;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-top: 2rem;
  animation: ${fadeIn} 1s ease-in forwards;
`;

const StyledLink = styled(Link)`
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  padding: 1.5rem 4rem;
  margin-top: 3rem;
  border-radius: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

// ========== Component ==========

function NotFound() {
  return (
    <Main>
      <Title>Oops! This page could not be found 😢</Title>

      <StyledLink href="/">Go back home</StyledLink>
    </Main>
  );
}

export default NotFound;
