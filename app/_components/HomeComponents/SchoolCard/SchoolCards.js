import styled from "styled-components";

import ImgSrc from "@/app/_images/home/card/cards/card-img1.png";
import Success from "@/app/_images/home/card/cards/success-icon.png";
import Image from "next/image";
import Link from "next/link";

const SchoolCardsRow = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2.2rem -6px 0;
  overflow: hidden;

  .school-card-col {
    width: 25%;

    padding: 0 0.6rem 1rem;

    .school-card {
      width: 100%;

      border: 1px solid var(--lightgrey-color);
      background: var(--white-color);
      padding: 0.9rem 0.8rem 1.2rem;
      border-radius: 8px;
      overflow: hidden;
      h3 {
        font-weight: 700;
        display: flex;
        align-items: center;
      }

      .success-icon {
        max-width: 2rem;
        margin-right: 8px;
        margin-bottom: 0;
        .srcc {
          object-fit: contain;
        }
      }

      p {
        font-size: 1.5rem;
        color: var(--dark-color);
        font-weight: 500;
        margin-bottom: 0;
      }

      .card-info {
        position: relative;
        border-bottom: 1px solid var(--grey-color);
        padding-bottom: 2rem;

        .card-img {
          margin-bottom: 12px;
          .srcc {
            object-fit: contain;
            /* height: 18rem; */
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
          sm {
            font-size: 12px;
            font-weight: 500;
            color: var(--dark-color);
            font-style: normal;
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
  }
`;

export default function SchoolCards() {
  return (
    <SchoolCardsRow>
      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className="school-card-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="school-card">
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
            <h3>
              مدارس الهدى الدولية
              <span className="success-icon">
                <Image src={Success} alt="tick-icon" className="srcc" />
              </span>
            </h3>
            <p>من التأسيس الى الثانوية </p>
          </div>
          <div className="book-now">
            <div className="price">
              <sm>تبدأ من </sm>
              <h4> 3500$</h4>
            </div>
            <Link className="primary-btn" href="#">
              احجز الان
            </Link>
          </div>
        </div>
      </div>
    </SchoolCardsRow>
  );
}
