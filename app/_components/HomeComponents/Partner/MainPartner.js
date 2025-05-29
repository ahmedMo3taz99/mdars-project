import styled from "styled-components";
import Image from "next/image";

import Line from "@/app/_images/home/bd-bottom-layer.png";

import College from "@/app/_images/home/brand/college-board-logo.png";
import Pearsons from "@/app/_images/home/brand/pearsons-logo.png";
import Aiaa from "@/app/_images/home/brand/aiaa-logo.png";
import Cognia from "@/app/_images/home/brand/cognia-logo.png";
import Turkey from "@/app/_images/home/brand/turkey-bakanligi-logo.png";

const PartnerStyle = styled.div`
  padding: 55px 0 130px;
  overflow: hidden;

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

  .brands {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    margin: 86px -20px 0;

    .brand-logo {
      width: 100%;
      margin: 0 20px;
    }
  }
`;

export default function MainPartner() {
  return (
    <PartnerStyle>
      <div className="container">
        <div className="partner-info">
          <h2 className="after-ly" data-aos="fade-up" data-aos-duration="2000">
            شركاء النجاح
          </h2>
          <div className="brands">
            <div
              className="brand-logo college-board"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Image src={College} alt="logo" width={252} />
            </div>
            <div
              className="brand-logo pearsons"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Image src={Pearsons} alt="logo" width={205} />
            </div>
            <div
              className="brand-logo aiaa"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Image src={Aiaa} alt="logo" width={170} />
            </div>
            <div
              className="brand-logo cognia"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image src={Cognia} alt="logo" width={216} />
            </div>
            <div className="brand-logo turkey">
              <Image
                src={Turkey}
                alt="logo"
                width={94}
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </PartnerStyle>
  );
}
