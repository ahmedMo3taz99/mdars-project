"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import UKFlag from "@/app/_images/loactionLogin/uk-flag.png";
import UK from "@/app/_images/loactionLogin/uk.png";
import Canada from "@/app/_images/loactionLogin/canada-flag.png";
import Brazil from "@/app/_images/loactionLogin/brazil-flag.png";
import Germany from "@/app/_images/loactionLogin/germany-flag.png";
import Link from "next/link";

const LocationDropdown = styled.div`
  position: relative;
  margin-right: 5rem;
  cursor: pointer;
  transition: all 0.5s;

  .selected a {
    padding: 0;
    font-size: 1.8rem;
    background: transparent;
    border: 0;
    color: var(--white-color);
    max-width: 22rem;
    height: 2.2rem;
    margin-left: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    .SRC {
      border-radius: 10rem;
      object-fit: cover;
    }
  }

  .country-select {
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1.5rem;
    background-color: var(--white-color);
    border-radius: 1.3rem;
    width: 15rem;
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-10px")});
    transition: all 0.3s ease;
    z-index: 10;

    .header-location-list li {
      padding-bottom: 15px;

      &:last-child {
        padding-bottom: 0;
      }

      a {
        color: var(--dark-color);
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

const countries = [
  { name: "تسجيل الدخول", flag: UK, href: "/login" },
  { name: "تسجيل الدخول", flag: Canada, href: "/login" },
  { name: "تسجيل الدخول", flag: Brazil, href: "/login" },
  { name: "تسجيل الدخول", flag: Germany, href: "/login" },
];

export default function LoactionLogIn() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    name: "تسجيل الدخول",
    flag: UKFlag,
  });
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

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <LocationDropdown $isOpen={isOpen} ref={dropdownRef}>
      <div className="selected">
        <Link href="#" onClick={() => setIsOpen((prev) => !prev)}>
          <Image
            src={selected.flag}
            alt="flag"
            className="SRC"
            width={24}
            height={24}
          />
          {selected.name}
        </Link>
      </div>

      <div className="country-select">
        <ul className="header-location-list">
          {countries.map((country, index) => (
            <li key={index}>
              <Link href={country.href} onClick={() => handleSelect(country)}>
                <Image
                  src={country.flag}
                  alt="flag"
                  className="SRC"
                  width={24}
                  height={24}
                />
                {country.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </LocationDropdown>
  );
}
