"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.webp";
import Enlogo from "@/public/mdares-en-white-logo.webp";
import { useTranslation } from "./LanguageProvider";
import styled from "styled-components";

const LogoStyled = styled.div`
  margin: 0 5rem;
  .srcc {
    object-fit: contain;
    transition: all 0.3s ease;
    cursor: pointer;
    /* ده الحل - خلي الـ height يتحسب تلقائياً */
    height: auto !important;
  }
`;

export default function Logo() {
  const { locale } = useTranslation();

  // اختيار الصورة المناسبة حسب اللغة
  const logoSrc = locale === "en" ? Enlogo : logo;
  const altText = locale === "en" ? "Mdares English Logo" : "شعار موقع مدارس";

  // إنشاء رابط محلي للصفحة الرئيسية
  const homeLink = `/${locale}`;

  return (
    <LogoStyled>
      <Link href={homeLink}>
        <Image
          width={0}
          height={0}
          priority
          quality={90}
          src={logoSrc}
          alt={altText}
          className="srcc"
          sizes="190px"
          style={{
            width: '190px',
            height: 'auto'
          }}
        />
      </Link>
    </LogoStyled>
  );
}