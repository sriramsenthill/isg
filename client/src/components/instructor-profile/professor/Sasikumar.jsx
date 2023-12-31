import our_course_data from "@/src/data/our-course-data.js";
import Link from "next/link";
import React from "react";

// instructor_portfolio_data
// counter data
const counter_data = [
  {
    id: 1,
    icon: "fi fi-rr-user",
    count_number: 276,
    thousand: "K",
    title: "Worldwide Students",
  },
  {
    id: 2,
    icon: "fi fi-rr-document",
    count_number: 35,
    thousand: "",
    title: "Professional Courses",
  },
  {
    id: 3,
    icon: "fi fi-rr-star",
    count_number: 407,
    thousand: "K",
    title: "Beautiful Review",
  },
];

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
                    src="/assets/img/bg/sasikumar.jpeg"
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      Dr.Sasikumar Amos Dhanaraj
                    </h4>
                    <p>
                      சங்கீதங்களும் சங்கதிகளும்! சங்கீத புஸ்தகத்தில் உள்ள
                      மேன்மைகள் / மகத்துவங்கள்!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">About</h4>
                  <p>
                    "சத்தியத்தை அறிவீர்கள் சத்தியம் உங்களை விடுதலையாக்கும்”
                    தேவனுடைய மனுஷன் தேறினவனாகவும், எந்த நற்கிரியையுஞ் செய்யத்
                    தகுதியுள்ளவனாகவும் இருக்கும்படியாக, அவைகள் உபதேசத்துக்கும்,
                    கடிந்துகொள்ளுதலுக்கும் சீர்திருத்தலுக்கும், நீதியைப்
                    படிப்பிக்குதலுக்கும் பிரயோஜனமுள்ளவைகளாயிருக்கிறது. 11
                    தீமோத்தேயு 3:17
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
