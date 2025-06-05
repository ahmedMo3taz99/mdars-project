import LoginNavigation from "../../_components/LoginNavigation";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div>
      <h1>اختار نوع الحساب</h1>

      <LoginNavigation />
    </div>
  );
}
