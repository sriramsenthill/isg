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
  fontSize: "13px",
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
  padding: "0px 20px",
  display: "flex",
  alignItems: "center",
  fontSize: "13px",
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
    margin: "3px",
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
                  <img
                    src="/assets/img/bg/priyanthi.jpeg"
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      Dr.Priyanthi Sudarshan
                    </h4>
                    <p>
                      சர்வதேச பெண்கள் ஆராதனை ஒருமித்து தேவனை மகிமைப்படுத்தும்
                      மகிமையின் ஆராதனை!
                    </p>
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
                  <p style={{ textAlign: "justify" }}>
                    நம்முடைய பிதாவாகிய தேவனாலும் கர்த்தராகிய இயேசு
                    கிறிஸ்துவினாலும் உங்களுக்குக் கிருபையும் சமாதானமும்
                    உண்டாவதாக
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    ISG ஊழியங்கள் ஒரு தனிப்பட்ட மனுஷனுடைய ஊழியம் அல்ல,
                    கர்த்தராகிய தேவனுடைய வழிநடத்துததில் செயல்படும்
                    ஊழியமாகும்,தேவனுடைய நாமம் மகிமைப்படும்படியாக இதில் எங்களுடன்
                    இணைந்து தேவனுடைய வார்த்தைகளைக் கற்றுக்கொள்கிற நீங்கள்
                    ஒவ்வொருவரும் சர்வதேசங்கள் அனைத்திலும் எட்டுத் திசைகளிலும்
                    சென்று "வானத்துக்கும் பூமிக்கும் ஆண்டவராகிய தேவாதி தேவனை
                    பிரஸ்தாபப்படுத்துவீர்கள்" என்று கர்த்தருக்குள்
                    விசுவாசிக்கிறேன்.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    "பரலோக ராஜ்யம் கடுகு விதைக்கு ஒப்பாயிருக்கிறது ; அதை ஒரு
                    மனுஷன் எடுத்துத் தன் நிலத்தில் விதைத்தான். " "அது சகல
                    விதைகளிலும் சிறிதாய் இருந்தும், வளரும் போதும், சகல பூண்டு
                    களிலும் பெரிதாகி, Served ஆகாயத்துப் பறவைகள் அதின் கிளைகளில்
                    வந்து அடையத்தக்க மரமாகும் " என்றார். (மத்தேயு 13:31,32)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorPortfolioArea;
