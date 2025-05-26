"use client";

import styled from "styled-components";
import CheckBox from "@/app/_images/home/icon/checkbox.png";
import UnderLine from "@/app/_images/home/bd-bottom-layer.png";
import BgImage from "@/app/_images/home/home-banner.png";
import DiscussBox from "./DiscussBox";

const MainDiv = styled.div`
  padding: 20.9rem 0 14.7rem;
  background: var(--primary-color);
  background-image: url(${BgImage.src});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 72.6rem;
`;

const BannerInfo = styled.div`
  width: 100%;
  max-width: 69.1rem;
  color: var(--white-color);

  h1 {
    max-width: 41rem;
    font-size: 6.8rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: auto;
      top: 10rem;
      width: 18.8rem;
      height: 1.4rem;
      background-image: url(${UnderLine.src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  p {
    max-width: 56rem;
  }
`;

const BannerCheckbox = styled.div`
  padding: 1rem 0 0.7rem;
  display: flex;
  justify-content: flex-end;

  label {
    position: relative;
    background: var(--white-color);
    padding: 0.9rem 4.4rem 0.9rem 1.2rem;
    border-radius: 1.2rem;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;

    &::before {
      content: "";
      display: block;
      position: absolute;
      right: 1.2rem;
      top: 50%;
      transform: translate(0, -50%);
      width: 2rem;
      height: 2rem;
      background: #e8eeff;
      border: 1px solid #dde5f7;
      border-radius: 4px;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    visibility: hidden;

    &:checked {
      background-color: #e8eeff;
      background-image: url(${CheckBox.src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.2rem;
    }
  }

  input:checked + label::before {
    background-color: #e8eeff;
    background-image: url(${CheckBox.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.2rem;
  }
`;

export default function Hero() {
  return (
    <MainDiv>
      <div className="container">
        <BannerInfo>
          <h1>اختر المدرسة الأفضل لأولادك</h1>
          <p>
            استكشف مجموعة واسعة من أفضل المدارس العالمية والأهلية في السعودية
            عبر منصة مدارس.ai. احجز مقعدًا دراسيًا لأطفالك بكل سهولة واستفد من
            خدمة التقسيط الميسرة .
          </p>

          <BannerCheckbox>
            <input type="checkbox" id="chk1" />
            <label htmlFor="chk1">مع خيار التقسيط</label>
          </BannerCheckbox>

          <DiscussBox />
        </BannerInfo>
      </div>
    </MainDiv>
  );
}
