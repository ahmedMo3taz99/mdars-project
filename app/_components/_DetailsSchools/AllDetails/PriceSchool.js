"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Price from "@/app/_images/details/priceing/price-img.png";
import School from "@/app/_images/details/priceing/school-facility.png";

import Line from "@/app/_images/home/bd-bottom-layer.png";


const DetailWrap = styled.div`
  padding: 68px 0 120px;
  background: var(--offwhite-color);
`;


const Detail = styled.div`
  width: 100%;
`;

const Title = styled.h2`
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
`;

const DetailTabs = styled.ul`
  display: flex;
  align-items: center;
  margin: 44px -9px 0;
  list-style: none;
  padding: 0;
`;

const TabItem = styled.li`
  padding: 0 9px;
  width: 100%;
  max-width: 220px;
`;

const TabLink = styled.button`
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  background: ${(props) => (props.$active ? "var(--white-color)" : "#f4f7ff")};
  color: var(--dark-color);
  border-radius: 18px;
  padding: 10px;
  border: 1px solid
    ${(props) => (props.$active ? "var(--secondary-color)" : "transparent")};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--white-color);
    border-color: var(--secondary-color);
  }
`;

const DetailInformation = styled.div`
  display: ${(props) => (props.$active ? "block" : "none")};
`;

const DetailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white-color);
  padding: ${(props) =>
    props.$facility ? "50px 30px 69px 67px" : "50px 30px 0 67px"};
  border-radius: 24px;
  margin-top: 9px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const DetailLeftBox = styled.div`
  width: 30%;
  margin-right: 60px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top: 30px;
  }
`;

const DetailImg = styled.div`
  width: 100%;
  max-width: 237px;
  margin: 0 auto 38px;
`;

const DetailBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -6px;

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 0;
  }
`;

const SecondaryBtn = styled.a`
  margin: 0 6px;
  padding: 12px 24px;
  background: var(--secondary-color);
  color: var(--white-color);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 2rem;

  &:hover {
    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    margin: 6px 0;
    width: 160px;
    text-align: center;
  }
`;

const DarkBtn = styled.a`
  margin: 0 6px;
  padding: 12px 24px;
  background: var(--dark-color);
  color: var(--white-color);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  max-width: 160px;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 2rem;

  &:hover {
    background: #333;
  }

  @media (max-width: 480px) {
    margin: 6px 0;
    width: 160px;
  }
`;

const DetailRightBox = styled.div`
  width: 70%;
  margin-left: 0;
  height: ${(props) => (props.$autoHeight ? "auto" : "inherit")};
  overflow: ${(props) => (props.$autoHeight ? "inherit" : "hidden")};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailRightInnerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 13px 20px;
  border-radius: 10px;
  margin-bottom: 18px;
  background: ${(props) => (props.$alt ? "#fafbff" : "var(--white-color)")};
  border: 1px solid var(--offwhite-color);
`;

const DetailRightInnerText = styled.p`
  font-weight: 600;
  color: var(--dark-color);
  margin-bottom: 0;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5px;
`;

const PriceText = styled.p`
  font-weight: 600;
  color: var(--dark-color);
  margin-bottom: 0;
`;

const StatusSpan = styled.span`
  margin: 0;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  background: ${(props) => (props.$available ? "#e8f5e8" : "#fff3cd")};
  color: ${(props) => (props.$available ? "#155724" : "#856404")};
  border: 1px solid
    ${(props) =>
      props.$available ? "#c3e6cb" : props.$alt ? "#f1ab23" : "#ffeaa7"};
`;

const FacilityInfo = styled.div`
  padding-bottom: 20px;
`;

const FacilityTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: var(--dark-color);
  margin-bottom: 18px;
`;

const FacilityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -6px;
`;

const FacilityItem = styled.p`
  margin: 0 6px 18px;
  font-size: 16px;
  font-weight: 600;
  color: var(--dark-color);
  padding: 10px 18px;
  border-radius: 30px;
  background: #f4f7ff;
