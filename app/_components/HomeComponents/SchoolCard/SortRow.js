import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Filter from "@/app/_images/home/card/filter.png";
import Turkey from "@/app/_images/home/card/turkey.png";
import Uk from "@/app/_images/home/card/uk.png";
import Link from "next/link";

// Animation for dropdown
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

const SortingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 35%;
  margin: 0 -6px;
`;

const FilterDropdown = styled.div`
  margin: 0 6px;
  position: relative;
  display: inline-block;

  .filter-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid var(--lightgrey-color);
    border-radius: 0.8rem;
    padding: 0.8rem 1.4rem 0.8rem 4rem;
    font-size: 1.4rem;
    color: #121012;
    background: var(--white-color);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 1.4rem;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 1rem;
      height: 1rem;
      border: solid #787a88;
      border-width: 0 2px 2px 0;
    }

    span {
      display: block;
      max-width: 1.5rem;
      margin-left: 0.8rem;

      img {
        width: auto;
        height: 1.6rem;
        object-fit: contain;
      }
    }

    .filter-tag {
      padding: 0;
      background: #ecf2ff;
      color: #121012;
      display: block;
      width: 5.1rem;
      text-align: center;
      border: 0;
      border-radius: 1.6rem;
      margin: 0 0.8rem;
      font-size: 1.2rem;
    }
  }
`;

const LocationDropdown = styled.div`
  margin: 0 6px;
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 13.1rem;

  .location-button {
    display: flex;
    align-items: center;
    border: 1px solid var(--lightgrey-color);
    border-radius: 8px;
    padding: 0.8rem 1.4rem 0.8rem 4rem;
    font-size: 1.4rem;
    color: #121012;
    background: var(--white-color);
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: 1.4rem;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 1rem;
      height: 1rem;
      border: solid #787a88;
      border-width: 0 2px 2px 0;
    }
  }
`;

const LocationList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 999;
  animation: ${fadeIn} 0.2s ease-in-out;
  background: var(--white-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  li a {
    padding: 0.8rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--lightgrey-color);
    font-size: 1.4rem;
    color: #121012;
    background: var(--white-color);
    transition: background 0.2s ease;
    text-decoration: none;

    &:hover {
      background: #f4f4f4;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const DropdownFlag = styled.span`
  display: block;
  width: auto;
  max-width: 1.8rem;
  margin-left: 0.8rem;

  img {
    width: auto;
    height: 1.6rem;
    object-fit: contain;
  }
`;

export default function SortRow() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const filterRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setIsLocationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SortingRow>
      {/* تصنيف حسب */}
      <FilterDropdown ref={filterRef}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="filter-button"
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          <span>
            <Image src={Filter} alt="filter-icon" />
          </span>
          تصنيف حسب <span className="filter-tag">المنهاج</span>
        </div>
        {isFilterOpen && (
          <LocationList>
            <li>
              <Link href="/login">تسجيل الدخول</Link>
            </li>
            <li>
              <Link href="/register">تسجيل جديد</Link>
            </li>
          </LocationList>
        )}
      </FilterDropdown>

      {/* الدولة */}
      <LocationDropdown ref={locationRef}>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="location-button"
          onClick={() => setIsLocationOpen((prev) => !prev)}
        >
          <DropdownFlag>
            <Image src={Turkey} alt="flag" />
          </DropdownFlag>
          اسطنبول
        </div>
        {isLocationOpen && (
          <LocationList>
            <li>
              <Link href="/">
                <DropdownFlag>
                  <Image src={Uk} alt="flag" />
                </DropdownFlag>
                لندن
              </Link>
            </li>
            <li>
              <Link href="/">
                <DropdownFlag>
                  <Image src={Turkey} alt="flag" />
                </DropdownFlag>
                اسطنبول
              </Link>
            </li>
          </LocationList>
        )}
      </LocationDropdown>
    </SortingRow>
  );
}
