import AOSProvider from "../AOSProvider";
import MainSearchResult from "./MainSearchResult";
import SchoolBreadcrumb from "./SchoolBreadcrumb";
import SchoolSearch from "./SchoolSearch";

export default function MainSchoolsPage() {
  return (
    <AOSProvider>
      <SchoolBreadcrumb />
      <SchoolSearch />
      <MainSearchResult />
    </AOSProvider>
  );
}
