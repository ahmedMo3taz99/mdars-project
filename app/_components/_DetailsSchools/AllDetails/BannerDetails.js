"use client";
import Image from "next/image";

import HomeIcon from "@/app/_images/details/icons/home-icon.png";
import HeartIcon from "@/app/_images/details/icons/heart-icon.png";
import AddIcon from "@/app/_images/details/icons/add-icon.png";
import ShareIcon from "@/app/_images/details/icons/share-icon.png";

import StudentIcon from "@/app/_images/details/icons/student-icon.svg";
import AcademyIcon from "@/app/_images/details/icons/academy-icon.svg";
import ClassroomIcon from "@/app/_images/details/icons/classroom-icon.svg";

import AmericanIcon from "@/app/_images/details/icons/american-curriculum.png";
import InternationIcon from "@/app/_images/details/icons/internation-school.png";
import AllIcon from "@/app/_images/details/icons/all-stages.png";
import BasaksehirIcon from "@/app/_images/details/icons/basaksehir.png";

import HudaSchool from "@/app/_images/details/mainImages/huda-schools-logo.png";
import BgSchool from "@/app/_images/details/mainImages/detail-banner.jpg";
import EffectSchool from "@/app/_images/details/mainImages/detail-banner-layer.png";
import styled from "styled-components";
import { TheBreadcrumb } from "../../_ِِAboutComponents/Breadcrumb";

const DetailsBanner = styled.div`
  padding: 50px 0 0 0;
  background: url(${BgSchool.src}) no-repeat center/ cover;
  overflow: hidden;

  .detail-banner-info {
    padding-bottom: 70px;

    .user-icons {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      width: 100%;
      max-width: 172px;
      justify-content: center;
      margin: 15px 0 24px;

      li {
        padding: 0 12px;

        a {
          display: block;
          width: 100%;
          max-width: 21px;
        }
      }
    }

    .schools-info {
      display: flex;
      align-items: center;
      color: var(--white-color);

      h1 {
        margin-bottom: 0;
        line-height: 1.3;
      }

      .huda-img {
        width: 100%;
        max-width: 122px;
        margin-left: 15px;
      }
    }

    .banner-detail-btn {
      display: flex;
      align-items: center;
      margin-top: 47px;

      a.dark-btn {
        margin-right: 15px;
        max-width: 177px;
      }
    }
  }
`;

const DetailBannerBottom = styled.div`
  border-top: 1px solid rgba(235, 236, 240, 0.17);
  background: url(${EffectSchool.src}) no-repeat center/ cover;
  padding-bottom: 60px;

  .available-row {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 -12px;

    .available-col {
      width: 33.33%;
      padding: 0 12px;

      .available-col-box {
        display: flex;
        align-items: flex-start;
        color: var(--white-color);
        position: relative;
        padding-top: 25px;

        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 66px;
          height: 4px;
          border-radius: 6px;
          background: transparent;
        }

        &.active::after {
          background: var(--secondary-color);
        }

        .available-img {
          width: 100%;
          max-width: 60px;
          margin-left: 22px;
        }

        .available-info {
          h3 {
            color: var(--white-color);
            font-size: 23px;
            font-weight: 700;
            line-height: 1.2;
          }

          p {
            color: #a3abb6;
            font-size: 14px;
            margin-bottom: 0;
          }
        }

        &.active {
          h3 {
            color: var(--secondary-color);
          }
        }
      }
    }
  }

  .detail-banner-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px -20px 0;

    li {
      display: flex;
      align-items: center;
      font-size: 20px !important;
      font-weight: 600;
      color: var(--white-color);
      padding: 0 20px;

      span {
        display: block;
        width: 100%;
        max-width: 24px;
        margin-left: 12px;
      }
    }
  }
`;

export default function BannerDetails() {
  return (
     <DetailsBanner>
      <div className="container">
        <div className="detail-banner-info">
          <TheBreadcrumb>
            <li>
              <a href="#">
                <span>
                  <Image src={HomeIcon} alt="home" width={15} />
                </span>
              </a>
            </li>
            <li>
              <a href="#">المدارس</a>
            </li>
            <li>مدارس الهدى الدولية</li>
          </TheBreadcrumb>
          <ul className="user-icons">
            <li>
              <a href="#">
                <Image src={HeartIcon} alt="user-icons" width={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={AddIcon} alt="user-icons" width={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={ShareIcon} alt="user-icons" width={20} />
              </a>
            </li>
          </ul>
          <div className="schools-info">
            <div className="huda-img">
              <Image src={HudaSchool} alt="logo" width={122} />
            </div>
            <h1>
              مدارس الهدى<p>Alhuda schools </p>
            </h1>
          </div>
          <div className="banner-detail-btn">
            <a className="secondary-btn" href="#">
              احجز الان
            </a>
            <a className="dark-btn" href="#">
              قسط الرسوم
            </a>
          </div>
        </div>
      </div>
      <DetailBannerBottom>
        <div className="container">
          <div className="available-row">
            <div className="available-col">
              <div className="available-col-box active">
                <div className="available-img">
                  <Image src={StudentIcon} alt="icon" />
                </div>
                <div className="available-info">
                  <h3>طلاب</h3>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى،
                  </p>
                </div>
              </div>
            </div>
            <div className="available-col">
              <div className="available-col-box">
                <div className="available-img">
                  <Image src={AcademyIcon} alt="icon" />
                </div>
                <div className="available-info">
                  <h3>الأكاديمية</h3>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى،
                  </p>
                </div>
              </div>
            </div>
            <div className="available-col">
              <div className="available-col-box">
                <div className="available-img">
                  <Image src={ClassroomIcon} alt="icon" />
                </div>
                <div className="available-info">
                  <h3>الغرف الدراسية</h3>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى،
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="detail-banner-list">
            <li>
              <span>
                <Image src={AmericanIcon} alt="icon" width={24} />
              </span>
              المنهج الامريكي
            </li>
            <li>
              <span>
                <Image src={InternationIcon} alt="icon" width={24} />
              </span>
              مدرسة دولية
            </li>
            <li>
              <span>
                <Image src={AllIcon} alt="icon" width={24} />
              </span>
              جميع المراحل
            </li>
            <li>
              <span>
                <Image src={BasaksehirIcon} alt="icon" width={24} />
              </span>
              باشاك شهير
            </li>
          </ul>
        </div>
      </DetailBannerBottom>
    </DetailsBanner>
  )
}
