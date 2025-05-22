import Link from "next/link";

export const metadata = {
  title:  "AllSchool"
 
};

export default function Page() {
  return (
    <div>
      <h1>schools</h1>
      <Link href="/schoolId">school id</Link>
    </div>
  );
}
