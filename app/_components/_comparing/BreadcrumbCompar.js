import React from "react";
import Breadcrumb, {
  BreadcrumbStyle,
  TheBreadcrumb,
} from "../_ِِAboutComponents/Breadcrumb";
import HomeIcon from "@/app/_images/about/breadCrumb/home-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function BreadcrumbCompar() {
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
          <li>المقارنة بين المدارس</li>
          <li>تفاصيل المقارنة</li>
        </TheBreadcrumb>
      </div>
    </BreadcrumbStyle>
  );
}
