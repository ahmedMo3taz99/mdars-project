"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "./LanguageProvider";

const CardInfo = styled.div`
  position: relative;
  border-bottom: 1px solid var(--grey-color);
  padding-bottom: 2rem;

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
  .success-icon {
    max-width: 2rem;
    margin-right: 8px;
    margin-bottom: 0;
    .srcc {
      object-fit: contain;
    }
  }

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
`;

const BookNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  .price {
    span {
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
`;

export default function SchoolCardReAll({
  Imagee,
  Country,
  CountryLang,
  Installment,
  NameSchool,
  SuccessIcon,
  TitleSchool,
  Money,
}) {
  const { locale } = useTranslation();

  return (
    <>
      <CardInfo>
        <div className="card-img">
          <Image
            src={Imagee}
            alt={Imagee}
            width={300}
            height={200}
            priority
            className="srcc"
          />
        </div>
        <ul className="card-feature-list">
          <li> {Country} </li>
          <li className="alt"> {CountryLang} </li>
          <li> {Installment} </li>
        </ul>
        <h3>
          {NameSchool}
          <span className="success-icon">
            <Image
              src={SuccessIcon}
              alt={SuccessIcon}
              className="srcc"
              width={20}
              height={20}
            />
          </span>
        </h3>
        <p> {TitleSchool} </p>
      </CardInfo>

      <BookNow>
        <div className="price">
          <span>تبدأ من </span>
          <h4> {Money} </h4>
        </div>
        <Link className="primary-btn" href={`/${locale}/schools/${NameSchool}`}>
          تفاصيل
        </Link>
      </BookNow>
    </>
  );
}
