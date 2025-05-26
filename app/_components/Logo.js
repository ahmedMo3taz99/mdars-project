import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.webp";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={170}
        height={80}
        priority
        quality={90}
        src={logo}
        alt="logo of this webiste"
      />
    </Link>
  );
}
