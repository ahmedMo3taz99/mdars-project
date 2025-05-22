"use client";
import Link from "next/link";

import styled from "styled-components";

const UL = styled.ul`
  display: flex;
  list-style: none;

  li {
    .Linkk {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export default function LogIn() {
  return (
    <UL as="ul">
      <li>
        <Link href="/login" className=" Linkk">
          تسجيل الدخول
        </Link>
      </li>
    </UL>
  );
}
