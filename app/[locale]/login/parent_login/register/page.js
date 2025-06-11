import BreadcrumbLogin from "@/app/_components/_login/BreadcrumbLogin";
import MainrRegisterPage from "@/app/_components/_login/registerPage/MainrRegisterPage";

export const metadata = {
  title: "Register",
};

export default function page() {
  return (
    <>
      <BreadcrumbLogin />
      <MainrRegisterPage />
    </>
  );
}
