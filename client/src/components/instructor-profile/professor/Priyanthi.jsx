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
                    சர்வதேச பெண்கள் ஆராதனை ஒருமித்து தேவனை மகிமைப்படுத்தும் மகிமையின் ஆராதனை!
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
                    நம்முடைய பிதாவாகிய தேவனாலும் கர்த்தராகிய இயேசு
                    கிறிஸ்துவினாலும் உங்களுக்குக் கிருபையும் சமாதானமும்
                    உண்டாவதாக
                  </p>
                  <p>
                    ISG ஊழியங்கள் ஒரு தனிப்பட்ட மனுஷனுடைய ஊழியம் அல்ல,
                    கர்த்தராகிய தேவனுடைய வழிநடத்துததில் செயல்படும்
                    ஊழியமாகும்,தேவனுடைய நாமம் மகிமைப்படும்படியாக இதில் எங்களுடன்
                    இணைந்து தேவனுடைய வார்த்தைகளைக் கற்றுக்கொள்கிற நீங்கள்
                    ஒவ்வொருவரும் சர்வதேசங்கள் அனைத்திலும் எட்டுத் திசைகளிலும்
                    சென்று "வானத்துக்கும் பூமிக்கும் ஆண்டவராகிய தேவாதி தேவனை
                    பிரஸ்தாபப்படுத்துவீர்கள்" என்று கர்த்தருக்குள்
                    விசுவாசிக்கிறேன்.
                  </p>
                  <p>
                    "பரலோக ராஜ்யம் கடுகு விதைக்கு ஒப்பாயிருக்கிறது ; அதை ஒரு
                    மனுஷன் எடுத்துத் தன் நிலத்தில் விதைத்தான். " "அது சகல
                    விதைகளிலும் சிறிதாய் இருந்தும், வளரும் போதும், சகல பூண்டு
                    களிலும் பெரிதாகி, Served ஆகாயத்துப் பறவைகள் அதின் கிளைகளில்
                    வந்து அடையத்தக்க மரமாகும் " என்றார். (மத்தேயு 13:31,32)
                  </p>
                </div>
                <div className="instructor-tp-course">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="instruc-biography">
                        <h2 className="ins-bio-title mb-35">Courses</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {our_course_data.slice(0, 4).map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix">
                            <Link href="/course-details">
                              <img src={item.img} alt="course-thumb" />
                            </Link>
                            <div className="tpcourse__tag">
                              <Link href="#">
                                <i className="fi fi-rr-heart"></i>
                              </Link>
                            </div>
                            <div className="tpcourse__img-icon">
                              <img src={item.icon} alt="course-avata" />
                            </div>
                          </div>
                          <div className="tpcourse__content-2">
                            <div className="tpcourse__category mb-10">
                              <ul className="tpcourse__price-list d-flex align-items-center">
                                <li>
                                  <Link
                                    className={item.ct_color}
                                    href="/course-details"
                                  >
                                    {item.course_title}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={item.cn_color}
                                    href="/course-details"
                                  >
                                    {item.course_name}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="tpcourse__ava-title mb-15">
                              <h4 className="tpcourse__title">
                                <Link href="/course-details">{item.title}</Link>
                              </h4>
                            </div>
                            <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                              <ul className="d-flex align-items-center">
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-01.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.cls_text}</span>
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-02.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.st_text}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
