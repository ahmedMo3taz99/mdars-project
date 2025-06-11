import SchoolCardRe, { SchoolCardsRow } from "../../SchoolCardRe";
import FiltersPagination from "./RightResultFilters/FiltersPagination";
import { LeftResultStyled } from "../AllstyledSchool";
import { getSchools } from "@/lib/Schools";
import { Suspense } from "react";
import Spinner from "../../Spinner";

async function Schools() {
  const schools = await getSchools();
  return <SchoolCardRe schools={schools} />;
}

export default function LeftResult() {
  return (
    <LeftResultStyled>
      <SchoolCardsRow className="parentOf"></SchoolCardsRow>
      <Suspense fallback={<Spinner />}>
        <Schools />
      </Suspense>
      <FiltersPagination />
    </LeftResultStyled>
  );
}
