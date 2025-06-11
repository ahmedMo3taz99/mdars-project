import { IBM_Plex_Sans_Arabic } from "next/font/google";

export const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"], // أضف latin أيضاً
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex", // أضف متغير CSS
  preload: true, // تحميل مسبق
});
