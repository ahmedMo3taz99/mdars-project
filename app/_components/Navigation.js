"use client"
import Link from "next/link";
import styled from "styled-components";

const UL = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  li {
    .Linkk {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export default function Navigation() {
  return (
    <UL as="ul">
      <li>
        <Link href="/about" className="Linkk">
          من نحن
        </Link>
      </li>
      <li>
        <Link href="/schools" className="Linkk">
          المدارس
        </Link>
      </li>
    </UL>
  );
}
