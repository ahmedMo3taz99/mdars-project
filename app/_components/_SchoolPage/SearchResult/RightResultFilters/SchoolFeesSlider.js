// components/SchoolFeesSlider.js
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const SchoolFeesWrapper = styled.div`
  margin-top: 24px;

  .range-slider {
    direction: ltr;
  }

  .rc-slider {
    height: 6px;
    background: #e6e6e6;
    border-radius: 6px;
  }

  .rc-slider-track {
    background-color: var(--secondary-color);
    height: 6px;
  }

  .rc-slider-handle {
    border-radius: 100px;
    border: 0;
    width: 12px;
    height: 12px;
    background: var(--secondary-color);
    outline: 5px solid var(--white-color);
    top: 50%;
    margin-top: -6px;
    transform: translateY(0);
    box-shadow: none;
  }

  .school-fees {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
    justify-content: space-between;
  }

  .fees-box {
    width: 48%;
    border: 1px solid #e5e6eb;
    box-shadow: 0px 1px 2px 0px #00000012;
    border-radius: 6px;
    padding: 12px 14px;
    display: flex;
    align-items: center;

    strong {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: #767a85;
      text-transform: uppercase;
      padding-right: 12px;
    }

    input {
      font-size: 14px;
      font-weight: 400;
      border: 0;
      color: #1f2026;
      width: 100%;
      background: transparent;
      text-align: start;
    }
  }
`;

export default function SchoolFeesSlider() {
  const [values, setValues] = useState([0, 200]);

  return (
    <SchoolFeesWrapper className="filters bd-none">
      <h3>رسوم المدرسة</h3>
      <div className="range-slider">
        <div className="school-fees">
          <div className="fees-box">
            <strong>USD</strong>
            <input type="text" readOnly value={values[0]} />
          </div>
          <div className="fees-box">
            <strong>USD</strong>
            <input type="text" readOnly value={values[1]} />
          </div>
        </div>
        <Slider range min={0} max={200} value={values} onChange={setValues} />
      </div>
    </SchoolFeesWrapper>
  );
}
