import styled from "styled-components";
import Image from "next/image";

import FrFilter from "./RightResultFilters/FrFilter";
import SecFilter from "./RightResultFilters/SecFilter";
import MoreFilter from "./RightResultFilters/MoreFilter";

import { FaCodeCompare } from "react-icons/fa6";

const RightResultStyled = styled.div`
  width: 30%;

  .result-filters {
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    box-shadow: 0px 1px 2px 0px #00000012;
    padding: 20px;
    background: var(--white-color);

    .filter-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      border-bottom: 1px solid #e6e6e6;

      h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 0;
      }

      button {
        display: block;
        cursor: pointer;
        border: 1px solid #e6e6e6;
        padding: 10px 26px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        background: transparent;
      }
    }

    .education-level {
      padding: 16px 0;

      .filters {
        border-bottom: 1px solid #e6e6e6;
        padding: 16px 0 8px;

        &:last-child {
          padding-bottom: 0;
        }

        h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }
      }
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  background-color: #000;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  width: max-content;
  .iconComaper {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.8rem;
  }
`;
export default function RightResult() {
  return (
    <RightResultStyled>
      <Icon data-aos="fade-left" data-aos-duration="2000">
        <FaCodeCompare className="iconComaper" />
        <p>مقارنة بين المدارس</p>
      </Icon>
      <div className="result-filters">
        <div className="filter-btn">
          <h3>الفلتر</h3>
          <button>الغي جميع الفلاتر</button>
        </div>

        <div className="education-level">
          <FrFilter />

          <SecFilter />

          <MoreFilter />
        </div>
      </div>
    </RightResultStyled>
  );
}
