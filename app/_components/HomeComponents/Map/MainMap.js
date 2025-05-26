import styled from "styled-components";
import MapTopbar from "./MainMapTopbar";
import MainMapLoaction from "./MainMapLoaction";
import MainMapSlider from "./MainMapSlider";

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

          <MainMapLoaction />

          <MainMapSlider />
        </div>
      </div>
    </MapWrap>
  );
}
