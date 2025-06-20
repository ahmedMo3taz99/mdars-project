// // تكوين الـ API
// const API_CONFIG = {
//   BASE_URL: process.env.REACT_APP_API_URL || "https://mdares.ai/api",
//   TIMEOUT: 10000,
//   ENDPOINTS: {
//     LOGIN: "/login",
//     REGISTER: "/register",
//     LOGOUT: "/logout",
//     PROFILE: "/profile",
//     REFRESH_TOKEN: "/refresh",
//     FORGOT_PASSWORD: "/forgot-password",
//     RESET_PASSWORD: "/reset-password",
//     CHANGE_PASSWORD: "/change-password",
//   },
// };

// // إدارة الـ tokens
// const TOKEN_KEY = "authToken";
// const REFRESH_TOKEN_KEY = "refreshToken";

// export const getToken = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem(TOKEN_KEY);
//   }
//   return null;
// };

// export const getRefreshToken = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem(REFRESH_TOKEN_KEY);
//   }
//   return null;
// };

// export const saveAuthToken = (token, refreshToken = null) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem(TOKEN_KEY, token);
//     if (refreshToken) {
//       localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
//     }
//     console.log("✅ Tokens saved successfully");
//   }
// };

// export const removeAuthToken = () => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem(TOKEN_KEY);
//     localStorage.removeItem(REFRESH_TOKEN_KEY);
//     console.log("🗑️ Tokens removed successfully");
//   }
// };

// // التحقق من انتهاء صلاحية الـ token
// const isTokenExpired = (token) => {
//   if (!token) return true;

//   try {
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     const currentTime = Date.now() / 1000;
//     return payload.exp < currentTime;
//   } catch (error) {
//     console.error("Error checking token expiration:", error);
//     return true;
//   }
// };

// // إنشاء الـ headers
// const createHeaders = (customHeaders = {}) => {
//   const headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     ...customHeaders,
//   };

//   const token = getToken();
//   if (token && !isTokenExpired(token)) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   return headers;
// };

// // تحديث الـ token
// const refreshToken = async () => {
//   const refreshTokenValue = getRefreshToken();
//   if (!refreshTokenValue) return false;

//   try {
//     const response = await fetch(
//       `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.REFRESH_TOKEN}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ refreshToken: refreshTokenValue }),
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       saveAuthToken(data.token, data.refreshToken);
//       console.log("🔄 Token refreshed successfully");
//       return true;
//     }
//   } catch (error) {
//     console.error("❌ Failed to refresh token:", error);
//   }

//   return false;
// };

// // الدالة الرئيسية للـ API requests
// export const apiRequest = async (endpoint, options = {}) => {
//   const url = `${API_CONFIG.BASE_URL}${endpoint}`;

//   const config = {
//     method: "GET",
//     headers: createHeaders(options.headers),
//     ...options,
//   };

//   // إضافة timeout
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);
//   config.signal = controller.signal;

//   try {
//     console.log(`🚀 API Request: ${config.method} ${url}`);
//     console.log("📤 Request config:", {
//       method: config.method,
//       headers: config.headers,
//       body: config.body,
//     });

//     const response = await fetch(url, config);
//     clearTimeout(timeoutId);

//     console.log(`📥 Response status: ${response.status}`);

//     // التعامل مع 401 (Unauthorized)
//     if (response.status === 401) {
//       console.log("🔐 Token expired, trying to refresh...");
//       const refreshed = await refreshToken();

//       if (refreshed) {
//         // إعادة المحاولة مع الـ token الجديد
//         console.log("🔄 Retrying request with new token...");
//         return apiRequest(endpoint, options);
//       } else {
//         // فشل في التحديث
//         removeAuthToken();
//         console.error("❌ Session expired. Please login again.");
//         throw new Error("Session expired. Please login again.");
//       }
//     }

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       console.error("❌ API Error:", errorData);
//       throw new Error(
//         errorData.message ||
//           errorData.error ||
//           `HTTP error! status: ${response.status}`
//       );
//     }

//     // التحقق من نوع المحتوى
//     const contentType = response.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//       const data = await response.json();
//       console.log("✅ Success:", data);
//       return data;
//     } else {
//       const textData = await response.text();
//       console.log("✅ Success (text):", textData);
//       return textData;
//     }
//   } catch (error) {
//     clearTimeout(timeoutId);

//     if (error.name === "AbortError") {
//       console.error("⏰ Request timeout");
//       throw new Error("Request timeout. Please try again.");
//     }

//     console.error("💥 API Request Error:", error);
//     throw error;
//   }
// };

// // دوال الـ Authentication
// export const loginUser = async (credentials) => {
//   console.log("🔐 Attempting login with:", { email: credentials.email });

//   const response = await apiRequest(API_CONFIG.ENDPOINTS.LOGIN, {
//     method: "POST",
//     body: JSON.stringify(credentials),
//   });

