import BreadcrumbLogin from "@/app/_components/_login/BreadcrumbLogin";
import MainParentLogin from "@/app/_components/_login/parentPage/MainParentLogin";

export const metadata = {
  title: "Parent_Login",
};

export default function Page() {
  return (
    <>
      <BreadcrumbLogin />
      <MainParentLogin />
    </>
  );
}
