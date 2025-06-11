"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import MainSchoolPhoto from "@/app/_images/compare/mainPhoto/uni1.png";
import MainStar from "@/app/_images/compare/mainPhoto/star-icon.png";
import AboutSchool from "@/app/_images/compare/mainPhoto/about-school-info-logo.jpg";
import BookIcon from "@/app/_images/compare/icons/book_svgrepo.com.svg";
import StaffIcon from "@/app/_images/compare/icons/schoolStaff.svg";
import FlagIcon from "@/app/_images/compare/icons/school-flag_svgrepo.com.svg";
import LocationIcon from "@/app/_images/compare/icons/location-pin_svgrepo.com.svg";
import TopArrow from "@/app/_images/compare/icons/topArrow.png";
import RiyalCoin from "@/app/_images/compare/icons/riyalSympol.png";

// Styled Components
const ComparingWrap = styled.div`
  padding: 20px 0 60px;
  background: white;
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainTitle = styled.h1`
  font-size: 54px;
  text-align: center;
  margin-bottom: 40px;
  color: #030915;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

// Navigation Container - جديد
const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  .custom-pagination {
    display: flex;
    gap: 8px;

    .pagination-bullet {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #c4c6ca;
      cursor: pointer;
      transition: background 0.3s ease;

      &.active {
        background: #2a32d3;
      }
    }
  }

  .custom-nav-button {
    background: none;
    border: none;
    color: #2a32d3;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(42, 50, 211, 0.1);
    }

    &:disabled {
      color: #c4c6ca;
      cursor: not-allowed;
    }
  }
`;

const GridParent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  position: relative;

  > div:nth-of-type(even) {
    margin-right: 5px;
  }
`;

const UniversityCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  h3 {
    text-align: center;
    font-size: 32px;
    color: #030915;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: -10px 0 0 0;
    font-size: 20px;
    color: #030915;

    span:first-of-type {
      display: none;
    }

    @media (min-width: 768px) {
      flex-direction: row;

      span:first-of-type {
        display: block;
      }
    }
  }
`;

const SectionTitle = styled.p`
  background-color: #eff0f8;
  margin: 20px 0;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  text-align: center;
  padding: 15px 5px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #030915;
`;

const GeneralInformation = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    margin: 20px auto;
    width: fit-content;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      gap: 10px;
      align-items: center;
      min-width: 180px;

      span {
        font-size: 18px;
        color: #030915;
      }
    }
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 100%;
  background-color: #c4c6ca;
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 3px;
  }

  &.divider-bottom-button {
    background-color: #c4c6ca;
    opacity: 0.46;
    max-height: 37px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Dependency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeesSection = styled.div`
  text-align: center;

  .start {
    font-size: 12px;
    color: #030915;
    opacity: 0.6;
    margin: 0;
  }

  .fees-price {
    font-size: 24px;
    color: #2a32d3;
    font-weight: 600;
    margin: 5px 0 10px 0;
  }
`;

// Fixed: Use shouldForwardProp to prevent isOpen from being passed to DOM
const FeesArrow = styled(Image).withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  margin: auto;
  display: block;
  cursor: pointer;
  margin-bottom: 10px;
  transform: ${(props) => (props.isOpen ? "rotate(360deg)" : "rotate(180deg)")};
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;

const FeesContainer = styled.div`
  grid-column: span 2 / span 2;
  max-height: 462px;
  overflow-y: auto;
  overflow-x: hidden;

  --sb-track-color: #edf2f7;
  --sb-thumb-color: #a1aaba;
  --sb-size: 4px;

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 3px;
  }

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
`;

const FeesBox = styled.div`
  &.open .detail-right-box {
    @media (max-width: 768px) {
      height: auto;
      overflow: visible;
    }
  }
`;

// Fixed: Use shouldForwardProp to prevent isOpen from being passed to DOM
const DetailRightBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  height: ${(props) => (props.isOpen ? "auto" : "0px")};
  overflow: ${(props) => (props.isOpen ? "visible" : "hidden")};

  @media (min-width: 768px) {
    height: auto;
    overflow: visible;
  }
`;

// Fixed: Use shouldForwardProp to prevent isAlt from being passed to DOM
const DetailRightInnerBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isAlt",
})`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 18px;
  background: ${(props) => (props.isAlt ? "#f8f9fa" : "white")};
  border: 1px solid #f8f9fa;

  @media (min-width: 768px) {
    padding: 13px 20px;
  }

  p {
    font-weight: 600;
    color: #030915;
    margin: 0;
  }
`;

