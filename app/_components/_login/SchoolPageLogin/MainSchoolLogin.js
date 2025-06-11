"use client";
import styled from "styled-components";
import Image from "next/image";

import Mail from "@/app/_images/login/parentLogin/icons/input-mail-dark-icon.png";
import Privacy from "@/app/_images/login/parentLogin/icons/input-privacy-dark-icon.png";

const SignWrap = styled.div`
  height: auto;
  padding: 55px 0;
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

const LoginForm = styled.div`
  width: 100%;
  max-width: 486px;
  margin: 45px auto 0;
  padding: 64px;
  background: var(--white-color);
  border: 1px solid #e6e6e6;
  border-radius: 20px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-color);
  }

  p {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 24px;
    color: #747474;
  }

  form button.primary-btn.sign-in {
    margin-top: 50px;
  }

  form button.primary-btn {
    margin: 24px 0;
    max-width: 100%;
    border: 0;
    cursor: pointer;
  }
`;

const FieldBox = styled.div`
  padding-bottom: 20px;

  &:last-child {
    padding-bottom: 0;
  }

  label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #344054;
    margin-bottom: 6px;
  }

  select,
  input {
    width: 100%;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;
    padding: 10px 42px 10px 14px;
    font-size: 14px;
    color: #667085;
  }
`;

const InputField = styled.div`
  position: relative;

  span {
    display: block;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    max-width: 20px;

    &.privacy-icon {
      max-width: 15px;
    }

    &.pass-icon {
      right: auto;
      left: 14px;
      max-width: 24px;
    }
  }

  a.forgot-pass {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
    position: absolute;
    right: auto;
    left: 0;
    bottom: -55px;
    transition: color 0.3s;
    text-decoration: none;

    &:hover {
      color: var(--secondary-color);
    }
  }

  p {
    position: absolute;
    right: 0;
    bottom: -24px;
    font-size: 14px;
    font-weight: 300;
    color: #163a8f;
    margin-bottom: 0;
  }
`;

export default function MainSchoolLogin() {
  return (
    <SignWrap>
      <Container>
        <Account>
          <h1>تسجيل الدخول</h1>
          <LoginForm>
            <h2>اهلاً بعودتك</h2>
            <p>يرجى إدخال البيانات التالية لتتمكن من الوصول إلى حسابك </p>
            <form>
              <FieldBox>
                <label htmlFor="mail">البريد الالكتروني</label>
                <InputField>
                  <input
                    type="email"
                    id="mail"
                    placeholder="يرجى كتابة البريد الالكتروني هنا"
                  />
                  <span>
                    <Image src={Mail} alt="icon" width={20} />
                  </span>
                </InputField>
              </FieldBox>
              <FieldBox>
                <label htmlFor="password">كلمة المرور</label>
                <InputField>
                  <input
                    type="password"
                    id="password"
                    placeholder="اكتب كلمة المرور هنا"
                  />
                  <span className="privacy-icon">
                    <Image src={Privacy} alt="icon" width={15} />
                  </span>
                  <a className="forgot-pass" href="#">
                    نسيت كلمة المرور؟
                  </a>
                </InputField>
              </FieldBox>
              <button className="primary-btn sign-in" type="button">
                تسجيل
              </button>
            </form>
          </LoginForm>
        </Account>
      </Container>
    </SignWrap>
  );
}
