"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const navLinks = [
  {
    name: "حساب ولي الامر",
    href: "/login/parent_login",
  },
  {
    name: "حساب مدرسه ",
    href: "/login/school_login",
  },
];

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: normal;

  &.active {
    color: #2563eb;
    font-weight: bold;
  }

  &:hover {
    color: #2563eb;
  }
`;

function LoginNavigation() {
  const pathName = usePathname();

  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <StyledLink
              href={link.href}
              className={pathName === link.href ? "active" : ""}
            >
              <span>{link.name}</span>
            </StyledLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LoginNavigation;
