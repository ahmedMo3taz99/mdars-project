import styled from "styled-components";
import { FiltersList } from "./FrFilter";
import SchoolFeesSlider from "./SchoolFeesSlider";

const MoreFilters = styled.div`
  margin-top: 16px;

  .filters.rating {
    padding-bottom: 16px;
  }

  .star-images {
    display: flex;
    align-items: center;
    margin: 0 -2px;

    span {
      display: block;
      width: 100%;
      max-width: 23px;
      margin: 0 2px;

      &:first-child {
        opacity: 0.8;
      }
    }
  }
`;

export default function MoreFilter() {
  return (
    <MoreFilters>
      <div className="filters">
        <h3>نوع المدرسة</h3>
        <FiltersList>
          <a href="#">أهلية</a>
          <a href="#">احتياجات خاصة </a>
          <a href="#">عالمية</a>
        </FiltersList>
      </div>

      <div className="filters">
        <h3>فئة الطلاب</h3>
        <FiltersList>
          <a href="#">ذكور</a>
          <a href="#">ذكور واناث</a>
          <a href="#">اناث</a>
        </FiltersList>
      </div>

      <SchoolFeesSlider/>
    </MoreFilters>
  );
}
