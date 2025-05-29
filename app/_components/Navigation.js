"use client";

import Link from "next/link";
import styled from "styled-components";
import LoactionLogIn from "./LoactionLogIn";

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  .header-menu-list {
    display: flex;
    align-items: center;

    li {
      padding: 0 1.2rem;

      .linkk {
        font-size: 2rem;
        color: var(--white-color);
        transition: color 0.3s;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }
`;

export default function Navigation() {
  return (
    <HeaderMenu>
      <ul className="header-menu-list">
        <li>
          <Link href="#" className="linkk">
            المدراس
          </Link>
        </li>
        <li>
          <Link href="#" className="linkk">
            بوابة المعلمين
          </Link>
        </li>
        <li>
          <Link href="/about" className="linkk">
            من نحن
          </Link>
        </li>
        <li>
          <Link href="#" className="linkk">
            تواصل معنا
          </Link>
        </li>
      </ul>

      <LoactionLogIn />
    </HeaderMenu>
  );
}
