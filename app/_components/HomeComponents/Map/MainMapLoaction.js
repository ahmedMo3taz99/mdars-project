import styled from "styled-components";
import Image from "next/image";

import MainMap from "@/app/_images/home/map/map-lg-img.png";
import InqirahWhiteDefult from "@/app/_images/home/map/parts/inqirah-location-default-img.png";
import InqirahWhiteHover from "@/app/_images/home/map/parts/inqirah-location-hover-img.png";
import InqirahColorActive from "@/app/_images/home/map/parts/inqirah-location-active-img.png";

import SifashWhiteDefult from "@/app/_images/home/map/parts/sifas-location-default-img.png";
import SifashWhiteHover from "@/app/_images/home/map/parts/sifas-location-hover-img.png";
import SifasColorActive from "@/app/_images/home/map/parts/sifas-location-active-img.png";

const MapLoactionStyled = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 70rem;
  margin-top: 84px;

  .map-location {
    width: 1200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .location {
      position: absolute;
      left: 323px;
      top: 112.5px;
      color: transparent;
      text-align: center;
      background: url(${InqirahWhiteDefult.src}) no-repeat center/ contain;
      width: 192.69px;
      height: 170.71px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      padding-left: 30px;
      transition: all 0.4s;

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0;
      }

      p {
        font-size: 11px;
        font-weight: 400;
      }

      &:hover {
        color: var(--dark-color);
        background-image: url(${InqirahWhiteHover.src});
      }

      &.active {
        color: var(--white-color);
        background-image: url(${InqirahColorActive.src});
      }
    }

    .sifas-location {
      right: 384px;
      top: 133px;
      background: url(${SifashWhiteDefult.src}) no-repeat center/ contain;
      width: 178.83px;
      height: 162.37px;
      padding-left: 0;
    }
    .sifas-location:hover {
      background-image: url(${SifashWhiteHover.src});
    }
    .location.active.sifas-location {
      background-image: url(${SifasColorActive.src});
    }

    .map-img {
      height: 100%;
      .srcc {
        height: 100%;
      }
    }
  }
`;

export default function MainMapLoaction() {
  return (
    <MapLoactionStyled>
      <div className="map-location">
        <div className="locations">
          <div className="map-img">
            <Image src={MainMap} alt="map" className="srcc" />
          </div>
          <div className="location active" id="inqirah-location">
            <h3>أنقرة</h3>
            <p>29 مدرسة</p>
          </div>
          <div className="location sifas-location" id="sifas-location">
            <h3>سيفاس</h3>
            <p>14 مدرسة</p>
          </div>
        </div>
      </div>
    </MapLoactionStyled>
  );
}
