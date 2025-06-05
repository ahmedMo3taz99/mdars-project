// قاموس الترجمات
const translations = {
  en: {
    title: "Choose the best school for your children",
    description:
      "Explore top national and international schools in Saudi Arabia easily with madaris.ai.",
    installment: "With installment option",
    about: "About Us",
    schools: "Schools",
    // ترجمات جديدة للنافبار
    teachers: "Teachers Portal",
    contact: "Contact Us",
    home: "Home",
    services: "Services",
    blog: "Blog",
    login: "Login",
    // ترجمات إضافية
    welcome: "Welcome",
    search: "Search",
    register: "Register",
    language: "Language",
  },
  ar: {
    title: "اختر المدرسة الأفضل لأولادك",
    description:
      "استكشف مجموعة واسعة من أفضل المدارس العالمية والأهلية في السعودية عبر منصة مدارس.ai.",
    installment: "مع خيار التقسيط",
    about: "من نحن",
    schools: "المدارس",
    // ترجمات جديدة للنافبار
    teachers: "بوابة المعلمين",
    contact: "تواصل معنا",
    home: "الرئيسية",
    services: "خدماتنا",
    blog: "المدونة",
    login: "تسجيل الدخول",
    // ترجمات إضافية
    welcome: "مرحباً",
    search: "بحث",
    register: "إنشاء حساب",
    language: "اللغة",
  },
};

// دالة للحصول على الترجمة
export function getTranslations(locale = "ar") {
  return translations[locale] || translations.ar;
}

// دالة للحصول على النص
export function t(key, locale = "ar") {
  const trans = getTranslations(locale);
  return trans[key] || key;
}

// تحقق من صحة اللغة
export function isValidLocale(locale) {
  return ["ar", "en"].includes(locale);
}
// دالة لإنشاء رابط محلي
export function createLocalizedPath(path, locale = "ar") {
  // إزالة الـ slash الأولى إذا كانت موجودة
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/${locale}/${cleanPath}`;
}

// دالة للحصول على اللغة المقابلة
export function getOppositeLocale(currentLocale) {
  return currentLocale === "ar" ? "en" : "ar";
}