`;

export default function PriceSchool() {
  const [activeTab, setActiveTab] = useState("price");

  // بيانات الأسعار
  const priceData = [
    { grade: "المرحلة KG", price: "3900 ر.س", available: true },
    { grade: "الصف الأول", price: "3900 ر.س", available: false },
    { grade: "الصف الثاني", price: "3900 ر.س", available: false },
    { grade: "الصف الثالث", price: "3900 ر.س", available: true },
    { grade: "الصف الرابع", price: "3900 ر.س", available: true },
    { grade: "الصف الخامس", price: "3900 ر.س", available: true },
    { grade: "الصف السادس", price: "3900 ر.س", available: true },
  ];

  // بيانات المرافق المادية والرياضية
  const physicalFacilities = [
    "مسرح",
    "مكتبة",
    "مطعم",
    "ملاعب مغلقة",
    "صفوف واسعة",
    "مسجد",
    "قاعة اجتماعات",
    "عيادة طبية",
    "ملاعب خارجية",
  ];

  // بيانات الأنشطة الإضافية
  const additionalActivities = [
    "النشاط المسرحي",
    "القراءة والمطالعة",
    "الأنشطة الرياضية",
    "الأنشطة الثقافية",
    "الأنشطة العلمية",
    "الأنشطة الاجتماعية",
    "الأنشطة الفنية",
    "التصوير الفوتوغرافي",
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <DetailWrap>
      <div className="container">
        <Detail>
          <Title className="after-ly">عن المدرسة</Title>
          <DetailTabs>
            <TabItem>
              <TabLink
                $active={activeTab === "price"}
                onClick={() => handleTabClick("price")}
              >
                الأسعار
              </TabLink>
            </TabItem>
            <TabItem>
              <TabLink
                $active={activeTab === "facility"}
                onClick={() => handleTabClick("facility")}
              >
                المرافق المدرسية
              </TabLink>
            </TabItem>
          </DetailTabs>

          {/* تبويب الأسعار */}
          <DetailInformation $active={activeTab === "price"}>
            <DetailBox>
              <DetailRightBox>
                {priceData.map((item, index) => (
                  <DetailRightInnerBox key={index} $alt={!item.available}>
                    <PriceBox>
                      <PriceText>{item.price}</PriceText>
                      <StatusSpan
                        $available={item.available}
                        $alt={!item.available}
                      >
                        {item.available ? "متاح" : "غير متاح"}
                      </StatusSpan>
                    </PriceBox>
                    <DetailRightInnerText>{item.grade}</DetailRightInnerText>
                  </DetailRightInnerBox>
                ))}
              </DetailRightBox>
              <DetailLeftBox>
                <DetailImg>
                  <Image src={Price} alt="أسعار المدرسة" width={237}/>
                </DetailImg>
                <DetailBtns>
                  <SecondaryBtn href="#">احجز الان</SecondaryBtn>
                  <DarkBtn href="#">قسط الرسوم</DarkBtn>
                </DetailBtns>
              </DetailLeftBox>
            </DetailBox>
          </DetailInformation>

          {/* تبويب المرافق */}
          <DetailInformation $active={activeTab === "facility"}>
            <DetailBox $facility={true}>
              <DetailRightBox $autoHeight={true}>
                <FacilityInfo>
                  <FacilityTitle>المرافق المادية والرياضية</FacilityTitle>
                  <FacilityBox>
                    {physicalFacilities.map((facility, index) => (
                      <FacilityItem key={index}>{facility}</FacilityItem>
                    ))}
                  </FacilityBox>
                </FacilityInfo>
                <FacilityInfo>
                  <FacilityTitle>أنشطة اضافية</FacilityTitle>
                  <FacilityBox>
                    {additionalActivities.map((activity, index) => (
                      <FacilityItem key={index}>{activity}</FacilityItem>
                    ))}
                  </FacilityBox>
                </FacilityInfo>
              </DetailRightBox>
              <DetailLeftBox>
                <DetailImg>
                  <Image src={School} alt="مرافق المدرسة" width={237}/>
                </DetailImg>
                <DetailBtns>
                  <SecondaryBtn href="#">احجز الان</SecondaryBtn>
                  <DarkBtn href="#">قسط الرسوم</DarkBtn>
                </DetailBtns>
              </DetailLeftBox>
            </DetailBox>
          </DetailInformation>
        </Detail>
      </div>
    </DetailWrap>
  );
}
