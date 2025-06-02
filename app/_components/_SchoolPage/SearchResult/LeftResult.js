import styled from "styled-components";
import Image from "next/image";

import { SchoolCardsRow } from "../../HomeComponents/SchoolCard/SchoolCards";

import ImgSrc from "@/app/_images/home/card/cards/card-img1.png";
import Heart from "@/app/_images/schoolspage/cards/heart.png";
import LeftArrow from "@/app/_images/schoolspage/cards/left-arrow.png";
import RightArrow from "@/app/_images/schoolspage/cards/right-arrow.png";

const LeftResultStyled = styled.div`
  width: 68%;

  .parentOf {
    /* height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden; */
  }

  .filter-col {
    width: 33.33%;
  }
`;

const FiltersPagination = styled.div`
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  .pagination-list {
    display: flex;
    align-items: center;
    margin: 0 -4px;

    li {
      padding: 0 4px;

      a {
        /* font-family: "Inter", sans-serif; */
        font-size: 12px;
        color: #787a88;
        font-weight: 600;
        border: 1px solid #e6e6e6;
        box-shadow: 0px 1px 2px 0px #00000012;
        background: var(--white-color);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;

        span {
          display: block;
          width: 100%;
          max-width: 9px;
        }

        &.active {
          background: var(--primary-color);
          color: var(--white-color);
        }
      }
    }
  }
`;

export default function LeftResult() {
  return (
    <LeftResultStyled>
      <SchoolCardsRow className="parentOf">
        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>

        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>

        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>

        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>

        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>

        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>

        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>

        <div
          className="school-card-col filter-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card filter-card">
            <div className="card-info">
              <div className="card-img">
                <Image
                  src={ImgSrc}
                  alt="card-img"
                  width={300}
                  height={200}
                  className="srcc"
                />
              </div>

              <ul className="card-feature-list">
                <li>دولية</li>
                <li className="alt">المنهاج الأمريكي</li>
                <li>امكانية التقسيط</li>
              </ul>
              <h3>مدارس الإحسان الدولية </h3>
              <p>من التأسيس الى الثانوية </p>
            </div>
            <div className="book-now">
              <div className="price">
                <p>تبدأ من </p>
                <h4> 3500$</h4>
              </div>
              <a className="primary-btn" href="#">
                احجز الان
              </a>
            </div>
          </div>
        </div>
      </SchoolCardsRow>

      <FiltersPagination>
        <ul className="pagination-list">
          <li>
            <a className="active" href="#">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">
              <span>
                <Image src={LeftArrow} alt="icon" width={10} />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <Image src={RightArrow} alt="icon" width={10} />
              </span>
            </a>
          </li>
        </ul>
      </FiltersPagination>
    </LeftResultStyled>
  );
}
