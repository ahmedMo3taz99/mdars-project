"use client";

import styled from "styled-components";
import SchoolAcc from "@/app/_images/login/school-account-sm-icon.png";
import ReadlAcc from "@/app/_images/login/reading-book.png";
import Image from "next/image";
import { useTranslation } from "../LanguageProvider";
import Link from "next/link";

const AccountWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--offwhite-color);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Account = styled.div`
  h1 {
    text-align: center;
  }
`;

const AccountList = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  margin: 88px auto 0;
`;

const AccountCard = styled.div`
  width: 50%;
  padding: 0 12px;
`;

const AccountBox = styled.div`
  padding: 48px 20px;
  background: var(--white-color);
  border-radius: 24px;
  height: 100%;
  text-align: center;

  a {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 18px;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    margin-bottom: 0;
  }
`;

const AccountIcon = styled.div`
  width: 100%;
  max-width: 66px;
  margin: 0 auto 18px;
  .srcc {
    object-fit: contain;
  }
`;

// Success components for future use
const SuccessBox = styled.div`
  width: 100%;
  max-width: 486px;
  border-radius: 12px;
  padding: 64px 40px;
  margin: 0 auto;
  text-align: center;
  background: var(--white-color);

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #000000;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 0;
  }
`;

const SuccessIcon = styled.div`
  width: 100%;
  max-width: 96px;
  margin: 0 auto 24px;
`;

function LoginNavigation() {
  const { locale } = useTranslation();
  return (
    <AccountWrap>
      <Container>
        <Account>
          <h1>اختر نوع الحساب</h1>
          <AccountList>
            <AccountCard>
              <AccountBox>
                <AccountIcon>
                  <Image src={SchoolAcc} alt="icon" className="srcc" />
                </AccountIcon>
                <Link href={`/${locale}/login/school_login`}>حساب مدرسة</Link>
                <p>مناهج عالمية معترف بها دوليا و عالميًا.</p>
              </AccountBox>
            </AccountCard>
            <AccountCard>
              <AccountBox>
                <AccountIcon>
                  <Image src={ReadlAcc} alt="icon" className="srcc" />
                </AccountIcon>
                <Link href={`/${locale}/login/parent_login`}>حساب ولي امر</Link>
                <p>مناهج عالمية معترف بها دوليا و عالميًا.</p>
              </AccountBox>
            </AccountCard>
          </AccountList>
        </Account>
      </Container>
    </AccountWrap>
  );
}

export default LoginNavigation;
