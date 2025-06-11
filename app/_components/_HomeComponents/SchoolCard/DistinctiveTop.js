"use client"

import styled from "styled-components";

import Line from "@/app/_images/home/bd-bottom-layer.png";
import SortRow from "./SortRow";

const DistinctiveTopStyled = styled.div`
  h2 {
    margin-bottom: 4.4rem;

    position: relative;
    padding-bottom: 16px;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 18.8rem;
      height: 1.4rem;
      background: url(${Line.src}) no-repeat center/ contain;
    }
  }

  .scroll-tab-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .tabs-list {
      display: flex;
      align-items: center;
      margin-left: 24px;
      border-bottom: 1px solid var(--grey-color);
      width: 65%;

      li {
        padding-left: 36px;
        text-align: center;

        &:last-child {
          padding-left: 0;
        }
      }

      a {
        font-size: 16px;
        color: #667085;
        font-weight: 500;
        transition: color 0.3s;
        display: block;
        position: relative;
        padding-bottom: 12px;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: transparent;
          transition: background 0.3s;
        }

        &:hover {
          color: #2f64d3;
          font-weight: 700;

          &:hover::after {
            background: #2f64d3;
          }
        }

        &.active {
          color: #2f64d3;
          font-weight: 700;

          &::after {
            background: #2f64d3;
          }
        }
      }
    }
  }
`;

export default function DistinctiveTop() {
  return (
    <DistinctiveTopStyled>
      <h2 className="after-ly" data-aos="fade-up" data-aos-duration="2000">
        المدارس المميزة
      </h2>
      <div className="scroll-tab-row">
        <ul className="tabs-list">
          <li>
            <a className="active" href="#">
              كل المدارس
            </a>
          </li>
          <li>
            <a href="#">نظام أمريكي</a>
          </li>
          <li>
            <a href="#">نظام بيريطاني</a>
          </li>
          <li>
            <a href="#">نظام عربي</a>
          </li>
        </ul>

        <SortRow />
      </div>
    </DistinctiveTopStyled>
  );
}
