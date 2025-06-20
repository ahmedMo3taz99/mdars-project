"use client";

// this example i work with js cookis this is libarary

// import { createContext, useContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { getTranslations } from "@/lib/i18n";

// // إنشاء الـ Context
// const AppContext = createContext();

// // الـ Provider الرئيسي
// export function AppProvider({ children, locale = "en" }) {
//   // Auth State
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Language State
//   const [currentLocale, setCurrentLocale] = useState(locale);
//   const [translations, setTranslations] = useState({});

//   // تحميل الترجمات عند تغيير اللغة
//   useEffect(() => {
//     const loadTranslations = async () => {
//       const newTranslations = getTranslations(currentLocale);
//       setTranslations(newTranslations);
//     };

//     loadTranslations();
//   }, [currentLocale]);

//   // فحص التوكن المحفوظ عند بداية التطبيق
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const savedToken = Cookies.get("authToken");

//         if (savedToken) {
//           // التحقق من صحة التوكن
//           const response = await fetch("/api/auth/verify", {
//             headers: {
//               Authorization: `Bearer ${savedToken}`,
//             },
//           });

//           if (response.ok) {
//             const userData = await response.json();
//             // تحديث حالة الـ Auth
//             setUser(userData.user);
//             setToken(savedToken);
//             setIsAuthenticated(true);
//           } else {
//             // التوكن غير صالح
//             Cookies.remove("authToken");
//           }
//         }
//       } catch (error) {
//         console.error("Auth check failed:", error);
//         Cookies.remove("authToken");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   // دالة تسجيل الدخول
//   const login = async (credentials) => {
//     try {
//       setIsLoading(true);
//       setError(null);

//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // حفظ التوكن في الكوكيز
//         Cookies.set("authToken", data.token, {
//           expires: 7,
//           secure: process.env.NODE_ENV === "production",
//           sameSite: "strict",
//         });

//         // تحديث الحالة
//         setUser(data.user);
//         setToken(data.token);
//         setIsAuthenticated(true);
//         setError(null);

//         return { success: true };
//       } else {
//         setError(data.message || "Login failed");
//         return { success: false, error: data.message };
//       }
//     } catch (error) {
//       const errorMessage = "Network error occurred";
//       setError(errorMessage);
//       return { success: false, error: errorMessage };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // دالة تسجيل الخروج
//   const logout = async () => {
//     try {
//       // استدعاء API الخروج
//       await fetch("/api/auth/logout", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     } catch (error) {
//       console.error("Logout API call failed:", error);
//     } finally {
//       // مسح البيانات محلياً
//       Cookies.remove("authToken");
//       setUser(null);
//       setToken(null);
//       setIsAuthenticated(false);
//       setError(null);
//     }
//   };

//   // مسح الأخطاء
//   const clearError = () => {
//     setError(null);
//   };

//   // دالة الترجمة
//   const t = (key) => {
//     return translations[key] || key;
//   };

//   // تغيير اللغة
//   const changeLocale = (newLocale) => {
//     setCurrentLocale(newLocale);
//     // حفظ اللغة في الكوكيز
//     Cookies.set("locale", newLocale, { expires: 365 });
//   };

//   // القيم التي سيتم تمريرها للـ Context
//   const contextValue = {
//     // Auth
//     user,
//     token,
//     isAuthenticated,
//     isLoading,
//     error,
//     login,
//     logout,
//     clearError,

//     // Language
//     locale: currentLocale,
//     translations,
//     t,
//     changeLocale,
//   };

//   return (
//     <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
//   );
// }

// // Custom Hook للـ Auth
// export function useAuth() {
//   const context = useContext(AppContext);

//   if (!context) {
//     throw new Error("useAuth must be used within an AppProvider");
//   }

//   return {
//     user: context.user,
//     token: context.token,
//     isAuthenticated: context.isAuthenticated,
//     isLoading: context.isLoading,
//     error: context.error,
//     login: context.login,
//     logout: context.logout,
//     clearError: context.clearError,
//   };
// }

// // Custom Hook للترجمة
// export function useTranslation() {
//   const context = useContext(AppContext);

//   if (!context) {
//     throw new Error("useTranslation must be used within an AppProvider");
//   }

