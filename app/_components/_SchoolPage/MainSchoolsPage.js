"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


import MainSearchResult from "./MainSearchResult";
import SchoolBreadcrumb from "./SchoolBreadcrumb";
import SchoolSearch from "./SchoolSearch";

export default function MainSchoolsPage() {

      useEffect(() => {
        AOS.init();
      }, []);
    
    
  return (
    <>
      <SchoolBreadcrumb />
      <SchoolSearch />
      <MainSearchResult />
    </>
  )
}
