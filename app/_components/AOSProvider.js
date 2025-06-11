"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function AOSProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // تأكد إن احنا على الـ client
    setIsClient(true);

    // تأخير AOS شوية عشان الـ DOM يكون جاهز
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out",
        // ده مهم جداً - يخلي AOS يستنى الـ images تحمل
        startEvent: "DOMContentLoaded",
        // تعطيل AOS على الـ server
        disable: function () {
          return typeof window === "undefined";
        },
      });
    }, 100); // تأخير 100ms

    return () => clearTimeout(timer);
  }, []);

  // لو لسه مش على الـ client، ارجع children بدون AOS
  if (!isClient) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  return <>{children}</>;
}
