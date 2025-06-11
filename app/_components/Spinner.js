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

const SpinnerContainer = styled.div`
  /* بدل fixed، خليه relative */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* بدل inset: 0، حدد ارتفاع مناسب */
  min-height: 300px;
  width: 100%;
  /* خلي الخلفية شفافة أو لون خفيف */
  background: linear-gradient(135deg, #030915 0%, #2a32d3 100%);
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-in-out;
  /* شيل الـ z-index العالي */
`;

const SpinnerContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const OuterRing = styled.div`
  width: 4rem;
  height: 4rem;
  border: 2px solid rgba(196, 198, 202, 0.3);
  border-top: 2px solid #48be9a;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
  position: relative;
`;

const InnerRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(196, 198, 202, 0.2);
  border-right: 1px solid #2a32d3;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite reverse;
`;

const CenterDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: #48be9a;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const LoadingText = styled.div`
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  animation: ${float} 2s ease-in-out infinite;
  text-align: center;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 0.3rem;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: #48be9a;
  border-radius: 50%;
  animation: ${pulse} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerContent>
        <OuterRing>
          <InnerRing />
          <CenterDot />
        </OuterRing>

        <LoadingText>
          جاري تحميل المدارس
          <DotsContainer>
            <Dot delay="0s" />
            <Dot delay="0.2s" />
            <Dot delay="0.4s" />
          </DotsContainer>
        </LoadingText>
      </SpinnerContent>
    </SpinnerContainer>
  );
}

export default Spinner;
