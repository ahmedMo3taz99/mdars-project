"use client";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

import MainMap from "@/app/_images/home/map/parts/SE/saudi-map.webp";

import ElReyad from "@/app/_images/home/map/parts/SE/SA01.svg";
import Maka from "@/app/_images/home/map/parts/SE/SA02.svg";
import ElMadena from "@/app/_images/home/map/parts/SE/SA03.svg";
import ElKasem from "@/app/_images/home/map/parts/SE/SA05.svg";
import Ha2al from "@/app/_images/home/map/parts/SE/SA06.svg";
import Tabok from "@/app/_images/home/map/parts/SE/SA07.svg";
import Negran from "@/app/_images/home/map/parts/SE/SA10.svg";
import Oser from "@/app/_images/home/map/parts/SE/SA14.svg";

const MapLoactionStyled = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 70rem;
  margin-top: 84px;

  .map-location-box {
    min-height: 655px;

    position: relative;
    overflow: hidden;
    margin-top: 84px;

    .map-location {
      width: 800px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .locations {
        position: relative;

        .map-img {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }

        .sa-city {
          position: absolute;
          color: transparent;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.4s;
          opacity: 0; // الشفافية الافتراضية للمدن غير المفعلة

          img {
            width: 100%;
            height: auto;
            transition: all 0.4s;
          }

          p {
            font-size: 1.2rem;
            font-weight: 400;
            margin: 0;
            color: var(--dark-color);
            padding: 2px 8px;
            border-radius: 4px;
            opacity: 0;
            transition: all 0.4s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            white-space: nowrap;
            z-index: 10;
          }

          &:hover {
            opacity: 0.5; // زيادة الشفافية عند الـ hover

            img {
              filter: brightness(1.1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
            }

            p {
              opacity: 0.5;
              color: var(--dark-color);
              transform: translate(-50%, -50%) scale(1.05);
            }
          }

          &.active {
            opacity: 1; // شفافية كاملة للمدينة المفعلة

            img {
              filter:  drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
            }

            p {
              opacity: 1;
              font-size: 1.2rem;
              color: var(--dark-color);
              border: 0;
              background:transparent;
              transform: translate(-50%, -50%) scale(1.1);
            }
          }

          // مواقع المدن على الخريطة السعودية
          &.default {
            // المدينة
            left: 10.5%;
            top: 31.4%;
            z-index: 55;
          }

          &.one {
            // القصيم
            top: 32%;
            left: 32.4%;
            z-index: 555;
          }

          &.two {
            // الرياض
            left: 35.2%;
            bottom: 17.4%;
            z-index: 55;
          }

          &.three {
            // مكة
            left: 19.3%;
            bottom: 10.4%;
            z-index: 55;
          }

          &.four {
            // عسير
            left: 32.3%;
            bottom: 6.3%;
            z-index: 555;
          }

          &.five {
            // نجران
            left: 43%;
            bottom: 3.4%;
          }

          &.six {
            // حائل
            left: 21%;
            top: 21.7%;
          }

          &.seven {
            // تبوك
            left: 0;
            top: 21%;
          }
        }
      }
    }
  }
`;

export default function MainMapSE() {
  const [activeCity, setActiveCity] = useState("default"); // المدينة هي الافتراضية

  const handleCityClick = (cityClass) => {
    setActiveCity(cityClass);
  };

  return (
    <MapLoactionStyled>
      <div className="map-location-box saudi">
        <div className="map-location active saudi" id="saudi">
          <div className="locations">
            <div
              className="map-img"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image src={MainMap} alt="map" priority />
            </div>
            <div
              className={`sa-city default ${
                activeCity === "default" ? "active" : ""
              }`}
              onClick={() => handleCityClick("default")}
            >
              <Image src={ElMadena} alt="part of the big map" />
              <p>المدينة</p>
            </div>
            <div
              className={`sa-city one ${activeCity === "one" ? "active" : ""}`}
              onClick={() => handleCityClick("one")}
            >
              <Image src={ElKasem} alt="part of the big map" />
              <p>القصيم</p>
            </div>
            <div
              className={`sa-city two ${activeCity === "two" ? "active" : ""}`}
              onClick={() => handleCityClick("two")}
            >
              <Image src={ElReyad} alt="part of the big map" />
              <p>الرياض</p>
            </div>
            <div
              className={`sa-city three ${
                activeCity === "three" ? "active" : ""
              }`}
              onClick={() => handleCityClick("three")}
            >
              <Image src={Maka} alt="part of the big map" />
              <p>مكة</p>
            </div>
            <div
              className={`sa-city four ${
                activeCity === "four" ? "active" : ""
              }`}
              onClick={() => handleCityClick("four")}
            >
              <Image src={Oser} alt="part of the big map" />
              <p>عسير</p>
            </div>
            <div
              className={`sa-city five ${
                activeCity === "five" ? "active" : ""
              }`}
              onClick={() => handleCityClick("five")}
            >
              <Image src={Negran} alt="part of the big map" />
              <p>نجران</p>
            </div>
            <div
              className={`sa-city six ${activeCity === "six" ? "active" : ""}`}
              onClick={() => handleCityClick("six")}
            >
              <Image src={Ha2al} alt="part of the big map" />
              <p>حَائِل</p>
            </div>
            <div
              className={`sa-city seven ${
                activeCity === "seven" ? "active" : ""
              }`}
              onClick={() => handleCityClick("seven")}
            >
              <Image src={Tabok} alt="part of the big map" />
              <p>تبوك</p>
            </div>
          </div>
        </div>
      </div>
    </MapLoactionStyled>
  );
}
