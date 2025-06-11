"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { useTranslation } from "./LanguageProvider";

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: var(--white-color);
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: var(--secondary-color);
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary-color);
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    color: var(--secondary-color);
  }
`;

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const { locale } = useTranslation();

  const createLocalizedLink = (path) => {
    return `/${locale}${path}`;
  };

  const localizedHref = createLocalizedLink(href);
  const isActive = pathname.startsWith(localizedHref);

  return (
    <StyledLink
      href={localizedHref}
      className={isActive ? "active" : undefined}
    >
      {children}
    </StyledLink>
  );
}
