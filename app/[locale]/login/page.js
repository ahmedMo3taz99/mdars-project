import BreadcrumbLogin from "@/app/_components/_login/BreadcrumbLogin";
import LoginNavigation from "@/app/_components/_login/LoginNavigation";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <>
      <BreadcrumbLogin />
      <LoginNavigation />
    </>
  );
}
