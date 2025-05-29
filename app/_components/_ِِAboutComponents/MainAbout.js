"use client";
import styled from "styled-components";

import Line from "@/app/_images/home/bd-bottom-layer.png";

import Book from "@/app/_images/about/mainAbout/book-icon.png";
import Eye from "@/app/_images/about/mainAbout/eye-icon.png";
import Image from "next/image";

const About = styled.div`
  padding: 63px 0 91px;
  background: var(--offwhite-color);

  h1 {
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

  .about-row {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px -10px 0;

    .about-col {
      width: 50%;
      padding: 0 10px;

      .about-col-box {
        background: var(--white-color);
        border-radius: 15px;
        padding: 20px;
        height: 100%;

        .about-icon {
          width: 100%;
          max-width: 55px;
          margin-bottom: 25px;
        }

        h3 {
          color: var(--primary-color);

          margin-bottom: 20px;
          font-weight: 700;
        }

        p {
          color: #1c1c1c;
          margin-bottom: 20px;
          font-weight: 500;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export default function MainAbout() {
  return (
    <About>
      <div className="container">
        <div className="about">
          <h1 className="after-ly" data-aos="fade-up" data-aos-duration="2000">
            من نحن
          </h1>
          <div className="about-row">
            <div
              className="about-col"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="about-col-box">
                <div className="about-icon">
                  <Image src={Book} alt="books-img" width={55} />
                </div>
                <h3>عن مدارس</h3>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدارس الدولية في السعودية في مكان واحد، لتسهيل عملية البحث
                  عن المدرسة المناسبة لأولياء الأمور.
                </p>
                <p>
                  منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات
                  المدارس الدولية في السعودية في مكان واحد، لتسهيل عملية البحث
                  عن المدرسة المناسبة
                </p>
              </div>
            </div>
            <div
              className="about-col"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="about-col-box">
                <div className="about-icon">
                  <Image src={Eye} alt="eye-img" width={55} />
                </div>
                <h3>الرؤية والرسالة </h3>
                <p>
                  تتمثَّل رؤيتنا في أن تصبح منصة مدارس  الأكثر تأثيرًا في مجال
                  تطوير التعليم في السعودية، في 2030 م
                </p>
                <p>
                  اما رسالتنا هي تقديم معلومات شاملة ودقيقة عن المدارس الدولية
                  في السعودية، باستخدام أحدث تقنيات الذكاء الاصطناعي، مما يسهل
                  على أولياء الأمور عملية البحث واتخاذ القرار.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </About>
  );
}
