"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DiscussBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem;
  background: var(--white-color);
  border-radius: 1.6rem;
  position: relative;

  input {
    width: 100%;
    max-width: 28rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--dark-color);
    border: 0;
    outline: 0;
    margin-right: 2rem;
  }

  .location-dropdown {
    position: relative;

    .select-location {
      a {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid var(--lightgrey-color);
        border-radius: 8px;
        padding: 0.8rem 1.4rem 0.8rem 4rem;
        font-size: 1.4rem;
        color: #121012;
        position: relative;
        background: var(--color-grey-50);
        cursor: pointer;

        &::after {
          content: "";
          position: absolute;
          left: 1.4rem;
          top: 50%;
          transform: translate(0, -50%) rotate(45deg);
          width: 1rem;
          height: 1rem;
          border-style: solid;
          border-color: #787a88;
          border-width: 0 2px 2px 0;
        }
      }
    }

    .location-list {
      position: absolute;
      color: #121012;
      left: 0;
      right: 0;
      top: 100%;
      z-index: 999;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

      li a {
        color: var(--color-grey-800);
        font-size: 14px;
        padding: 8px 10px 8px 26px;
        display: block;
        cursor: pointer;

        &:hover {
          background-color: #f1f1f1;
        }
      }
    }
  }

  .secondary-btn {
    max-width: 13.1rem;
  }
`;

function LocationDropdown({ options, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="location-dropdown" ref={dropdownRef}>
      <div className="select-location">
        <a onClick={() => setIsOpen((prev) => !prev)}>{selected}</a>
      </div>
      <ul
        className="location-list"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {options.map((option, index) => (
          <li key={index}>
            <a onClick={() => handleSelect(option)}>{option}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DiscussBox() {
  return (
    <DiscussBoxStyle>
      <input type="text" placeholder="اكتب  اسم المدرسة او المنهاج .." />

      <LocationDropdown
        defaultValue="الأمريكي"
        options={["تسجيل الدخول", "الأمريكي"]}
      />

      <LocationDropdown
        defaultValue="اسطنبول"
        options={["تسجيل الدخول", "اسطنبول"]}
      />

      <a className="secondary-btn" href="#">
        بحث
      </a>
    </DiscussBoxStyle>
  );
}
