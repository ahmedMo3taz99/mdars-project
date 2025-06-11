"use client"
import Image from "next/image";
import styled from "styled-components";
import LeftArrow from "@/app/_images/schoolspage/cards/left-arrow.png";
import RightArrow from "@/app/_images/schoolspage/cards/right-arrow.png";

const FiltersPaginationStyled = styled.div`
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

export default function FiltersPagination() {
  return (
    <FiltersPaginationStyled>
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
    </FiltersPaginationStyled>
  );
}
