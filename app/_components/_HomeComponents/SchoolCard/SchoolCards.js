import { getSchools } from "@/lib/Schools";
import SchoolCardRe from "../../SchoolCardRe";

export default async function SchoolCards() {
  const schools = await getSchools();
  console.log(schools);

  return <SchoolCardRe schools={schools} />;
}
