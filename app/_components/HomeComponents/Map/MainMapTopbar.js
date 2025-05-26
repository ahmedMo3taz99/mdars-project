import styled from "styled-components";
import SchoolBox from "./MapTopBar/SchoolBox";
import NumberPublic from "./MapTopBar/NumberPublic";

const MapTopbarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function MapTopbar() {
  return (
    <MapTopbarStyle>
      <SchoolBox />

      <NumberPublic />
    </MapTopbarStyle>
  );
}
