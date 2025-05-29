"use client";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowFaq from "@/app/_images/about/faq/bi_arrow-up.png";

const MainQuestions = styled.div`
  width: 59%;

  .faq-box {
    margin-bottom: 13px;

    &:last-child {
      margin-bottom: 0;
    }

    .faq-title {
      width: 100%;
      padding: 12px 35px;
      background: var(--white-color);
      border-radius: 10px;
      box-shadow: 0px 4px 4px 0px #2f64d326;
      cursor: pointer;
      position: relative;

      h3 {
        font-size: 16px;
        font-weight: 500;
        color: var(--dark-color);
        margin-bottom: 0;
      }

      &::after {
        content: "";
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translate(0, -50%) rotate(45deg);
        width: 12px;
        height: 12px;
        border-width: 2px;
        border-color: transparent #7a7a7a #7a7a7a transparent;
        border-style: solid;
      }

      &.active::after {
        border: 0;
        width: 20px;
        height: 20px;
        background: url(${ArrowFaq.src}) no-repeat center left/ contain;
        transform: translate(0, -50%) rotate(0);
      }

      &.active h3 {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .faq-info {
      overflow: hidden;
      padding: 0 35px;

      p {
        margin: 2rem 0;
        font-size: 16px;
        color: #7a7a7a;
        padding-bottom: 35px;
      }
    }
  }
`;

const faqData = [
  "هل لديك المزيد من الأسئلة؟",
  "هل المنح الدراسية متاحة للطلاب؟",
  "ما هي نسبة الطلاب إلى أعضاء هيئة التدريس؟",
  "هل هناك فرص للأنشطة اللامنهجية؟",
  "هل المنح الدراسية متاحة للطلاب؟",
  "ما هي نسبة الطلاب إلى أعضاء هيئة التدريس؟",
  "هل هناك فرص للأنشطة اللامنهجية؟",
  "هل هناك فرص للأنشطة اللامنهجية؟",
];

const answer =
  "إننا نؤمن أن الاستثمار في الإنسان هو أساس أي تنمية اقتصادية، ومحور أي نهضة مجتمعية، وركيزة أي تطور ونماء، والتعليم الجيد هو المفتاح الأساسي لأي تطور ونمو في جميع المجال";

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleQuestion = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <MainQuestions>
      {faqData.map((question, index) => (
        <div
          className="faq-box"
          key={index}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            className={`faq-title ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <h3>{question}</h3>
          </div>

          <AnimatePresence initial={false}>
            {activeIndex === index && <FAQContent answer={answer} />}
          </AnimatePresence>
        </div>
      ))}
    </MainQuestions>
  );
}

function FAQContent({ answer }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  return (
    <motion.div
      className="faq-info"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div ref={ref}>
        <p>{answer}</p>
      </div>
    </motion.div>
  );
}
