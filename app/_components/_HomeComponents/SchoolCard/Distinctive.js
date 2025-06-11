import { Suspense } from "react";
import { DistinctiveSchool } from "../AllStyledForHome";
import DistinctiveTop from "./DistinctiveTop";
import SchoolCards from "./SchoolCards";
import Link from "next/link";
import Spinner from "../../Spinner";

export default function Distinctive() {
  return (
    <DistinctiveSchool>
      <div className="container">
        <DistinctiveTop />
        <Suspense fallback={<Spinner />}>
          <SchoolCards />
        </Suspense>
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
