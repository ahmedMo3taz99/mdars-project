import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.webp";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={200}
        height={100}
        priority
        quality={100}
        src={logo}
        alt="logo of this webiste"
      />
    </Link>
  );
}
