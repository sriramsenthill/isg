
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import Sudarshan from "./professor/Sudarshan";
import Saji from "./professor/Saji";
import Sasikumar from "./professor/Sasikumar";
import Ben from "./professor/ben";
import Caleb from "./professor/Caleb";
import Priyanthi from "./professor/Priyanthi";
import Arul from "./professor/Arul";

const InstructorProfile = () => {
  return (
    <>
      <Breadcrumb title="Professor Profile" isDbbl="Professor" subtitle="Professor Profile" />
      <Sudarshan />
      <Saji />
      <Caleb />
      <Ben />
      <Priyanthi />
      <Sasikumar />
      <Arul />
    </>
  );
};

export default InstructorProfile;
