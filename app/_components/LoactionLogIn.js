"use client";
import styled from "styled-components";
import { useTranslation } from "./LanguageProvider";
import NavLink from "./NavLink";

const AnimatedLoginButton = styled.div`
  margin-right: 5rem;
`;

export default function LoginButton() {
  const { t, locale } = useTranslation();

  return (
    <AnimatedLoginButton>
      {/* <Link href={`/${locale}/login`}> {t("login")} </Link> */}

      <NavLink href={`/login`}> {t("login")} </NavLink>
    </AnimatedLoginButton>
  );
}
