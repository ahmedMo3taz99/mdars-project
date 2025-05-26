import styled from "styled-components";

import Robot from "@/app/_images/home/features/bot.png";
import Rank from "@/app/_images/home/features/rank.png";
import Circle from "@/app/_images/home/features/circle-img.png";
import Payment from "@/app/_images/home/features/pyament-method.png";

import Line from "@/app/_images/home/bd-bottom-layer.png";

import Image from "next/image";

const Features = styled.div`
  padding: 72px 0 146px;
  overflow: hidden;

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

  .feature-row {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 80px -32px 0;

    .feature-col {
      width: 33.33%;
      padding: 0 32px;

      .feature-col-box {
        background: var(--offwhite-color);
        padding: 66px 25px 45px;
        border-radius: 34px;
        text-align: center;
        height: 100%;

        h3 {
          color: var(--primary-color);
          font-weight: 700;
        }

        p {
          color: var(--dark-color);
          min-height: 64px;
          max-width: 238px;
          margin: 0 auto;
        }

        .feature-img {
          width: 100%;
          margin: 0 auto 18px;

          .srcc {
            margin: 0 auto;
          }
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

export default function MainFeatures() {
  return (
    <Features>
      <div className="container">
        <div className="feature-box">
          <h2 className="after-ly" data-aos="fade-up" data-aos-duration="2000">
            ما يميزنا في مدارس
          </h2>
          <div className="feature-row">
            <div
              className="feature-col"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="feature-col-box">
                <div className="feature-img rank">
                  <Image
                    src={Rank}
                    alt="feature"
                    height={100}
                    width={100}
                    className="srcc"
                  />
                </div>
                <h3>أفضل المناهج التعليمية</h3>
                <p>مناهج عالمية معترف بها دوليا و عالميًا.</p>
              </div>
            </div>
            <div
              className="feature-col"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="feature-col-box ">
                <div className="feature-img circle">
                  <Image
                    src={Circle}
                    alt="feature"
                    height={100}
                    width={100}
                    className="srcc"
                  />
                </div>
                <h3>البحث المتقدم</h3>
                <p className="w-238">
                  امكانية البحث بالعديد من التفاصيل الدقيقة و المطلوبة
                </p>
              </div>
            </div>
            <div
              className="feature-col"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="feature-col-box">
                <div className="feature-img payment">
                  <Image
                    src={Payment}
                    alt="feature"
                    height={100}
                    width={130}
                    className="srcc"
                  />
                </div>
                <h3>إمكانية التقسيط</h3>
                <p>ضمان التقسيط المريح مع المنصة</p>
              </div>
            </div>
          </div>
          <div
            className="educational-consultant"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p>
              <span>
                <Image
                  src={Robot}
                  alt="bot-img"
                  height={40}
                  width={100}
                  className="srcc"
                />
              </span>
              مستشارك التعليمي المجاني
            </p>
            <a className="primary-btn" href="#">
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </Features>
  );
}
