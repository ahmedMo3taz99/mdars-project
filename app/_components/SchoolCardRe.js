"use client";
import styled from "styled-components";
import SchoolCardReAll from "./SchoolCardReAll";
import { usePathname } from "next/navigation";
import { useTranslation } from "./LanguageProvider";

export const SchoolCardsRow = styled.div`
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
    }
  }

  .filter-col {
    width: 33.33%;
    padding: 0 0.6rem 1rem;

    .school-card {
      width: 100%;

      border: 1px solid var(--lightgrey-color);
      background: var(--white-color);
      padding: 0.9rem 0.8rem 1.2rem;
      border-radius: 8px;
      overflow: hidden;
    }
  }
`;

export default function SchoolCardRe({ schools }) {
  const path = usePathname();
  console.log(path);

  const { locale } = useTranslation();
  console.log(locale);

  return (
    <SchoolCardsRow>
      {schools.map((school) => (
        <div
          key={school.id}
          className={
            path === `/${locale}/schools` ||
            path.startsWith(`/${locale}/schools/`)
              ? "filter-col"
              : "school-card-col"
          }
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="school-card">
            <SchoolCardReAll {...school} />
          </div>
        </div>
      ))}
    </SchoolCardsRow>
  );
}
