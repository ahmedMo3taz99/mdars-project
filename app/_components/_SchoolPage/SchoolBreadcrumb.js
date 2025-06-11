import HomeIcon from "@/app/_images/about/breadCrumb/home-icon.png";
import Image from "next/image";
import {
  BreadcrumbStyle,
  TheBreadcrumb,
} from "../_ِِAboutComponents/Breadcrumb";
import Link from "next/link";

export default function SchoolBreadcrumb() {
  return (
    <BreadcrumbStyle>
      <div className="container">
        <TheBreadcrumb as="ul">
          <li>
            <Link href="/">
              <span>
                <Image src={HomeIcon} alt="home" width={15} />
              </span>
            </Link>
          </li>
          <li>المدارس</li>
          <li>البحث المتقدم</li>
        </TheBreadcrumb>
      </div>
    </BreadcrumbStyle>
  );
}
