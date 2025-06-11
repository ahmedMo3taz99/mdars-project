import Image from "next/image";
import Link from "next/link";
import {
  BreadcrumbStyle,
  TheBreadcrumb,
} from "../_ِِAboutComponents/Breadcrumb";
import HomeIcon from "@/app/_images/about/breadCrumb/home-icon.png";

export default function BreadcrumbLogin() {
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
          <li> إنشاء حساب ولي امر جديد</li>
        </TheBreadcrumb>
      </div>
    </BreadcrumbStyle>
  );
}
