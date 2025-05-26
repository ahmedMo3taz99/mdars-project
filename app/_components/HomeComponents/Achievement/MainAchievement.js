import styled from "styled-components";

import AchievementImg from "@/app/_images/home/achievement/achievement-abs-img.png";
import Image from "next/image";

const Achievement = styled.div`
  padding: 85px 0;
  background: var(--secondary-color);
  position: relative;

  .achievement-abs-img {
    width: 100%;
    max-width: 400px;
    position: absolute;
    left: 0;
    top: -82%;
    z-index: -1;
  }

  .achievement-row {
    display: flex;
    align-items: center;

    .achievement-col {
      border-bottom: 1px solid var(--white-color);
      padding-bottom: 35px;
      width: 25%;
      margin: 0 42px;

      h2 {
        font-size: 65px;
        font-weight: 800;
        color: var(--white-color);
        margin-bottom: 6px;
        line-height: 1;
      }

      p {
        color: var(--white-color);
        font-weight: 500;
        max-width: 180px;
        margin-bottom: 0;
      }
    }
  }
`;

export default function MainAchievement() {
  return (
    <Achievement>
      <div className="achievement-abs-img">
        <Image src={AchievementImg} alt="abs-layer" width={500} height={300} />
      </div>
      <div className="container">
        <div className="achievement-row">
          <div
            className="achievement-col"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h2>+170</h2>
            <p>مدرس مناهج معتمد عالميا ودوليا </p>
          </div>
          <div
            className="achievement-col"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h2>1/12</h2>
            <p>تقسيط مريح ومضمون على مدار 12 شهر</p>
          </div>
          <div
            className="achievement-col"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2>1500+</h2>
            <p>طالب مشترك بالمنصة و سعيد </p>
          </div>
          <div
            className="achievement-col"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2>+500</h2>
            <p>كورس تعليمي عالي الجودة وقوي </p>
          </div>
        </div>
      </div>
    </Achievement>
  );
}