//   return {
//     locale: context.locale,
//     translations: context.translations,
//     t: context.t,
//     changeLocale: context.changeLocale,
//   };
// }

// // Hook شامل للحصول على كل شيء
// export function useApp() {
//   const context = useContext(AppContext);

//   if (!context) {
//     throw new Error("useApp must be used within an AppProvider");
//   }

//   return context;
// }

// this example without cookies this is libarray to localStorage direct

import { createContext, useContext, useState, useEffect } from "react";
import { getTranslations } from "@/lib/i18n";

// إنشاء الـ Context
const AppContext = createContext();

// utility functions للـ localStorage
const storage = {
  get: (key) => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        return item;
      } catch (error) {
        console.error(`Error getting ${key} from localStorage:`, error);
        return null;
      }
    }
    return null;
  },

  set: (key, value) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.error(`Error setting ${key} in localStorage:`, error);
        return false;
      }
    }
    return false;
  },

  remove: (key) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error(`Error removing ${key} from localStorage:`, error);
        return false;
      }
    }
    return false;
  },
};

// الـ Provider الرئيسي
export function AppProvider({ children, locale = "en" }) {
  // Auth State
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Language State
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [translations, setTranslations] = useState({});

  // تحميل الترجمات عند تغيير اللغة
  useEffect(() => {
    const loadTranslations = async () => {
      const newTranslations = getTranslations(currentLocale);
      setTranslations(newTranslations);
    };

    loadTranslations();
  }, [currentLocale]);

  // تحميل اللغة المحفوظة عند بداية التطبيق
  useEffect(() => {
    const savedLocale = storage.get("locale");
    if (savedLocale && savedLocale !== currentLocale) {
      setCurrentLocale(savedLocale);
    }
  },[]);

  // فحص التوكن المحفوظ عند بداية التطبيق
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedToken = storage.get("authToken");

        if (savedToken) {
          // التحقق من صحة التوكن
          const response = await fetch("/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${savedToken}`,
            },
          });

          if (response.ok) {
            const userData = await response.json();
            // تحديث حالة الـ Auth
            setUser(userData.user);
            setToken(savedToken);
            setIsAuthenticated(true);
          } else {
            // التوكن غير صالح
            storage.remove("authToken");
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        storage.remove("authToken");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // دالة تسجيل الدخول
  const login = async (credentials) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // حفظ التوكن في localStorage
        storage.set("authToken", data.token);

        // تحديث الحالة
        setUser(data.user);
        setToken(data.token);
        setIsAuthenticated(true);
        setError(null);

        return { success: true };
      } else {
        setError(data.message || "Login failed");
        return { success: false, error: data.message };
      }
    } catch (error) {
      const errorMessage = "Network error occurred";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  // دالة تسجيل الخروج
  const logout = async () => {
    try {
      // استدعاء API الخروج
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      // مسح البيانات محلياً
      storage.remove("authToken");
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);
      setError(null);
    }
  };

  // مسح الأخطاء
  const clearError = () => {
    setError(null);
  };

  // دالة الترجمة
  const t = (key) => {
    return translations[key] || key;
  };

  // تغيير اللغة
  const changeLocale = (newLocale) => {
    setCurrentLocale(newLocale);
    // حفظ اللغة في localStorage
    storage.set("locale", newLocale);
  };

  // القيم التي سيتم تمريرها للـ Context
  const contextValue = {
    // Auth
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError,

    // Language
    locale: currentLocale,
    translations,
    t,
    changeLocale,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

// Custom Hook للـ Auth
export function useAuth() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAuth must be used within an AppProvider");
  }

  return {
    user: context.user,
    token: context.token,
    isAuthenticated: context.isAuthenticated,
    isLoading: context.isLoading,
    error: context.error,
    login: context.login,
    logout: context.logout,
    clearError: context.clearError,
  };
}

// Custom Hook للترجمة
export function useTranslation() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useTranslation must be used within an AppProvider");
  }

  return {
    locale: context.locale,
    translations: context.translations,
    t: context.t,
    changeLocale: context.changeLocale,
  };
}

// Hook شامل للحصول على كل شيء
export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return context;
}
