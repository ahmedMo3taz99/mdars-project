"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

import Map from "@/app/_images/schoolspage/searchIcons/map-pin.png";
import Search from "@/app/_images/schoolspage/searchIcons/search-icon.png";

// Animation للظهور التدريجي
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SearchStyled = styled.div`
  padding: 20px 0;

  .search-fields {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    flex-wrap: wrap;

    .field-box {
      flex: 1;
      min-width: 250px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      label {
        font-weight: 600;
        font-size: 14px;
        color: var(--dark-color);
      }

      .location-dropdown {
        width: 100%;
        position: relative;

        .select-location {
          position: relative;

          button {
            width: 100%;
            padding: 10px 40px 10px 12px;
            border: 1px solid var(--lightgrey-color);
            border-radius: 8px;
            background-color: var(--white-color);
            color: var(--dark-color);
            font-size: 14px;
            text-align: right;
            cursor: pointer;
          }

          span {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            max-width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        ul.location-list {
          margin-top: 6px;
          border: 1px solid var(--lightgrey-color);
          border-radius: 10px;
          background: var(--white-color);
          padding: 5px;
          list-style: none;
          position: absolute;
          z-index: 10;
          width: 100%;
          animation: ${fadeIn} 0.2s ease;

          li {
            button {
              width: 100%;
              text-align: right;
              background: none;
              border: none;
              padding: 8px 12px;
              border-radius: 4px;
              font-size: 14px;
              color: var(--dark-color);
              cursor: pointer;

              &:hover {
                background-color: var(--lightgrey-color);
              }
            }
          }
        }
      }

      .input-field {
        position: relative;

        input {
          width: 100%;
          padding: 10px 40px 10px 12px;
          border: 1px solid var(--lightgrey-color);
          border-radius: 8px;
          color: var(--dark-color);
          font-size: 14px;
          background-color: var(--white-color);

          &::placeholder {
            color: #999;
            opacity: 1;
            font-size: 14px;
          }
        }

        span {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          max-width: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    button[type="submit"] {
      border: 0;
      margin-right: 12px;
      cursor: pointer;
      padding: 12px;
    }
  }
`;

export default function SchoolSearch() {
  const [dropdownLocationOpen, setDropdownLocationOpen] = useState(false);
  const [dropdownAreaOpen, setDropdownAreaOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Istanbul, Turkey");
  const [selectedArea, setSelectedArea] = useState("اختر الحي");

  const locationDropdownRef = useRef(null);
  const areaDropdownRef = useRef(null);

  const toggleLocationDropdown = () =>
    setDropdownLocationOpen(!dropdownLocationOpen);
  const toggleAreaDropdown = () => setDropdownAreaOpen(!dropdownAreaOpen);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setDropdownLocationOpen(false);
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setDropdownAreaOpen(false);
  };

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setDropdownLocationOpen(false);
      }

      if (
        areaDropdownRef.current &&
        !areaDropdownRef.current.contains(event.target)
      ) {
        setDropdownAreaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SearchStyled data-aos="fade-down" data-aos-duration="2000">
      <div className="container">
        <form>
          <div className="search-fields">
            <div className="field-box" ref={locationDropdownRef}>
              <label htmlFor="country">اختر البلد المطلوبة</label>
              <div className="location-dropdown">
                <div className="select-location">
                  <button type="button" onClick={toggleLocationDropdown}>
                    {selectedLocation}
                  </button>
                  <span className="location-icon">
                    <Image src={Map} alt="map-pin" width={15} />
                  </span>
                </div>
                {dropdownLocationOpen && (
                  <ul className="location-list">
                    {["Istanbul, Turkey", "اسطنبول", "Turkey, Istanbul"].map(
                      (location, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleLocationSelect(location)}
                          >
                            {location}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            </div>

            <div className="field-box" ref={areaDropdownRef}>
              <label htmlFor="area">اختر الحي</label>
              <div className="location-dropdown">
                <div className="select-location">
                  <button type="button" onClick={toggleAreaDropdown}>
                    {selectedArea}
                  </button>
                  <span className="location-icon">
                    <Image src={Map} alt="map-pin" width={15} />
                  </span>
                </div>
                {dropdownAreaOpen && (
                  <ul className="location-list">
                    {["حي الفاتح", "حي تقسيم", "حي بشكتاش"].map(
                      (area, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleAreaSelect(area)}
                          >
                            {area}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            </div>

            <div className="field-box">
              <label htmlFor="school">ابحث عن المدرسة</label>
              <div className="input-field">
                <input
                  type="search"
                  id="school"
                  placeholder="اكتب اسم المدرسة هنا"
                />
                <span>
                  <Image src={Search} alt="icon" width={15} />
                </span>
              </div>
            </div>

            <button className="secondary-btn" type="submit">
              ابحث الآن
            </button>
          </div>
        </form>
      </div>
    </SearchStyled>
  );
}
