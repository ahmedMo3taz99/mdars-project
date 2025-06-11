"use client"

import Image from "next/image";

import FilterLight from "@/app/_images/schoolspage/filter/filter-info-icon.png";
import DownArrow from "@/app/_images/schoolspage/filter/down-arrow.png";
import { FiltersList } from "./FrFilter";
import styled from "styled-components";

const ViewAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 95px;
  margin-right: auto;

  font-size: 14px;
  font-weight: 600;
  color: #1f2026;

  span {
    display: block;
    width: 100%;
    max-width: 14px;
    margin-right: 15px;
  }
`;

export default function SecFilter() {
  return (
    <div className="filters bd-none">
      <h3>المنهاج </h3>
      <FiltersList>
        <a href="#">المنهاج البريطاني</a>
        <a href="#">عربي فلسطيني</a>
        <a href="#">المنهاج الأمريكي</a>
        <a className="all" href="#">
          <span>
            <Image src={FilterLight} alt="img" width={20} />
          </span>
          الكل
        </a>
        <a href="#">لبناني</a>
        <a href="#">بكالوريا IB</a>
        <a href="#">المنهاج الأمريكي</a>
        <a href="#">تركي امريكي</a>
        <a href="#">سات</a>
      </FiltersList>

      <ViewAll>
        شاهد الكل
        <span>
          <Image src={DownArrow} alt="arrow-icon" width={15} />
        </span>
      </ViewAll>
    </div>
  );
}
