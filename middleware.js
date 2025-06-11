import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // تحقق من وجود locale في المسار
  const pathnameHasLocale = ["ar", "en"].some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // إذا لم يكن هناك locale، إعادة توجيه للعربية (default)
    return NextResponse.redirect(new URL(`/ar${pathname}`, request.url));
  }
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
