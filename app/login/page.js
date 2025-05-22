import Link from "next/link";
import LoginNavigation from "../_components/LoginNavigation";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div>
      <h1>اختار نوع الحساب</h1>

      {/* <Link href="/login/school_login"> حساب مدرسه</Link>
      <Link href="/login/parent_login"> حساب ولي امر</Link> */}
      <LoginNavigation />
    </div>
  );
}
