import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footers/footer";
import HeaderTwo from "./headers/header-2";

const Wrapper = ({ children }) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  }, [])

  return (
    <>
      <HeaderTwo />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default Wrapper;
