"use client"

import styled from "styled-components";

import Madares from "@/app/_images/home/map/icons/madares-icon.png";
import Student from "@/app/_images/home/map/icons/student-icon.png";
import Image from "next/image";

const NumberPublicStled = styled.div`
  display: none;
  align-items: center;
  margin: 0 -6px;

  &.active {
    display: flex;
  }

  p {
    font-size: 25px;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 0;
    padding-left: 20px;
  }

  .public-box {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid var(--lightgrey-color);
    background: var(--white-color);
    margin: 0 6px;

    .public-icon {
      width: 100%;
      max-width: 27px;
      margin-left: 12px;
    }

    .public-info {
      h3 {
        font-size: 16px;
        font-weight: 700;
        color: var(--dark-color);
        margin-bottom: 0;
      }
      p {
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-color);
        margin-bottom: 0;
        padding-left: 0;
      }
    }
  }
`;

export default function NumberPublic() {
  return (
    <>
      <NumberPublicStled className="number-of-public active" id="inqirah">
        <p data-aos="fade-up" data-aos-duration="1000">
          أنقـرة
        </p>
        <div
          className="public-box"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="public-icon">
            <Image src={Madares} alt="icon-school" height={25} width={50} priority/>
          </div>
          <div className="public-info">
            <h3>عدد المدارس</h3>
            <p>29 مدرسة</p>
          </div>
        </div>
        <div
          className="public-box"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="public-icon">
            <Image src={Student} alt="icon-student" height={25} width={50} priority />
          </div>
          <div className="public-info">
            <h3>عدد الطلاب الأجانب</h3>
            <p>40,322 طالب</p>
          </div>
        </div>
      </NumberPublicStled>

      <NumberPublicStled className="number-of-public " id="sifas">
        <p data-aos="fade-up" data-aos-duration="1000">
          سيفاس
        </p>
        <div
          className="public-box"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="public-icon">
            <Image src={Madares} alt="icon-school" height={25} width={50} priority/>
          </div>
          <div className="public-info">
            <h3>عدد المدارس</h3>
            <p>14 مدرسة</p>
          </div>
        </div>
        <div
          className="public-box"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="public-icon">
            <Image src={Student} alt="icon-student" height={25} width={50} priority/>
          </div>
          <div className="public-info">
            <h3>عدد الطلاب الأجانب</h3>
            <p>20,322 طالب</p>
          </div>
        </div>
      </NumberPublicStled>
    </>
  );
}
