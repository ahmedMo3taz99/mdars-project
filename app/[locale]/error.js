"use client";

import styled, { keyframes } from "styled-components";

// ========== Animations ==========

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(42, 50, 211, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(42, 50, 211, 0); }
  100% { box-shadow: 0 0 0 0 rgba(42, 50, 211, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

// ========== Styled Components ==========

const ErrorContainer = styled.main`
  background: linear-gradient(135deg, #030915 0%, #1a1f3a 50%, #030915 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  /* Background decorative elements */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(42, 50, 211, 0.1) 0%,
      transparent 50%
    );
    animation: ${float} 8s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(72, 190, 154, 0.1) 0%,
      transparent 50%
    );
    animation: ${float} 6s ease-in-out infinite reverse;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const ErrorIcon = styled.div`
  font-size: 6rem;
  color: #48be9a;
  margin-bottom: 1.5rem;
  animation: ${shake} 2s ease-in-out infinite;

  &::before {
    content: "⚠️";
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const ErrorTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${bounce} 2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ErrorSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #c4c6ca;
  margin-bottom: 1.5rem;
  font-weight: 400;
  animation: ${fadeInUp} 1s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(196, 198, 202, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  color: #d7d7d7;
  font-size: 1rem;
  line-height: 1.6;
  animation: ${fadeInUp} 1.2s ease-out 0.4s both;
  word-break: break-word;

  &::before {
    content: "💥 خطأ: ";
    color: #48be9a;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  animation: ${fadeInUp} 1.4s ease-out 0.6s both;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #2a32d3 0%, #48be9a 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${pulse} 2s infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(42, 50, 211, 0.3);

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.2rem;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #c4c6ca;
  border: 2px solid #c4c6ca;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #c4c6ca;
    color: #030915;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(196, 198, 202, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.2rem;
  }
`;

const TechnicalDetails = styled.details`
  margin-top: 2rem;
  color: #c4c6ca;
  font-size: 0.9rem;
  animation: ${fadeInUp} 1.6s ease-out 0.8s both;

  summary {
    cursor: pointer;
    color: #48be9a;
    font-weight: 600;
    margin-bottom: 0.5rem;

    &:hover {
      color: #2a32d3;
    }
  }

  pre {
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 0.5rem;
    overflow-x: auto;
    font-size: 0.8rem;
    border-left: 3px solid #48be9a;
  }
`;

const HelpText = styled.p`
  color: #d7d7d7;
  font-size: 0.95rem;
  margin-top: 1.5rem;
  line-height: 1.5;
  animation: ${fadeInUp} 1.8s ease-out 1s both;

  a {
    color: #48be9a;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #2a32d3;
      text-decoration: underline;
    }
  }
`;

export default function Error({ error, reset }) {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <ErrorContainer>
      <ContentWrapper>
        <ErrorIcon />

        <ErrorTitle>عذراً، حدث خطأ!</ErrorTitle>

        <ErrorSubtitle>
          نعتذر عن هذا الإزعاج، نحن نعمل على حل المشكلة
        </ErrorSubtitle>

        {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}

        <ButtonGroup>
          <PrimaryButton onClick={reset}>🔄 إعادة المحاولة</PrimaryButton>

          <SecondaryButton onClick={handleGoHome}>
            🏠 العودة للرئيسية
          </SecondaryButton>
        </ButtonGroup>

        <TechnicalDetails>
          <summary>تفاصيل فنية للمطورين</summary>
          <pre>{error?.stack || "لا توجد تفاصيل إضافية"}</pre>
        </TechnicalDetails>

        <HelpText>
          إذا استمرت المشكلة، يرجى
          <a href="mailto:support@example.com">التواصل مع الدعم الفني</a> أو
          إعادة تحميل الصفحة.
        </HelpText>
      </ContentWrapper>
    </ErrorContainer>
  );
}
