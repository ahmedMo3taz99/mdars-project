"use client";
import styled from "styled-components";

import Mdares from "@/app/_images/footer/mdares-logo.png";
import Calling from "@/app/_images/footer/icons/calling.png";
import Sms from "@/app/_images/footer/icons/sms-blue.png";

import Sms2 from "@/app/_images/footer/icons/sms-light.png";

import Facebook from "@/app/_images/footer/icons/facebook-icon.png";
import Twitter from "@/app/_images/footer/icons/twitter-icon.png";
import Linkedin from "@/app/_images/footer/icons/linkedin-icon.png";
import Instagram from "@/app/_images/footer/icons/instagram-icon.png";
import Snapchat from "@/app/_images/footer/icons/snapchat-icon.png";
import Tiktok from "@/app/_images/footer/icons/tiktok-icon.png";
import Image from "next/image";

const FooterStyled = styled.footer`
  padding: 50px 0 25px;
  background: var(--dark-color);
  overflow-x: clip;
  position: relative;

  .footer {
    padding-bottom: 40px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);

    .footer-row {
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;

      .footer-info {
        color: var(--white-color);
        font-size: 14px;
        font-weight: 500;
        width: 55%;
        padding-left: 50px;

        .logoo {
          .srcc {
            max-width: 148px;
            margin-bottom: 24px;
          }
        }
        p {
          max-width: 500px;
          font-size: 14px;
          margin-bottom: 0;
        }

        .contact-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 24px -25px 0;

          .contact-col {
            display: flex;
            align-items: center;
            padding: 0 25px;

            .contact-img {
              width: 48px;
              height: 48px;
              border-radius: 30px;
              background: var(--white-color);
              padding: 14px;
            }

            .contact-info {
              padding-right: 12px;

              p {
                font-size: 15px;
                font-weight: 400;
                margin-bottom: 0;
              }

              a {
                font-size: 15px;
                font-weight: 500;
                color: var(--white-color);
                transition: color 0.3s;

                &:hover {
                  color: var(--secondary-color);
                }
              }
            }
          }
        }
      }

      .newsletter {
        color: var(--white-color);
        width: 45%;

        p {
          font-size: 16px;
        }

        .contact-form {
          display: flex;
          padding: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          margin-top: 24px;

          input {
            width: 100%;
            background: transparent;
            border: 0;
            outline: 0;
            font-size: 14px;
            font-weight: 400;
            color: var(--white-color);
            opacity: 0.7;
            padding: 0 40px 0 10px;
            background: url(${Sms2.src}) no-repeat right 11px center/ 16px;
          }

          a {
            width: auto;
            margin-right: 10px;
            border-radius: 8px;
          }
        }
      }
    }

    .footer-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 55px -15px 0;

      li {
        padding: 0 15px;
      }

      a {
        color: var(--white-color);
        font-size: 18px;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 25px;

    .copyright-info {
      font-size: 14px;
      font-weight: 400;
      color: var(--white-color);
      margin-bottom: 0;
      padding-left: 30px;
    }

    .social-links {
      display: flex;
      align-items: center;
      margin: 0 -12px;

      li {
        font-size: 14px;
        font-weight: 400;
        color: var(--white-color);
        margin-bottom: 0;
        padding: 0 12px;

        a {
          display: block;
          width: 100%;
          max-width: 24px;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <div className="container">
        <div className="footer">
          <div className="footer-row">
            <div className="footer-info">
              <a href="#" className="logoo">
                <Image src={Mdares} alt="logo" width={150} className="srcc" />
              </a>
              <p>
                مدارس منصة تجمعك بافضل المدارس الدولية والمدرسين في تركيا مع
                امكانية تقسيط مريح مدارس منصة تجمعك بافضل المدارس الدولية
                والمدرسين في تركيا مع امكانية تقسيط مريح...
              </p>
              <div className="contact-row">
                <div className="contact-col">
                  <div className="contact-img">
                    <Image src={Calling} alt="calling" width={20} />
                  </div>
                  <div className="contact-info">
                    <p>هل لديك إستفسار ؟</p>
                    <a href="tel:+905550595509">+905550595509</a>
                  </div>
                </div>
                <div className="contact-col">
                  <div className="contact-img">
                    <Image src={Sms} alt="calling" width={20} />
                  </div>
                  <div className="contact-info">
                    <p>راسلنا على</p>
                    <a href="mailto:info@madares.com">info@madares.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter">
              <h3>النشرة الدورية</h3>
              <p>اشترك بالنشرة الدورية ليصلك كل جديد</p>
              <div className="contact-form">
                <input type="email" placeholder="ادخل البريد الإلكتروني" />
                <a className="secondary-btn" href="#">
                  إشتراك
                </a>
              </div>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <a href="#">عن مدارس</a>
            </li>
            <li>
              <a href="#">المدارس </a>
            </li>
            <li>
              <a href="#">بوابة المعلمين</a>
            </li>
            <li>
              <a href="#">الدورات التدريبية</a>
            </li>
            <li>
              <a href="#">تواصل معنا</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright-info">جميع الحقوق محفوظة لصالح مدارس @2024</p>
          <ul className="social-links">
            <li>الشبكات الاجتماعية</li>
            <li>
              <a href="#">
                <Image src={Facebook} alt="icon" width={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Twitter} alt="icon" width={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Linkedin} alt="icon" width={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Instagram} alt="icon" width={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Snapchat} alt="icon" width={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Tiktok} alt="icon" width={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  );
}
