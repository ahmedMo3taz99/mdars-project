import BreadcrumbLogin from "@/app/_components/_login/BreadcrumbLogin";
import MainSchoolLogin from "@/app/_components/_login/SchoolPageLogin/MainSchoolLogin";

export const metadata = {
  title: "School_Login",
};

export default function Page() {
  return (
    <>
      <BreadcrumbLogin />
      <MainSchoolLogin />
    </>
  );
}
