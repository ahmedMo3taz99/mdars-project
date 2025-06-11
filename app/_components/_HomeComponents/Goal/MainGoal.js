"use client";
import styled from "styled-components";
import Image from "next/image";

import Distance from "@/app/_images/home/goal/distance-learning-online.png";
import Green from "@/app/_images/home/goal/green-chameleon.png";
import Samantha from "@/app/_images/home/goal/samantha-borges.png";
import Online from "@/app/_images/home/goal/online-english-courses.png";
import Science from "@/app/_images/home/goal/science-icon.png";

const GoalStyle = styled.section`
  padding: 140px 0 90px;
  background: var(--dark-color);

  .goals {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .goals-info {
      color: var(--white-color);
      width: 100%;
      max-width: 625px;
      margin-left: 50px;

      h2 {
        margin-bottom: 20px;
      }

      p {
        margin-bottom: 40px;
        max-width: 522px;
        font-weight: 400;
      }

      a {
        border: 1px solid var(--secondary-color);
        padding: 10px 20px;
        display: inline-block;
        border-radius: 6px;
        color: var(--white-color);
        text-decoration: none;
        font-weight: 500;
        transition: 0.3s;

        &:hover {
          background: var(--secondary-color);
          color: #000;
        }
      }
    }

    .goals-img {
      display: flex;
      align-items: center;
      gap: 2rem;

      .goals-img-box {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:first-child {
          margin-right: 24px;
          margin-top: -58px;
        }

        .goal-img {
          width: 100%;
          position: relative;
          width: 250px;
          height: 300px;
          margin-bottom: 24px;

          .srcc {
            object-fit: contain;
          }

          &.mb-0 {
            margin-bottom: 0;
          }

          img {
            display: block;
            width: 100%;
            border-radius: 12px;
          }
        }
      }
    }

    .science-goal-abs-img {
      width: 100%;
      max-width: 153px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    .goals {
      flex-direction: column;
      text-align: center;

      .goals-info {
        margin: 0 0 40px 0;
      }

      .goals-img {
        flex-direction: column;

        .goals-img-box {
          margin: 0 0 20px 0 !important;
        }
      }
    }
  }
`;

export default function MainGoal() {
  return (
    <GoalStyle>
      <div className="container">
        <div className="goals">
          <div className="goals-info">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              خذ الخطوة التالية نحو أهدافك العلمية
            </h2>
            <p data-aos="fade-left" data-aos-duration="2000">
              مدارس منصة تجمعك بافضل المدارس الدولية والمدرسين في تركيا مع
              امكانية تقسيط مريح لخيارك المناسب
            </p>
            <a className="secondary-btn" href="#">
              سجل معنا الآن
            </a>
          </div>

          <div className="goals-img">
            <div className="goals-img-box img-box--alt">
              <div className="goal-img">
                <Image
                  src={Distance}
                  alt="goal-img"
                  fill
                  priority
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div className="goal-img mb-0">
                <Image
                  src={Green}
                  alt="goal-img"
                  fill
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                  priority
                />
              </div>
            </div>

            <div className="goals-img-box">
              <div className="goal-img">
                <Image
                  src={Samantha}
                  alt="goal-img"
                  fill
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                  priority
                />
              </div>
              <div className="goal-img mb-0">
                <Image
                  src={Online}
                  alt="goal-img"
                  fill
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="science-goal-abs-img">
            <Image
              src={Science}
              alt="science-goal-img"
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
              priority
            />
          </div>
        </div>
      </div>
    </GoalStyle>
  );
}
