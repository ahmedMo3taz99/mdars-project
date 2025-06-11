"use client"
import Image from "next/image";
import styled from "styled-components";
import CheckBox from "@/app/_images/schoolspage/filter/checkbox.png";
import FilterLight from "@/app/_images/schoolspage/filter/filter-info-icon.png";

const FilterCheckbox = styled.div`
  padding: 5px 0;
  margin-bottom: 15px;

  &:nth-child(2) {
    margin-bottom: 0;
  }

  label {
    position: relative;
    padding: 9px 44px 9px 12px;
    border-radius: 12px;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    background: var(--offwhite-color);

    &::before {
      content: "";
      display: block;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translate(0, -50%);
      width: 20px;
      height: 20px;
      background: #e8eeff;
      border: 1px solid #dde5f7;
      border-radius: 4px;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  input:checked + label::before {
    background: #e8eeff url(${CheckBox.src}) no-repeat center/ 12px;
  }
`;

export const FiltersList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -4px;

  a {
    display: flex;
    align-items: center;
    background: transparent;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    color: #1f2026;
    margin: 0 4px 8px;

    span {
      display: block;
      width: 100%;
      max-width: 12px;
      margin-left: 10px;
    }

    &.active {
      color: var(--white-color);
      background: var(--secondary-color);
    }
  }
`;

export default function FrFilter() {
  return (
    <>
      <FilterCheckbox>
        <input type="checkbox" id="intall" />
        <label htmlFor="intall">مع خيار التقسيط</label>
      </FilterCheckbox>
      <FilterCheckbox>
        <input type="checkbox" id="fees" />
        <label htmlFor="fees">مع خصومات على الرسوم</label>
      </FilterCheckbox>

      <div className="filters">
        <h3>المرحلة التعليمية</h3>

        <FiltersList>
          <a className="active" href="#">
            المرحلة الابتدائية
          </a>
          <a className="active" href="#">
            المرحلة الاعدادية
          </a>
          <a href="#">المرحلة الثانوية</a>
          <a href="#">التمهيدي</a>
          <a className="all" href="#">
            <span>
              <Image src={FilterLight} alt="img" width={20} />
            </span>
            الكل
          </a>
        </FiltersList>
      </div>
    </>
  );
}