//   // حفظ الـ token إذا كان موجود في الاستجابة
//   if (response.token) {
//     saveAuthToken(response.token, response.refreshToken);
//   }

//   return response;
// };

// export const registerUser = async (userData) => {
//   console.log("📝 Attempting registration with:", {
//     email: userData.email,
//     name: userData.name,
//   });

//   return apiRequest(API_CONFIG.ENDPOINTS.REGISTER, {
//     method: "POST",
//     body: JSON.stringify(userData),
//   });
// };

// export const logoutUser = async () => {
//   console.log("👋 Logging out user...");

//   try {
//     await apiRequest(API_CONFIG.ENDPOINTS.LOGOUT, {
//       method: "POST",
//     });
//   } catch (error) {
//     console.error("Logout API error:", error);
//     // حتى لو فشل الـ logout في الـ server، نمسح الـ tokens محلياً
//   } finally {
//     removeAuthToken();
//     console.log("✅ User logged out successfully");
//   }
// };

// // دوال الـ User
// export const getUserProfile = async () => {
//   console.log("👤 Fetching user profile...");
//   return apiRequest(API_CONFIG.ENDPOINTS.PROFILE, {
//     method: "GET",
//   });
// };

// export const updateUserProfile = async (userData) => {
//   console.log("👤 Updating user profile...");
//   return apiRequest(API_CONFIG.ENDPOINTS.PROFILE, {
//     method: "PUT",
//     body: JSON.stringify(userData),
//   });
// };

// export const changePassword = async (passwordData) => {
//   console.log("🔒 Changing password...");
//   return apiRequest(API_CONFIG.ENDPOINTS.CHANGE_PASSWORD, {
//     method: "POST",
//     body: JSON.stringify(passwordData),
//   });
// };

// // دوال إضافية مفيدة
// export const forgotPassword = async (email) => {
//   console.log("🔐 Requesting password reset for:", email);
//   return apiRequest(API_CONFIG.ENDPOINTS.FORGOT_PASSWORD, {
//     method: "POST",
//     body: JSON.stringify({ email }),
//   });
// };

// export const resetPassword = async (token, newPassword) => {
//   console.log("🔒 Resetting password...");
//   return apiRequest(API_CONFIG.ENDPOINTS.RESET_PASSWORD, {
//     method: "POST",
//     body: JSON.stringify({ token, newPassword }),
//   });
// };

// // دالة للـ GET requests مع parameters
// export const getRequest = async (endpoint, params = {}) => {
//   const url = new URL(`${API_CONFIG.BASE_URL}${endpoint}`);

//   // إضافة الـ parameters للـ URL
//   Object.keys(params).forEach((key) => {
//     if (params[key] !== undefined && params[key] !== null) {
//       url.searchParams.append(key, params[key]);
//     }
//   });

//   const finalEndpoint = url.pathname + url.search;
//   console.log(`📥 GET Request with params: ${finalEndpoint}`);

//   return apiRequest(finalEndpoint.replace(API_CONFIG.BASE_URL, ""), {
//     method: "GET",
//   });
// };

// // دالة لرفع الملفات
// export const uploadFile = async (file, endpoint = "/upload") => {
//   const url = `${API_CONFIG.BASE_URL}${endpoint}`;
//   const token = getToken();

//   const formData = new FormData();
//   formData.append("file", file);

//   const headers = {};
//   if (token && !isTokenExpired(token)) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   try {
//     console.log(`📎 Uploading file: ${file.name} to ${url}`);

//     const response = await fetch(url, {
//       method: "POST",
//       headers: headers, // لا نضع Content-Type للـ FormData
//       body: formData,
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(
//         errorData.message || `Upload failed! status: ${response.status}`
//       );
//     }

//     const data = await response.json();
//     console.log("✅ File uploaded successfully:", data);
//     return data;
//   } catch (error) {
//     console.error("❌ File upload error:", error);
//     throw error;
//   }
// };

// // دالة للتحقق من حالة الـ authentication
// export const isAuthenticated = () => {
//   const token = getToken();
//   return token && !isTokenExpired(token);
// };

// // تصدير الـ config للاستخدام في أماكن أخرى
// export { API_CONFIG };

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(API_URL, {
      email: email,
      password: password,
    });

    console.log("Login Response:", response.data);

    // Save token to localStorage
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      return {
        success: true,
        token: response.data.token,
        message: "Login successful!",
      };
    } else {
      return {
        success: false,
        message: "No token received",
      };
    }
  } catch (error) {
    console.error("Login Error:", error);

    if (error.response) {
      // Server error
      return {
        success: false,
        message: error.response.data?.message || "Login failed",
      };
    } else {
      // Network error
      return {
        success: false,
        message: "Network error - check your connection",
      };
    }
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
