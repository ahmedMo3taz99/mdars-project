"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";
import LoactionLogIn from "./LoactionLogIn";
import { useTranslation } from "./LanguageProvider";

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;

  li {
    padding: 0 2rem;

    .linkk {
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

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const LanguageSwitcher = styled.button`
  background: linear-gradient(45deg, var(--secondary-color));
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  min-width: 8rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(8, 0, 120, 0.7);
  }

  .lang-text {
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: var(--primary-color); */
    gap: 0.5rem;
  }

  .lang-icon {
    font-size: 1.8rem;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
`;

export default function Navigation() {
  const { t, locale } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";

    // استبدال الـ locale في الـ URL الحالي
    const currentPath = pathname;
    let newPath;

    if (currentPath.startsWith(`/${locale}`)) {
      // إذا كان الـ URL يحتوي على locale، استبدله
      newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    } else {
      // إذا لم يكن يحتوي على locale، أضف الـ locale الجديد
      newPath = `/${newLocale}${currentPath}`;
    }

    router.push(newPath);
  };

  //  لإنشاء روابط
  const createLocalizedLink = (path) => {
    return `/${locale}${path}`;
  };

  return (
    <NavigationWrapper>
      <HeaderMenu>
        <MenuList className="header-menu-list">
          <li>
            <Link href={createLocalizedLink("/schools")} className="linkk">
              {t("schools")}
            </Link>
          </li>
          <li>
            <Link href={createLocalizedLink("/teachers")} className="linkk">
              {t("teachers")}
            </Link>
          </li>
          <li>
            <Link href={createLocalizedLink("/about")} className="linkk">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href={createLocalizedLink("/contact")} className="linkk">
              {t("contact")}
            </Link>
          </li>
        </MenuList>

        <LoactionLogIn />
      </HeaderMenu>

      <LanguageSwitcher onClick={switchLanguage}>
        <span className="lang-text">
          <span className="lang-icon">{locale === "ar" ? "🇺🇸" : "🇸🇦"}</span>
          {locale === "ar" ? "EN" : "عربي"}
        </span>
      </LanguageSwitcher>
    </NavigationWrapper>
  );
}
