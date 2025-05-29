"use client";
import Image from "next/image";
import React from "react";

import Line from "@/app/_images/home/bd-bottom-layer.png";

import Connectt from "@/app/_images/about/connect/connect-map.jpg";
import Map from "@/app/_images/about/connect/map-marker.png";
import Phone from "@/app/_images/about/connect/phone.png";
import Mail from "@/app/_images/about/connect/mail.png";
import Instagram from "@/app/_images/about/connect/instagram.svg";
import Twitter from "@/app/_images/about/connect/twitter.svg";
import Linkedin from "@/app/_images/about/connect/linkedin.svg";
import Facebook from "@/app/_images/about/connect/facebook.svg";
import styled from "styled-components";

const MainConnectStyled = styled.div`
  padding: 72px 0 60px;

  h2 {
    margin-bottom: 4.4rem;

    position: relative;
    padding-bottom: 16px;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 18.8rem;
      height: 1.4rem;
      background: url(${Line.src}) no-repeat center/ contain;
    }
  }

  .connect-map {
    margin-top: 30px;
  }

  .connect-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 30px;
    border-radius: 6px;
    background: var(--white-color);
    box-shadow: 0px 19px 69px 0px var(--offwhite-color);
    z-index: 55;
    position: relative;
    margin: -54px 54px 49px;

    li {
      /* font-family: "Open Sans", sans-serif; */
      display: flex;
      align-items: center;
      max-width: 420px;
      font-size: 1.8rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 52px;
        height: 52px;
        border-radius: 100px;
        background: var(--primary-color);
        margin-left: 11px;
        padding: 14px;
      }

      .srcc {
        width: 100%;
        max-width: 25px;
      }

      a {
        font-size: 18px;
        color: var(--dark-color);

        &:hover {
          color: var(--primary-color);
          text-decoration: underline;
        }
      }
    }
  }

  .social-connects {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: 600;
      color: var(--dark-color);
      margin-bottom: 0;
    }

    .social-connects-links {
      display: flex;
      align-items: center;
      padding-right: 10px;

      li {
        padding: 0 8px;

        a {
          display: block;
          width: 100%;
          max-width: 25px;
        }
      }
    }
  }
`;

export default function Connect() {
  return (
    <MainConnectStyled>
      <div className="container">
        <div className="connect">
          <h2 className="after-ly" data-aos="fade-up" data-aos-duration="2000">
            شركة الشرق لتقنية المعلومات
          </h2>
          <div className="connect-map">
            <Image src={Connectt} alt="map-img" width={1200} className="srcc" />
          </div>
          <ul className="connect-box">
            <li>
              <span>
                <Image src={Map} alt="icon" width={25} className="srcc" />
              </span>
              شارع طريق الملك فهد العليا ، الرياض - السعودية
            </li>
            <li>
              <span>
                <Image src={Phone} alt="icon" width={25} className="srcc" />
              </span>
              <a href="tel:+00966564601715">00966564601715</a>
            </li>
            <li>
              <span>
                <Image src={Mail} alt="icon" width={25} className="srcc" />
              </span>
              <a href="mailto:info@madares.com">info@madares.com</a>
            </li>
          </ul>
          <div className="social-connects">
            <p>تابع المدرسة عبر السوشيال ميديا</p>
            <ul className="social-connects-links">
              <li>
                <a href="#">
                  <Image
                    src={Instagram}
                    alt="instagram"
                    width={25}
                    className="srcc"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src={Twitter}
                    alt="twitter"
                    width={25}
                    className="srcc"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src={Linkedin}
                    alt="linkedin"
                    width={25}
                    className="srcc"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src={Facebook}
                    alt="facebook"
                    width={25}
                    className="srcc"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainConnectStyled>
  );
}
