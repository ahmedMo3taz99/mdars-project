import styled from "styled-components";
import DistinctiveTop from "./DistinctiveTop";
import SchoolCards from "./SchoolCards";
import Link from "next/link";

const DistinctiveSchool = styled.div`
  padding: 7.2rem 0;
  background: #fff;

  .browse-btn {
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
  }
`;

export default function Distinctive() {
  return (
    <DistinctiveSchool>
      <div className="container">
        <DistinctiveTop />
        <SchoolCards />
        <div
          className="browse-btn"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <Link className="dark-btn" href="#">
            تصفح الكل
          </Link>
        </div>
      </div>
    </DistinctiveSchool>
  );
}
