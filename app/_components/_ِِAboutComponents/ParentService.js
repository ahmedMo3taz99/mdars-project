"use client";

import styled from "styled-components";

import Line from "@/app/_images/home/bd-bottom-layer.png";

import Circle from "@/app/_images/about/parentService/circle-img.png";
import Reading from "@/app/_images/about/parentService/reading-book.png";
import Fee from "@/app/_images/about/parentService/fee-financing.png";
import Educational from "@/app/_images/about/parentService/educational-consultant.png";
import Bot from "@/app/_images/about/parentService/bot.png";
import Image from "next/image";

const ParentServiceStyle = styled.div`
  padding: 73px 0 146px;
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
      width: 65rem;
      height: 1.4rem;
      background: url(${Line.src}) no-repeat center/ contain;
    }
  }

  .parent-service-row {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    margin: 69px -10px 0;

    .parent-service-col {
      width: 25%;
      padding: 0 10px 20px;

      .parent-service-box {
        padding: 48px 20px;
        border-radius: 24px;
        background: var(--offwhite-color);
        text-align: center;
        height: 100%;

        .parent-service-icon {
          width: 100%;
          max-width: 66px;
          min-height: 66px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }

        h3 {
          color: var(--primary-color);
          margin-bottom: 18px;
        }

        p {
          margin-bottom: 0;
          color: var(--dark-color);
        }
      }
    }
  }

  .educational-consultant {
    width: 100%;
    max-width: 596px;
    border-radius: 12px;
    background: var(--offwhite-color);
    padding: 25px 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 88px auto 0;

    p {
      font-weight: 700;
      display: flex;
      align-items: center;
      margin: 0 0 0 15px;

      span {
        width: 100%;
        max-width: 38px;
        display: block;
        margin-left: 13px;
      }
    }
  }
`;

export default function ParentService() {
  return (
    <ParentServiceStyle>
      <div className="container">
        <div className="parent-service">
          <h2
            className="after-ly"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            خدماتنا لأولياء الأمور
          </h2>
          <div className="parent-service-row">
            <div
              className="parent-service-col"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="parent-service-box">
                <div className="parent-service-icon">
                  <Image src={Circle} alt="img" width={66} />
                </div>
                <h3>البحث عن المدارس</h3>
                <p>مناهج عالمية معترف بها دوليا و عالميًا.</p>
              </div>
            </div>
            <div
              className="parent-service-col"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="parent-service-box">
                <div className="parent-service-icon">
                  <Image src={Reading} alt="img" width={66} />
                </div>
                <h3>حجز المقاعد الدراسية</h3>
                <p>مناهج عالمية معترف بها دوليا و عالميًا.</p>
              </div>
            </div>
            <div
              className="parent-service-col"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="parent-service-box">
                <div className="parent-service-icon">
                  <Image src={Fee} alt="img" width={66} />
                </div>
                <h3>تمويل الرسوم</h3>
                <p>مناهج عالمية معترف بها دوليا و عالميًا.</p>
              </div>
            </div>
            <div
              className="parent-service-col"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="parent-service-box">
                <div className="parent-service-icon">
                  <Image src={Educational} alt="img" width={66} />
                </div>
                <h3>المستشار التعليمي المجاني</h3>
                <p>مناهج عالمية معترف بها دوليا و عالميًا.</p>
              </div>
            </div>
          </div>
          <div
            className="educational-consultant"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <p>
              <span>
                <Image src={Bot} alt="bot-img" height={40} width={100} />
              </span>
              مستشارك التعليمي المجاني
            </p>
            <a className="secondary-btn" href="#">
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </ParentServiceStyle>
  );
}
