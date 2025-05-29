"use client";
import styled from "styled-components";

import Line from "@/app/_images/home/bd-bottom-layer.png";

import SchoolAbs from "@/app/_images/about/SchoolServies/school-service-abs-layer.svg";
import Industry from "@/app/_images/about/SchoolServies/industry-card.png";
import Digital from "@/app/_images/about/SchoolServies/digital-marketing.png";
import Idea from "@/app/_images/about/SchoolServies/idea.png";
import Slow from "@/app/_images/about/SchoolServies/slow-motion.png";
import Documenting from "@/app/_images/about/SchoolServies/documenting-events.png";
import Movie from "@/app/_images/about/SchoolServies/movie-reel.png";
import Mic from "@/app/_images/about/SchoolServies/mic.png";
import Stationery from "@/app/_images/about/SchoolServies/stationery.png";
import Image from "next/image";

const SchoolServiceStyle = styled.div`
  padding: 76px 0 107px;
  background: var(--primary-color);
  position: relative;

  .abs-img {
    width: 100%;
    max-width: 300px;
    position: absolute;
    left: 0;
    top: -260px;
    z-index: -1;
  }

  .school-service {
    h2 {
      margin-bottom: 4.4rem;
      color: var(--white-color);

      position: relative;
      padding-bottom: 16px;
      display: inline-block;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50rem;
        height: 1.4rem;
        background: url(${Line.src}) no-repeat center/ contain;
      }
    }

    .school-service-row {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      margin: 50px -15px 0;

      .school-service-col {
        width: 25%;
        padding: 0 20px 60px;

        .school-service-box {
          border-left: 1px dashed rgba(255, 255, 255, 0.2);
          padding-left: 10px;
          color: var(--white-color);

          .school-icon {
            width: 100%;
            max-width: 66px;
            min-height: 66px;
            display: flex;
            align-items: center;
            margin-bottom: 24px;
          }

          h3 {
            font-weight: 700;
          }

          p {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export default function SchoolService() {
  return (
    <SchoolServiceStyle>
      <div className="abs-img">
        <Image src={SchoolAbs} alt="layer" width={300} />
      </div>
      <div className="container">
        <div className="school-service">
          <h2 className="after-ly" data-aos="fade-up" data-aos-duration="2000">
            خدماتنا للمدارس
          </h2>
          <div className="school-service-row">
            <div
              className="school-service-col"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="school-service-box">
                <div className="school-icon">
                  <Image src={Industry} alt="icon" width={66} />
                </div>
                <h3>صناعة الصورة الذهنية</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
            <div
              className="school-service-col"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="school-service-box">
                <div className="school-icon">
                  <Image src={Digital} alt="icon" width={66} />
                </div>
                <h3>التسويق الرقمي، وإطلاق الحملات الإعلانية</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
            <div
              className="school-service-col"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="school-service-box">
                <div className="school-icon">
                  <Image src={Idea} alt="icon" width={66} />
                </div>
                <h3>صناعة الهُوية البصرية</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
            <div className="school-service-col">
              <div
                className="school-service-box"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="school-icon">
                  <Image src={Slow} alt="icon" width={66} />
                </div>
                <h3>إنتاج الإعلانات، والرسوم المتحركة</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
            <div
              className="school-service-col"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="school-service-box">
                <div className="school-icon">
                  <Image src={Documenting} alt="icon" width={66} />
                </div>
                <h3>توثيق الفعاليات </h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
            <div
              className="school-service-col"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="school-service-box">
                <div className="school-icon">
                  <Image src={Movie} alt="icon" width={66} />
                </div>
                <h3>إنتاج قصص (Reels)</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
            <div
              className="school-service-col"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="school-service-box">
                <div className="school-icon">
                  <Image src={Mic} alt="icon" width={66} />
                </div>
                <h3>إنتاج البودكاست</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
            <div
              className="school-service-col"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="school-service-box">
                <div className="school-icon">
                  <Image src={Stationery} alt="icon" width={66} />
                </div>
                <h3>انظمة الادارة المدرسية</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SchoolServiceStyle>
  );
}
