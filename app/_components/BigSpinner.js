"use client";
import styled, { keyframes } from "styled-components";

// ========== Animations ==========

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// ========== Styled Components ==========

const SpinnerOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #030915 0%, #2a32d3 100%);
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const OuterRing = styled.div`
  width: 6rem;
  height: 6rem;
  border: 3px solid rgba(196, 198, 202, 0.3);
  border-top: 3px solid #48be9a;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
  position: relative;
`;

const InnerRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  height: 3rem;
  border: 2px solid rgba(196, 198, 202, 0.2);
  border-right: 2px solid #2a32d3;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite reverse;
`;

const CenterDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #48be9a;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const LoadingText = styled.div`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  animation: ${float} 2s ease-in-out infinite;
  text-align: center;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: #48be9a;
  border-radius: 50%;
  animation: ${pulse} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;

function BigSpinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <OuterRing>
          <InnerRing />
          <CenterDot />
        </OuterRing>

        <LoadingText>
          جاري التحميل
          <DotsContainer>
            <Dot delay="0s" />
            <Dot delay="0.2s" />
            <Dot delay="0.4s" />
          </DotsContainer>
        </LoadingText>
      </SpinnerContainer>
    </SpinnerOverlay>
  );
}

export default BigSpinner;
