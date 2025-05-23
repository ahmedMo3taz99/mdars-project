"use client";
import styled, { keyframes } from "styled-components";

// ========== Animation ==========

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// ========== Styled Components ==========

const SpinnerOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-300);
  z-index: 9999;
  height: 100vh;
  width: 100vw;
`;

const SpinnerCircle = styled.div`
  width: 8rem;
  height: 8rem;
  border: 6px solid transparent;
  border-top: 6px solid var(--color-yellow-700);
  border-right: 6px solid var(--color-yellow-100);
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
`;

// ========== Component ==========

function Spinner() {
  return (
    <SpinnerOverlay>
      <SpinnerCircle />
    </SpinnerOverlay>
  );
}

export default Spinner;
