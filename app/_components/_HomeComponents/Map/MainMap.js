"use client";

import styled from "styled-components";
import MapTopbar from "./MainMapTopbar";
import MainMapLoaction from "./MainMapLoaction";
import MainMapSlider from "./MainMapSlider";
import MainMapSE from "./MainMapSE";

const MapWrap = styled.div`
  background: var(--dark-color);
  padding: 60px 0 150px;
`;

export default function MainMap() {
  return (
    <MapWrap>
      <div className="container">
        <div className="map-box">
          <MapTopbar />

          {/* <MainMapLoaction /> */}
          <MainMapSE />
          <MainMapSlider />
        </div>
      </div>
    </MapWrap>
  );
}
