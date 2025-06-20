"use client";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

// ========== Animations ==========

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 25px rgba(42, 50, 211, 0.4);
  }
  50% {
    box-shadow: 0 0 35px rgba(42, 50, 211, 0.7), 0 0 50px rgba(42, 50, 211, 0.5);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-8px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

// ========== Styled Components ==========

const Container = styled.main`
  background: linear-gradient(135deg, #030915 0%, #0a0e1a 50%, #030915 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(42, 50, 211, 0.08) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(72, 190, 154, 0.06) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(42, 50, 211, 0.03) 0%,
        transparent 80%
      );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(3, 9, 21, 0.1) 0%, transparent 100%),
      linear-gradient(90deg, rgba(3, 9, 21, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  max-width: 700px;
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorCode = styled.h1`
  font-size: 14rem;
  font-weight: 900;
  color: #2a32d3;
  margin: 0;
  text-shadow: 0 0 40px rgba(42, 50, 211, 0.6), 0 0 80px rgba(42, 50, 211, 0.4),
    0 0 120px rgba(42, 50, 211, 0.2);
  animation: ${fadeInDown} 1.2s ease-out, ${float} 8s ease-in-out infinite;
  background: linear-gradient(45deg, #2a32d3, #48be9a, #2a32d3);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  line-height: 1;

  &::after {
    content: "404";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    background-size: 300px 100%;
    animation: ${shimmer} 3s infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }

  @media (max-width: 768px) {
    font-size: 10rem;
  }

  @media (max-width: 480px) {
    font-size: 8rem;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: #ffffff;
  margin: 3rem 0 2rem;
  font-weight: 700;
  animation: ${fadeInUp} 1.4s ease-out;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin: 2rem 0 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: #c4c6ca;
  margin-bottom: 4rem;
  line-height: 1.7;
  animation: ${fadeInUp} 1.6s ease-out;
  max-width: 550px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 3rem;
    max-width: 90%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeInUp} 1.8s ease-out;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  background: linear-gradient(45deg, #2a32d3, #48be9a);
  color: #ffffff;
  padding: 1.8rem 3.5rem;
  border-radius: 60px;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${glow} 4s ease-in-out infinite;
  display: inline-block;
  text-align: center;
  border: 2px solid transparent;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(42, 50, 211, 0.5),
      0 0 60px rgba(42, 50, 211, 0.3);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.01);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 3rem;
    font-size: 1.4rem;
    width: 250px;
  }
`;

const SecondaryLink = styled(Link)`
  background: rgba(72, 190, 154, 0.1);
  color: #48be9a;
  padding: 1.8rem 3.5rem;
  border: 2px solid #48be9a;
  border-radius: 60px;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #48be9a;
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: #030915;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 35px rgba(72, 190, 154, 0.4),
      0 0 50px rgba(72, 190, 154, 0.2);
    border-color: #48be9a;

    &::before {
      width: 100%;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.01);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 3rem;
    font-size: 1.4rem;
    width: 250px;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingDot = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  border-radius: 50%;
  opacity: 0.4;
  animation: ${float} ${(props) => props.duration}s ease-in-out infinite,
    ${pulse} ${(props) => props.duration * 0.8}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  box-shadow: 0 0 20px ${(props) => props.color};
`;

const Emoji = styled.span`
  font-size: 5rem;
  margin-bottom: 2.5rem;
  display: block;
  animation: ${bounce} 3s infinite;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

// ========== Component ==========

export default function NotFound() {
  return (
    <Container>
      {/* Floating background elements */}
      <FloatingElements>
        <FloatingDot
          size={10}
          color="rgba(42, 50, 211, 0.6)"
          duration={6}
          delay={0}
          style={{ top: "15%", left: "15%" }}
        />
        <FloatingDot
          size={8}
          color="rgba(72, 190, 154, 0.5)"
          duration={8}
          delay={2}
          style={{ top: "25%", right: "20%" }}
        />
        <FloatingDot
          size={12}
          color="rgba(42, 50, 211, 0.4)"
          duration={10}
          delay={4}
          style={{ bottom: "20%", left: "25%" }}
        />
        <FloatingDot
          size={6}
          color="rgba(72, 190, 154, 0.6)"
          duration={7}
          delay={1}
          style={{ top: "50%", right: "15%" }}
        />
        <FloatingDot
          size={14}
          color="rgba(42, 50, 211, 0.3)"
          duration={12}
          delay={6}
          style={{ bottom: "40%", right: "25%" }}
        />
        <FloatingDot
          size={9}
          color="rgba(72, 190, 154, 0.4)"
          duration={9}
          delay={3}
          style={{ top: "70%", left: "10%" }}
        />
      </FloatingElements>

      <ErrorContainer>
        <Emoji>🚀</Emoji>
        <ErrorCode>404</ErrorCode>
        <Title>Houston, We Have a Problem!</Title>
        <Description>
          The page you&apos;re looking for seems to have drifted off into
          cyberspace. Don&apos;t worry though - our navigation system is still
          working perfectly!
        </Description>

        <ButtonContainer>
          <StyledLink href="/">Take Me Home</StyledLink>
          {/* <SecondaryLink href="/contact">Report Issue</SecondaryLink> */}
        </ButtonContainer>
      </ErrorContainer>
    </Container>
  );
}
