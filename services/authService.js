import { getStoredToken } from "@/utils/storage";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

class AuthService {
  // Helper method for making API calls
  async apiCall(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = getStoredToken();

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      return data;
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  }

  // Login
  async login(credentials) {
    return await this.apiCall("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }

  // Register
  async register(userData) {
    return await this.apiCall("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  // Forgot Password
  async forgotPassword(email) {
    return await this.apiCall("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  }

  // Verify OTP
  async verifyOTP(otpData) {
    return await this.apiCall("/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify(otpData),
    });
  }

  // Reset Password
  async resetPassword(resetData) {
    return await this.apiCall("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(resetData),
    });
  }

  // Logout
  async logout() {
    return await this.apiCall("/auth/logout", {
      method: "POST",
    });
  }

  // Verify Token
  async verifyToken() {
    return await this.apiCall("/auth/verify", {
      method: "GET",
    });
  }
}

export const authService = new AuthService();


