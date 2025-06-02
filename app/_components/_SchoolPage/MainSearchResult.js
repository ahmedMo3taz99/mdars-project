"use client";

import styled from "styled-components";
import LeftResult from "./SearchResult/LeftResult";
import RightResult from "./SearchResult/RightResult";

const MainSearchResultStyled = styled.div`
  background: var(--offwhite-color);
  padding: 27px 0 150px;

  .search-lead-title {
    max-width: 651px;
    padding: 50px 0 40px;

    p {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .search-result {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export default function MainSearchResult() {
  return (
    <MainSearchResultStyled>
      <div className="container">
        <div className="search-lead-title">
          <h1 data-aos="fade-left" data-aos-duration="2000">
            دليل مدارس اسطنبول
          </h1>
          <p data-aos="fade-up" data-aos-duration="2000">
            منصة مدارس السعودية هي منصة إلكترونية تهدف إلى جمع معلومات المدارس
            الدولية في السعودية في مكان واحد، لتسهيل عملية البحث عن المدرسة
            المناسبة لأولياء الأمور.
          </p>
        </div>

        <div className="search-result">
          <RightResult />

          <LeftResult />
        </div>
      </div>
    </MainSearchResultStyled>
  );
}