const PriceBox = styled.div`
  p {
    padding: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;

    @media (min-width: 768px) {
      padding-left: 20px;
    }
  }

  span {
    display: none;
    width: fit-content;
    font-size: 12px;

    @media (min-width: 768px) {
      display: block;
    }
  }

  div {
    @media (min-width: 768px) {
      width: 60px;
      display: flex;
      justify-content: end;
    }
  }
`;

const Facilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  p {
    font-size: 16px;
    color: #030915;
    font-weight: 600;
    background-color: #f4f7ff;
    padding: 8px 20px;
    border-radius: 30px;
    margin: 0;
  }
`;

const BottomButtonContainer = styled.div`
  position: sticky;
  bottom: 16px;
  left: 0;
  width: 100%;
  border-radius: 7px;
  background: linear-gradient(
    0deg,
    rgba(236, 242, 255, 0.58) 5.07%,
    rgba(236, 242, 255, 0.68) 67.6%
  );
  padding: 20px;
  z-index: 999999;
`;

const BottomButton = styled.div`
  background-color: #030915;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  position: relative;

  p {
    background-color: transparent;
    font-size: 16px;
    color: white;
    border: none;
    text-align: center;
    margin: 0;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-pagination,
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
`;

// Mock data
const schoolsData = [
  {
    id: 1,
    name: "مدارس الإحسان الدولية",
    rating: 4.3,
    curriculum: "المنهج الامريكي",
    stages: "جميع المراحل",
    type: "مدرسة دولية",
    location: "نيشانتشي - اسطنبول",
    startingFee: "3500$",
    grades: [
      { name: "المرحلة KG", price: 3900, available: true },
      { name: "الصف الأول", price: 3900, available: false },
      { name: "الصف الثاني", price: 3900, available: false },
      { name: "الصف الثالث", price: 3900, available: true },
      { name: "الصف الرابع", price: 3900, available: true },
      { name: "الصف الخامس", price: 3900, available: true },
    ],
    facilities: [
      "مكتبة",
      "ملاعب مغلقة",
      "مختبر علوم",
      "مسرح",
      "كافتيريا",
      "مسجد",
    ],
    activities: [
      "كرة القدم",
      "السباحة",
      "الموسيقى",
      "الرسم",
      "الشطرنج",
      "المناظرات",
    ],
  },
  {
    id: 2,
    name: "مدارس الإحسان الدولية",
    rating: 4.3,
    curriculum: "المنهج الامريكي",
    stages: "جميع المراحل",
    type: "مدرسة دولية",
    location: "نيشانتشي - اسطنبول",
    startingFee: "3500$",
    grades: [
      { name: "المرحلة KG", price: 3900, available: true },
      { name: "الصف الأول", price: 3900, available: false },
      { name: "الصف الثاني", price: 3900, available: false },
      { name: "الصف الثالث", price: 3900, available: true },
      { name: "الصف الرابع", price: 3900, available: true },
      { name: "الصف الخامس", price: 3900, available: true },
    ],
    facilities: [
      "مكتبة",
      "ملاعب مغلقة",
      "مختبر علوم",
      "مسرح",
      "كافتيريا",
      "مسجد",
    ],
    activities: [
      "كرة القدم",
      "السباحة",
      "الموسيقى",
      "الرسم",
      "الشطرنج",
      "المناظرات",
    ],
  },
];

const SchoolComparison = () => {
  const [feesOpen, setFeesOpen] = useState({ 0: false, 1: false });
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleFees = (index) => {
    setFeesOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const goToPrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const renderSchoolCard = (school, index) => (
    <UniversityCard>
      <Image
        src={MainSchoolPhoto}
        alt="school photo"
        style={{ borderRadius: "8px", objectFit: "contain" }}
      />
      <h3>{school.name}</h3>
      <h4>
        <span>التقييم</span> {school.rating}/ 5
        <span>
          <Image src={MainStar} alt="stars" width={120} height={19} />
        </span>
      </h4>
    </UniversityCard>
  );

  const renderGeneralInfo = (school) => (
    <GeneralInformation>
      <ul>
        <li>
          <Image src={BookIcon} alt="book" width={24} height={24} />
          <span>{school.curriculum}</span>
        </li>
        <li>
          <Image src={StaffIcon} alt="staff" width={24} height={24} />
          <span>{school.stages}</span>
        </li>
        <li>
          <Image src={FlagIcon} alt="flag" width={24} height={24} />
          <span>{school.type}</span>
        </li>
        <li>
          <Image src={LocationIcon} alt="location" width={24} height={24} />
          <span>{school.location}</span>
        </li>
      </ul>
    </GeneralInformation>
  );

  const renderFees = (school, index) => (
    <FeesSection>
      <p className="start">تبدأ من</p>
      <p className="fees-price">{school.startingFee}</p>
      <FeesArrow
        src={TopArrow}
        alt="arrow"
        width={24}
        height={24}
        isOpen={feesOpen[index]}
        onClick={() => toggleFees(index)}
      />
    </FeesSection>
  );

  const renderFeesDetails = (school, index) => (
    <FeesBox className={feesOpen[index] ? "open" : ""}>
      <DetailRightBox isOpen={feesOpen[index]}>
        {school.grades.map((grade, gradeIndex) => (
          <DetailRightInnerBox key={gradeIndex} isAlt={!grade.available}>
            <PriceBox>
              <p>
                {grade.price}
                <Image src={RiyalCoin} alt="riyal" width={14} height={14} />
              </p>
              <div>
                <span>{grade.available ? "متاح" : "غير متاح"}</span>
              </div>
            </PriceBox>
            <p>{grade.name}</p>
          </DetailRightInnerBox>
        ))}
      </DetailRightBox>
    </FeesBox>
  );

  const renderFacilities = (items) => (
    <Facilities>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Facilities>
  );

  const renderAccreditation = () => (
    <Dependency>
      <Image
        src={AboutSchool}
        alt="accreditation"
        width={120}
        height={108}
        style={{ maxHeight: "108px", objectFit: "contain" }}
      />
    </Dependency>
  );

  const renderSlideContent = () => (
    <>
      {/* School Cards */}
      <GridParent>
        {renderSchoolCard(schoolsData[0], 0)}
        {renderSchoolCard(schoolsData[1], 1)}
      </GridParent>

      {/* General Information */}
      <SectionTitle>معلومات عامة</SectionTitle>
      <GridParent>
        <Divider />
        {renderGeneralInfo(schoolsData[0])}
        {renderGeneralInfo(schoolsData[1])}
      </GridParent>

      {/* Accreditation */}
      <SectionTitle>الاعتمادية</SectionTitle>
      <GridParent>
        <Divider />
        {renderAccreditation()}
        {renderAccreditation()}
      </GridParent>

      {/* Fees */}
      <SectionTitle>الرسوم الدراسية</SectionTitle>
      <GridParent>
        <Divider />
        {renderFees(schoolsData[0], 0)}
        {renderFees(schoolsData[1], 1)}
        <FeesContainer>
          <GridParent>
            {renderFeesDetails(schoolsData[0], 0)}
            {renderFeesDetails(schoolsData[1], 1)}
          </GridParent>
        </FeesContainer>
      </GridParent>

      {/* School Facilities */}
      <SectionTitle>المرافق المدرسية</SectionTitle>
      <GridParent>
        <Divider />
        {renderFacilities(schoolsData[0].facilities)}
        {renderFacilities(schoolsData[1].facilities)}
      </GridParent>

      {/* School Activities */}
      <SectionTitle>الأنشطة المدرسية</SectionTitle>
      <GridParent>
        <Divider />
        {renderFacilities(schoolsData[0].activities)}
        {renderFacilities(schoolsData[1].activities)}
      </GridParent>
    </>
  );

  return (
    <ComparingWrap>
      <Container>
        <MainTitle>تفاصيل المقارنة</MainTitle>

        {/* Custom Navigation */}
        <NavigationContainer>
          <button
            className="custom-nav-button"
            onClick={goToPrevSlide}
            disabled={activeSlide === 0}
          >
            ❮
          </button>

          <div className="custom-pagination">
            <div
              className={`pagination-bullet ${
                activeSlide === 0 ? "active" : ""
              }`}
              onClick={() => goToSlide(0)}
            />
            <div
              className={`pagination-bullet ${
                activeSlide === 1 ? "active" : ""
              }`}
              onClick={() => goToSlide(1)}
            />
          </div>

          <button
            className="custom-nav-button"
            onClick={goToNextSlide}
            disabled={activeSlide === 1}
          >
            ❯
          </button>
        </NavigationContainer>

        <StyledSwiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>{renderSlideContent()}</SwiperSlide>

          <SwiperSlide>{renderSlideContent()}</SwiperSlide>
        </StyledSwiper>

        {/* Bottom Action Buttons */}
        <BottomButtonContainer>
          <BottomButton>
            <Divider className="divider-bottom-button" />
            <p>اختر المدرسة</p>
            <p>اختر المدرسة</p>
          </BottomButton>
        </BottomButtonContainer>
      </Container>
    </ComparingWrap>
  );
};

export default SchoolComparison;
