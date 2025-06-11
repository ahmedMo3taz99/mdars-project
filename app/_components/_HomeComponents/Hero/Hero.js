"use client";

import styled from "styled-components";
import UnderLine from "@/app/_images/home/bd-bottom-layer.png";
import BgImage from "@/app/_images/home/home-banner.png";
import DiscussBox from "./DiscussBox";
import { useTranslation } from "../../LanguageProvider";
import Image from "next/image";

const MainDiv = styled.div`
  padding: 10rem 0 14.7rem;
  background: var(--primary-color);
  height: 80vh;
  /* background-image: url(${BgImage.src});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 72.6rem; */

  display: flex;
  overflow: hidden;

  .container {
    width: auto !important;
  }
`;

const BgImageStyled = styled.div`
  width: 50%;
  order: 2;
  .srcc {
    object-fit: contain;
  }
`;

const BannerInfo = styled.div`
  width: 150%;
  max-width: 69.1rem;
  color: var(--white-color);
  display: flex;
  flex-direction: column;
  gap: 3rem;

  order: 1;

  h1 {
    /* max-width: 41rem; */
    font-size: 6.8rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 10rem;
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

export default function Hero() {
  const { t } = useTranslation();

  return (
    <MainDiv>
      <BgImageStyled>
        <Image
          src={BgImage}
          alt="heroImage"
          className="srcc"
          width={1200}
          height={635}
          priority
        />
      </BgImageStyled>

      <div className="container">
        <BannerInfo>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            {t("title")}
          </h1>
          <p data-aos="fade-left" data-aos-duration="2000">
            {t("description")}
          </p>

          <DiscussBox />
        </BannerInfo>
      </div>
    </MainDiv>
  );
}
