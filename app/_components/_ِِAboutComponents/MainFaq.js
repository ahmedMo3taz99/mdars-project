"use client";
import styled from "styled-components";
import FaqForm from "./Faq_Questions/FaqForm";
import Questions from "./Faq_Questions/Questions";

import Line from "@/app/_images/home/bd-bottom-layer.png";

const MainFaqStyled = styled.div`
  padding: 65px 0 100px;
  background: var(--offwhite-color);

  h2 {
    margin-bottom: 4.4rem;

    position: relative;
    padding-bottom: 16px;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 18.8rem;
      height: 1.4rem;
      background: url(${Line.src}) no-repeat center/ contain;
    }
  }

  .faq-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 48px;
  }
`;

export default function MainFaq() {
  return (
    <MainFaqStyled>
      <div className="container">
        <div className="faq">
          <h2 className="after-ly" data-aos="fade-up" data-aos-duration="2000">
            الأسئلة الاكثر شيوعاً
          </h2>
          <div className="faq-row">
            <Questions />

            <FaqForm />
          </div>
        </div>
      </div>
    </MainFaqStyled>
  );
}
