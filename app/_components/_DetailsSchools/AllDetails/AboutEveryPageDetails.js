"use client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// Import your images
import Line from "@/app/_images/home/bd-bottom-layer.png";
import ImageOfSchool from "@/app/_images/details/aboutEverySchool/about-school-img.png";
import LogoOFSupport from "@/app/_images/details/aboutEverySchool/about-school-info-logo.jpg";

const AboutSchoolWrap = styled.div`
  padding: 68px 0 110px;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const AboutSchoolTitle = styled.h2`
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const AboutSchoolBox = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const AboutSchoolInfo = styled.div`
  width: 46%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const AboutSchoolImg = styled.div`
  width: 46%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const TabsList = styled.ul`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TabItem = styled.li`
  flex: 1;

  @media (max-width: 768px) {
    flex: none;
  }
`;

const TabLink = styled.button`
  display: block;
  width: 100%;
  font-size: 18px;
  font-family: inherit;

  font-weight: 500;
  color: var(--dark-color);
  background: var(--white-color);
  text-align: center;
  padding: 12px 8px;
  cursor: pointer;
  border: 1px solid var(--offwhite-color);
  transition: all 0.3s ease;

  &.active,
  &:hover {
    background: var(--offwhite-color);
    color: var(--primary-color);
  }

  &:not(:last-child) {
    border-right: none;

    @media (max-width: 768px) {
      border-right: 1px solid var(--offwhite-color);
      border-bottom: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 8px;
  }
`;

// الحل الأول: استخدام isActive بدلاً من active
const AboutSchoolInnerInfo = styled.div`
  display: ${(props) => (props.$isActive ? "block" : "none")};

  p {
    color: var(--dark-color);
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 23px;
    font-weight: 700;
    color: var(--dark-color);
    margin-top: 24px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 12px;
    }
  }
`;

const SchoolLogo = styled.div`
  width: 100%;
  max-width: 265px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
  }
`;

const ImgTabs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid var(--offwhite-color);
  width: 100%;
  max-width: 266px;
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImgTabItem = styled.li`
  width: 50%;
`;

const ImgTabLink = styled.button`
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;

  color: var(--dark-color);
  background: var(--white-color);
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border: none;
  border-right: 1px solid var(--offwhite-color);
  transition: all 0.3s ease;

  &:last-child {
    border-right: none;
  }

  &.active,
  &:hover {
    background: var(--offwhite-color);
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 8px;
  }
`;

// الحل الثاني: استخدام $isActive بدلاً من active
const ImgTabBox = styled.div`
  display: ${(props) => (props.$isActive ? "block" : "none")};

  .box-img {
    margin-bottom: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  p {
    padding-top: 10px;
    margin-bottom: 0;
    font-weight: 600;
    color: var(--dark-color);
    text-align: center;

    a {
      color: var(--secondary-color);
      text-decoration: underline;
      transition: all 0.3s ease;

      &:hover {
        text-decoration: none;
        color: var(--primary-color);
      }
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: var(--offwhite-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  font-size: 18px;
  border: 2px dashed var(--primary-color);

  @media (max-width: 768px) {
    height: 200px;
    font-size: 16px;
  }
`;

export default function AboutEveryPageDetails() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImageTab, setActiveImageTab] = useState(0);

  const tabsData = [
    {
      title: "مقدمة",
      content: `إننا نؤمن أن الاستثمار في الإنسان هو أساس أي تنمية اقتصادية، ومحور أي نهضة مجتمعية، وركيزة أي تطور ونماء، والتعليم الجيد هو المفتاح الأساسي لأي تطور ونمو في جميع المجالات. فالإنسان المتعلم قادر على نشر المعرفة في محيطه، مما يجعل هذا المحيط أكثر إنتاجية، ويساعد في تحسين المنظومة الأخلاقية للمجتمعات، من خلال تهذيب السلوكيات، وتغيير الأنماط الاستهلاكية، والاتكالية للمجتمع.`,
    },
    {
      title: "الرؤية",
      content: `رؤيتنا هي بناء جيل متميز من الطلاب القادرين على مواكبة التطورات العصرية والمساهمة في بناء مجتمع متقدم. نسعى إلى أن نكون المؤسسة التعليمية الرائدة في تقديم تعليم عالي الجودة يجمع بين الأصالة والمعاصرة، ويعد الطلاب ليكونوا قادة المستقبل في مختلف المجالات.`,
    },
    {
      title: "الرسالة",
      content: `رسالتنا تتمثل في تقديم تعليم متميز يركز على تنمية شخصية الطالب من جميع الجوانب - الأكاديمية والاجتماعية والثقافية والرياضية. نحن ملتزمون بخلق بيئة تعليمية محفزة تشجع على الإبداع والابتكار، وتعزز القيم الأخلاقية والوطنية، وتساعد كل طالب على تحقيق أقصى إمكاناته.`,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleImageTabClick = (index) => {
    setActiveImageTab(index);
  };

  return (
    <AboutSchoolWrap>
      <Container>
        <AboutSchoolTitle>عن المدرسة</AboutSchoolTitle>

        <AboutSchoolBox>
          <AboutSchoolInfo>
            <TabsList>
              {tabsData.map((tab, index) => (
                <TabItem key={index}>
                  <TabLink
                    className={activeTab === index ? "active" : ""}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.title}
                  </TabLink>
                </TabItem>
              ))}
            </TabsList>

            {tabsData.map((tab, index) => (
              <AboutSchoolInnerInfo key={index} $isActive={activeTab === index}>
                <p>{tab.content}</p>
                <h3>الإعتمادية</h3>
                <SchoolLogo>
                  <Image
                    src={LogoOFSupport}
                    alt="شعار الدعم"
                    width={250}
                    height={100}
                  />
                </SchoolLogo>
              </AboutSchoolInnerInfo>
            ))}
          </AboutSchoolInfo>

          <AboutSchoolImg>
            <ImgTabs>
              <ImgTabItem>
                <ImgTabLink
                  className={activeImageTab === 0 ? "active" : ""}
                  onClick={() => handleImageTabClick(0)}
                >
                  البوم الصور
                </ImgTabLink>
              </ImgTabItem>
              <ImgTabItem>
                <ImgTabLink
                  className={activeImageTab === 1 ? "active" : ""}
                  onClick={() => handleImageTabClick(1)}
                >
                  الفيديو
                </ImgTabLink>
              </ImgTabItem>
            </ImgTabs>

            <ImgTabBox $isActive={activeImageTab === 0}>
              <div className="box-img">
                <Image
                  src={ImageOfSchool}
                  alt="صورة المدرسة"
                  width={600}
                  height={400}
                />
              </div>
              <p>
                حمل بروفايل المدرسة <a href="#">من هنا</a>
              </p>
            </ImgTabBox>

            <ImgTabBox $isActive={activeImageTab === 1}>
              <div className="box-img">
                <VideoPlaceholder>
                  محتوى الفيديو سيتم إضافته هنا
                </VideoPlaceholder>
              </div>
              <p>شاهد فيديو تعريفي عن المدرسة</p>
            </ImgTabBox>
          </AboutSchoolImg>
        </AboutSchoolBox>
      </Container>
    </AboutSchoolWrap>
  );
}
