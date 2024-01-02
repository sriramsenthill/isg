import our_course_data from "@/src/data/our-course-data.js";
import Link from "next/link";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CommentForm from "../comment_box";

const CustomButtonZoom = styled(Button)(({ theme }) => ({
  background: "transparent",
  position: "relative",
  padding: "0px 25px",
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "25px",
  outline: "none",
  overflow: "hidden",
  color: theme.palette.primary.main,
  transition: "color 0.3s 0.1s ease-out",
  textAlign: "center",
  "& span": {
    margin: "5px",
  },
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    content: '""',
    borderRadius: "50%",
    display: "block",
    width: "20em",
    height: "20em",
    left: "-5em",
    textAlign: "center",
    transition: "box-shadow 0.5s ease-out",
    zIndex: -1,
  },
  "&:hover": {
    color: "#fff",
    border: `1px solid ${theme.palette.primary.main}`,
    "&::before": {
      boxShadow: `inset 0 0 0 10em ${theme.palette.primary.main}`,
    },
  },
}));

const CustomButtonwhatsapp = styled(Button)(({ theme }) => ({
  background: "transparent",
  position: "relative",
  padding: "0px 25px",
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: "25px",
  outline: "none",
  overflow: "hidden",
  color: theme.palette.success.main,
  transition: "color 0.3s 0.1s ease-out",
  textAlign: "center",
  "& span": {
    margin: "5px",
  },
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    content: '""',
    borderRadius: "50%",
    display: "block",
    width: "20em",
    height: "20em",
    left: "-5em",
    textAlign: "center",
    transition: "box-shadow 0.5s ease-out",
    zIndex: -1,
  },
  "&:hover": {
    color: "#fff",
    border: `1px solid ${theme.palette.success.main}`,
    "&::before": {
      boxShadow: `inset 0 0 0 10em ${theme.palette.success.main}`,
    },
  },
}));

const InstructorPortfolioArea = () => {
  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img src="/assets/img/bg/saji.jpeg" alt="instructor-thumb" />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      Dr.Saji Abraham
                    </h4>
                    <p>தேவன் கொடுக்கும் கடைசிக் கால வெளிப்பாடுகள்!</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <CustomButtonZoom>
                      <img
                        src="/assets/img/icon/zoom.png"
                        alt="instructor-thumb"
                      />
                      <span>Zoom Meeting</span>
                    </CustomButtonZoom>
                    <CustomButtonwhatsapp>
                      <img
                        src="/assets/img/icon/whatsapp.png"
                        alt="instructor-thumb"
                      />
                      <span>Whatsapp</span>
                    </CustomButtonwhatsapp>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">About</h4>
                  <p>
                    சாட்சியாய் ஜொலிப்பதற்கு வல்லமை தருகிறார் அப்.1:8 சரியாக
                    ஜெபிப்பதற்கு வல்லமை தருகிறார் ரோமர் 8:26 சத்துருவை ஜெயம்
                    கொள்வதற்கு வல்லமை தருகிறார் ஏசாயா 59:19
                  </p>
                  <p>
                    சுவிசேஷத்தை நான் பிரசங்கித்துவந்தும், மேன்மைபாராட்ட எனக்கு
                    இடமில்லை: அது என்மேல் விழுந்த கடமையாயிருக்கிறது; சுவிசேஷத்தை
                    நான் பிரசங்கியாதிருந்தால், எனக்கு ஐயோ. I கொரிந்தியர் 9 :16
                  </p>
                </div>
                <CommentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorPortfolioArea;
