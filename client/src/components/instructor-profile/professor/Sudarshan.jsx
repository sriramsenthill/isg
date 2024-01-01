import our_course_data from "@/src/data/our-course-data.js";
import Link from "next/link";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({
  background: "transparent",
  position: "relative",
  padding: "0px 25px",
  display: "flex",
  alignItems: "center",
  fontSize: "17px",
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
                  <img src="/assets/img/bg/17.png" alt="instructor-thumb" />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      Dr.Sudarshan Ashokan
                    </h4>
                    <p>
                      தேவனுடனான நமது உறவு! தேவனோடு உள்ள உறவை புரிதலும், தேவனை
                      நெருங்குதலும்!
                    </p>
                  </div>
                  <CustomButton>
                    <span>Zoom<br/>Meeting</span>                  
                  </CustomButton>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h1 className="ins-bio-title mb-30">About</h1>
                  <p>
                    நான் ஒரு கிறிஸ்தவன் என்பதில் எவ்வித சந்தேகமும் இல்லை, ஆனால்
                    பரிசுத்த வேதாகமத்திற்கு இன்றும் நான் ஒரு மாணவனாகவே
                    இருக்கிறேன்.
                  </p>
                  <p>
                    அன்புக்குரியவர்களே, பரிசுத்த வேதாகமமானது எந்த ஒரு மனிதனின்
                    சிந்தையில், கற்பனையில், புராணங்களின், இதிகாசங்களில்
                    எழுதப்பட்ட புத்தகம் அல்ல.இது பரிசுத்த ஆவியால் பல்வேறு
                    தேவமனிதர்களுக்கு உணர்த்தப்பட்டு எழுதப்பட்ட அற்புதமான
                    தேவனுடைய வார்த்தையாகும்., உலக விஞ்ஞான ஆராய்ச்சியானது
                    பரிசுத்த வேதாகமத்தையே மையமாகக் கொண்டிருக்கிறது மேலும், அதை
                    பின்பற்றியே வளர்ச்சியடைந்து கொண்டிருக்கிறது. உலக விஞ்ஞான
                    அறிவியலாளர்கள் நமது பரிசுத்த வேதாகமத்தை தனது வஞ்ஞான
                    ஞானத்திற்கு பயன்படுத்திக்கொள்கிறார்கள், கிறிஸ்துவையோ
                    விட்டுவிடுகிறார்கள்
                  </p>
                  <p>
                    அன்பு தேவ பிள்ளைகளே, நான் பரிசுத்த வேதாகமத்தின் மாணவன் என்
                    உயிர் உள்ள நாள் வரை நான் பரிசுத்த வேதாகமத்தின் மாணவனாகவே
                    இருக்க விரும்புகிறேன். பரிசுத்த வேதாகமத்தில் தேறினவர்கள்
                    என்று எவரும் இல்லை. கிறிஸ்துவுக்குள் தொடர்ந்து தேவனை நோக்கி
                    பொறுமையுடன் முன்னேருங்கள்.கிறிஸ்துவுக்குள் நீங்கள் தேறுதலடைய
                    ஜெபத்துடன் பிராயசப்படுகிறேன். தேவனுடைய நாமம் மகிமைப்படுவதாக.
                  </p>
                  <p>
                    பலவீனரை ஆதாயப்படுத்திக்கொள்ளும்படிக்குப் பலவீனருக்குப்
                    பலவீனனைப்போலானேன்; எப்படியாகிலும் சிலரை இரட்சிக்கும்படிக்கு
                    நான் எல்லாருக்கும் எல்லாமானேன்.சுவிசேஷத்தில் நான்
                    உடன்பங்காளியாகும்படிக்கு, அதினிமித்தமே இப்படிச் செய்கிறேன்.
                    பந்தயச் சாலையில் ஓடுகிறவர்களெல்லாரும் ஓடுவார்கள்; ஆகிலும்,
                    ஒருவனே பந்தயத்தைப் பெறுவானென்று அறியீர்களா? நீங்கள்
                    பெற்றுக்கொள்ளத்தக்கதாக ஓடுங்கள். பந்தயத்திற்குப் போராடுகிற
                    யாவரும் எல்லாவற்றிலேயும் இச்சையடக்கமாயிருப்பார்கள். அவர்கள்
                    அழிவுள்ள கிரீடத்தைப் பெறும்படிக்கு அப்படிச் செய்கிறார்கள்,
                    நாமோ அழிவில்லாத கிரீடத்தைப் பெறும்படிக்கு அப்படிச்
                    செய்கிறோம். ஆதலால் நான் நிச்சயமில்லாதவனாக ஓடேன்; ஆகாயத்தை
                    அடிக்கிறவனாகச் சிலம்பம்பண்ணேன்.மற்றவர்களுக்குப்
                    பிரசங்கம்பண்ணுகிற நான்தானே ஆகாதவனாய்ப் போகாதபடிக்கு, என்
                    சரீரத்தை ஒடுக்கிக் கீழ்ப்படுத்துகிறே ( I கொரிந்தியர் 9 : 22
                    - 27 )
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
