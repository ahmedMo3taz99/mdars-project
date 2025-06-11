// قاموس الترجمات
const translations = {
  ar: {
    title: "اختر المدرسة الأفضل لأولادك",
    description:
      "استكشف مجموعة واسعة من أفضل المدارس العالمية والأهلية في السعودية عبر منصة مدارس.ai.",
    installment: "مع خيار التقسيط",
    about: "من نحن",
    schools: "المدارس",
    teachers: "بوابة المعلمين",
    contact: "تواصل معنا",
    home: "الرئيسية",
    services: "خدماتنا",
    blog: "المدونة",
    login: "تسجيل الدخول",
  },
  en: {
    title: "Choose the best school for your children",
    description:
      "Explore top national and international schools in Saudi Arabia easily with madaris.ai.",
    installment: "With installment option",
    about: "About Us",
    schools: "Schools",
    teachers: "Teachers Portal",
    contact: "Contact Us",
    home: "Home",
    services: "Services",
    blog: "Blog",
    login: "Login",
  },
};

// دالة للحصول على الترجمة - تأكد من العربية كافتراضي
export function getTranslations(locale = "ar") {
  return translations[locale] || translations.en; // غيرت هنا من .en لـ .ar
}

// دالة للحصول على النص
export function t(key, locale = "ar") {
  const trans = getTranslations(locale);
  return trans[key] || translations.ar[key] || key; // إضافة fallback للعربية
}

// تحقق من صحة اللغة
export function isValidLocale(locale) {
  return ["ar", "en"].includes(locale);
}

// دالة لإنشاء رابط محلي - بدون locale في الرابط للعربية
export function createLocalizedPath(path, locale = "ar") {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // إذا كانت اللغة عربية، لا تضع locale في الرابط
  if (locale === "ar") {
    return cleanPath ? `/${cleanPath}` : "/";
  }

  // للغات الأخرى، ضع locale في الرابط
  return `/${locale}/${cleanPath}`;
}

// دالة للحصول على اللغة المقابلة
export function getOppositeLocale(currentLocale) {
  return currentLocale === "ar" ? "en" : "ar";
}

// دالة جديدة للحصول على locale من الرابط
export function getLocaleFromPath(pathname) {
  const segments = pathname.split("/").filter(Boolean);

  // إذا كان أول segment هو locale صحيح
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return segments[0];
  }

  // افتراضياً ارجع العربية
  return "ar";
}
