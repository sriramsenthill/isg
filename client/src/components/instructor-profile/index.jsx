
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import Comment_box from "./comment_box";
import Sudarshan from "./professor/Sudarshan";
import Saji from "./professor/Saji";
import Sasikumar from "./professor/Sasikumar";
import Ben from "./professor/ben";
import Caleb from "./professor/Caleb";
import Priyanthi from "./professor/Priyanthi";

const InstructorProfile = () => {
  return (
    <>
    <Breadcrumb title="Instructor Profile" isDbbl="Instructor" subtitle="Instructor Profile" />
      <Sudarshan/>
      <Saji/>
      <Caleb/>
      <Ben/>
      <Priyanthi/>
      <Sasikumar/>
      <Comment_box/>
    </>
  );
};

export default InstructorProfile;
