"use client";
import styled from "styled-components";
import Image from "next/image";

import Mail from "@/app/_images/login/parentLogin/icons/input-mail-dark-icon.png";
import Privacy from "@/app/_images/login/parentLogin/icons/input-privacy-dark-icon.png";
import Facebook from "@/app/_images/login/parentLogin/icons/register-facebook-icon.png";
import Google from "@/app/_images/login/parentLogin/icons/register-google-logo.png";
import Link from "next/link";
import { useTranslation } from "../../LanguageProvider";
import { useRef } from "react";
import axios from "axios";

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

const LoginText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--dark-color);
  text-align: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #c4c4c4;

  a {
    color: #163a8f;
    margin-right: 12px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const RegisterBtns = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px;
    border: 1px solid #000000;
    color: #000000;
    border-radius: 12px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.3s;
    text-decoration: none;

    &:hover {
      background: var(--lightgrey-color);
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:first-child span {
      max-width: 24px;
    }

    span {
      display: block;
      width: 100%;
      max-width: 20px;
      margin-right: 8px;
    }
  }
`;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log(API_BASE_URL);

export default function MainParentLogin() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const handelLogin = (e) => {
    e.preventDefault();
    let data = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    // URL => Domain + EndPoint
    // let domain = "https://mdares.ai/api";
    let endpoint = "/login";

    let url = API_BASE_URL + endpoint;

    axios.post(url, data).then((res) => {
      console.log(res);
    });
  };

  const { locale } = useTranslation();
  return (
    <SignWrap>
      <Container>
        <Account>
          <h1>تسجيل الدخول</h1>
          <LoginForm>
            <h2>اهلاً بعودتك</h2>
            <p>يرجى إدخال البيانات التالية لتتمكن من الوصول إلى حسابك </p>
            <form onSubmit={handelLogin}>
              <FieldBox>
                <label htmlFor="email">البريد الالكتروني</label>
                <InputField>
                  <input
                    ref={emailInput}
                    type="email"
                    id="email"
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
                    ref={passwordInput}
                  />
                  <span className="privacy-icon">
                    <Image src={Privacy} alt="icon" width={15} />
                  </span>
                </InputField>
              </FieldBox>
              <button className="primary-btn sign-in" type="submit">
                تسجيل
              </button>
            </form>
            <LoginText>
              لا تملك حساباً؟
              <Link href={`/${locale}/login/parent_login/register`}>
                سجل الأن
              </Link>
            </LoginText>
            <RegisterBtns>
              <a href="#">
                التسجيل باستخدام Facebook
                <span>
                  <Image src={Facebook} alt="facebook" width={20} />
                </span>
              </a>
              <a href="#">
                التسجيل باستخدام Google
                <span>
                  <Image src={Google} alt="google" width={20} />
                </span>
              </a>
            </RegisterBtns>
          </LoginForm>
        </Account>
      </Container>
    </SignWrap>
  );
}

// "use client";
// import styled from "styled-components";
// import Image from "next/image";
// import { useState } from "react";
// import { redirect } from "next/navigation";

// import Mail from "@/app/_images/login/parentLogin/icons/input-mail-dark-icon.png";
// import Privacy from "@/app/_images/login/parentLogin/icons/input-privacy-dark-icon.png";
// import Facebook from "@/app/_images/login/parentLogin/icons/register-facebook-icon.png";
// import Google from "@/app/_images/login/parentLogin/icons/register-google-logo.png";
// import Link from "next/link";
// import { useTranslation } from "../../LanguageProvider";
// import { loginUser } from "@/lib/api";

// const SignWrap = styled.div`
//   height: auto;
//   padding: 55px 0;
//   background-color: var(--offwhite-color);
// `;

// const Container = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 15px;
// `;

// const Account = styled.div`
//   h1 {
//     text-align: center;
//   }
// `;

// const LoginForm = styled.div`
//   width: 100%;
//   max-width: 486px;
//   margin: 45px auto 0;
//   padding: 64px;
//   background: var(--white-color);
//   border: 1px solid #e6e6e6;
//   border-radius: 20px;

//   h2 {
//     font-size: 24px;
//     font-weight: 700;
//     color: var(--primary-color);
//   }

//   p {
//     font-size: 16px;
//     font-weight: 300;
//     margin-bottom: 24px;
//     color: #747474;
//   }

//   form button.primary-btn {
//     margin: 24px 0;
//     max-width: 100%;
//     border: 0;
//     cursor: pointer;
//   }
// `;

// const FieldBox = styled.div`
//   padding-bottom: 20px;

//   &:last-child {
//     padding-bottom: 0;
//   }

//   label {
//     display: block;
//     font-size: 16px;
//     font-weight: 500;
//     color: #344054;
//     margin-bottom: 6px;
//   }

//   select,
//   input {
//     width: 100%;
//     border: 1px solid #d0d5dd;
//     border-radius: 8px;
//     background: transparent;
//     padding: 10px 42px 10px 14px;
//     font-size: 14px;
//     color: #667085;
//   }
// `;

// const InputField = styled.div`
//   position: relative;

//   span {
//     display: block;
//     position: absolute;
//     right: 14px;
//     top: 50%;
//     transform: translate(0, -50%);
//     width: 100%;
//     max-width: 20px;

//     &.privacy-icon {
//       max-width: 15px;
//     }

//     &.pass-icon {
//       right: auto;
//       left: 14px;
//       max-width: 24px;
//     }
//   }

//   p {
//     position: absolute;
//     right: 0;
//     bottom: -24px;
//     font-size: 14px;
//     font-weight: 300;
//     color: #163a8f;
//     margin-bottom: 0;
//   }
// `;

// const LoginText = styled.p`
//   font-size: 16px;
//   font-weight: 500;
//   color: var(--dark-color);
//   text-align: center;
//   padding-bottom: 24px;
//   border-bottom: 1px solid #c4c4c4;

//   a {
//     color: #163a8f;
//     margin-right: 12px;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const RegisterBtns = styled.div`
//   a {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     padding: 8px;
//     border: 1px solid #000000;
//     color: #000000;
//     border-radius: 12px;
//     margin-bottom: 10px;
//     font-size: 14px;
//     font-weight: 600;
//     transition: background 0.3s;
//     text-decoration: none;

//     &:hover {
//       background: var(--lightgrey-color);
//     }

//     &:last-child {
//       margin-bottom: 0;
//     }

//     &:first-child span {
//       max-width: 24px;
//     }

//     span {
//       display: block;
//       width: 100%;
//       max-width: 20px;
//       margin-right: 8px;
//     }
//   }
// `;

// // رسالة الحالة المصممة
// const MessageBox = styled.div`
//   padding: 10px;
//   margin-bottom: 1rem;
//   border-radius: 5px;
//   background-color: #e7f3ff;
//   border: 1px solid #b3d9ff;
//   color: #004085;
//   text-align: center;
//   font-size: 14px;
// `;

// export default function MainParentLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const { locale } = useTranslation();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setMessage("يرجى ملء جميع الحقول");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     const result = await loginUser(email, password);

//     if (result.success) {
//       setMessage(result.message);
//       // التوجه بعد ثانية واحدة
//       setTimeout(() => {
//         redirect("/dashboard");
//       }, 1000);
//     } else {
//       setMessage(result.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <SignWrap>
//       <Container>
//         <Account>
//           <h1>تسجيل الدخول</h1>
//           <LoginForm>
//             <h2>اهلاً بعودتك</h2>
//             <p>يرجى إدخال البيانات التالية لتتمكن من الوصول إلى حسابك</p>

//             {message && <MessageBox>{message}</MessageBox>}

//             <form onSubmit={handleLogin}>
//               <FieldBox>
//                 <label htmlFor="email">البريد الالكتروني</label>
//                 <InputField>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="يرجى كتابة البريد الالكتروني هنا"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     disabled={loading}
//                   />
//                   <span>
//                     <Image src={Mail} alt="icon" width={20} />
//                   </span>
//                 </InputField>
//               </FieldBox>
//               <FieldBox>
//                 <label htmlFor="password">كلمة المرور</label>
//                 <InputField>
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="اكتب كلمة المرور هنا"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     disabled={loading}
//                   />
//                   <span className="privacy-icon">
//                     <Image src={Privacy} alt="icon" width={15} />
//                   </span>
//                 </InputField>
//               </FieldBox>
//               <button
//                 className="primary-btn sign-in"
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? "جاري تسجيل الدخول..." : "تسجيل"}
//               </button>
//             </form>
//             <LoginText>
//               لا تملك حساباً؟
//               <Link href={`/${locale}/login/parent_login/register`}>
//                 سجل الأن
//               </Link>
//             </LoginText>
//             <RegisterBtns>
//               <a href="#">
//                 التسجيل باستخدام Facebook
//                 <span>
//                   <Image src={Facebook} alt="facebook" width={20} />
//                 </span>
//               </a>
//               <a href="#">
//                 التسجيل باستخدام Google
//                 <span>
//                   <Image src={Google} alt="google" width={20} />
//                 </span>
//               </a>
//             </RegisterBtns>
//           </LoginForm>
//         </Account>
//       </Container>
//     </SignWrap>
//   );
// }
