import HomeIcon from "@/app/_images/about/breadCrumb/home-icon.png";
import Image from "next/image";
import { BreadcrumbStyle } from "../_ِِAboutComponents/Breadcrumb";

export default function SchoolBreadcrumb() {
  return (
    <BreadcrumbStyle>
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <a href="#">
              <span>
                <Image src={HomeIcon} alt="home" width={15} />
              </span>
            </a>
          </li>
          <li>
            <a href="#">المدارس</a>
          </li>
          <li>البحث المتقدم</li>
        </ul>
      </div>
    </BreadcrumbStyle>
  );
}
