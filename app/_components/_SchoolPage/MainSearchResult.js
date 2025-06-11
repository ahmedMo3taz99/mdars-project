import LeftResult from "./SearchResult/LeftResult";
import RightResult from "./SearchResult/RightResult";
import { MainSearchResultStyled, SearchResult } from "./AllstyledSchool";

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

        <SearchResult>
          <RightResult />

          <LeftResult />
        </SearchResult>
      </div>
    </MainSearchResultStyled>
  );
}
