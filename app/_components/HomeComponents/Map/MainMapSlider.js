import { useRef, useEffect } from "react";

import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import SchoolImg from "@/app/_images/home/map/schoolPhoto/about-school-img.png";

const schools = [
  {
    name: "مدارس الهدى الدولية",
    description: "من التأسيس الى الثانوية",
    price: "3500$",
    features: ["دولية", "المنهاج الأمريكي", "امكانية التقسيط"],
  },
  {
    name: "مدارس الفجر النموذجية",
    description: "مراحل تعليمية متعددة",
    price: "4200$",
    features: ["أهلية", "المنهاج التركي", "نقل مجاني"],
  },
  {
    name: "مدارس النور الحديثة",
    description: "دولية مع برامج دعم",
    price: "3900$",
    features: ["دولية", "المنهاج البريطاني", "تخفيض للأشقاء"],
  },
];

const MapSlider = styled.div`
  position: absolute;
  right: 0;
  bottom: -90px;
  transform: scale(0.9);
  width: 100%;
  max-width: 290px;

  a {
    padding: 8px 14px;
    max-width: 95px;
    margin-bottom: 6px;
  }

  .mainItems {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 18px -8px 0;
  }

  .school-card {
    width: 100%;
    border: 1px solid var(--lightgrey-color);
    background: var(--white-color);
    padding: 0.9rem 0.8rem 1.2rem;
    border-radius: 8px;
    /* overflow: hidden; */

    h3 {
      font-weight: 700;
      display: flex;
      align-items: center;
    }

    p {
      font-size: 1.5rem;
      color: var(--dark-color);
      font-weight: 500;
      margin-bottom: 0;
    }

    .card-info {
      border-bottom: 1px solid var(--grey-color);
      padding-bottom: 2rem;

      .card-img {
        margin-bottom: 12px;
        .srcc {
          object-fit: contain;
        }
      }

      .card-feature-list {
        margin: 0 -3px 12px;
        li {
          padding: 3px 7px;
          font-size: 12px;
          font-weight: 500;
          background: #effffc;
          color: var(--dark-color);
          border: 0.5px solid var(--secondary-color);
          border-radius: 12px;
          display: inline-block;
          margin: 0 3px 5px;

          &.alt {
            background: #fffcec;
            border-color: #f1ab23;
          }
        }
      }
    }

    .book-now {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;

      .price {
        p {
          font-size: 12px;
          font-weight: 500;
          color: var(--dark-color);
        }

        h4 {
          font-size: 20px;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 0;
          line-height: 1;
        }
      }
    }
  }

  .swiper-button {
    background-color: rebeccapurple !important;
    width: 50px;
    height: 50px;
    top: 400px;
    border-radius: 50%;
  }

  .nav-buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 10px;

    button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        background-color: var(--secondary-color);
      }
    }
  }
`;

export default function MainMapSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <MapSlider>
      <a
        className="primary-btn view-btn"
        href="#"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        عرض الكل
      </a>
      <Swiper
        data-aos="fade-left"
        data-aos-duration="1000"
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Swiper يحتاج لإعادة ربط الأزرار بعد init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mainItems"
      >
        {schools.map((school, index) => (
          <SwiperSlide key={index}>
            <div className="school-card-col slider-item">
              <div className="school-card">
                <div className="card-info">
                  <div className="card-img">
                    <Image
                      src={SchoolImg}
                      alt="card-img"
                      width={300}
                      height={200}
                    />
                  </div>
                  <ul className="card-feature-list">
                    {school.features.map((feature, i) => (
                      <li
                        key={i}
                        className={feature.includes("المنهاج") ? "alt" : ""}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <h3>{school.name}</h3>
                  <p>{school.description}</p>
                </div>
                <div className="book-now">
                  <div className="price">
                    <p>تبدأ من </p>
                    <h4>{school.price}</h4>
                  </div>
                  <a className="primary-btn" href="#">
                    احجز الان
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="nav-buttons">
        <button ref={prevRef}>&lt;</button>
        <button ref={nextRef}>&gt;</button>
      </div>
    </MapSlider>
  );
}
