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
                    src="/assets/img/bg/Shan Shalom.jpeg"
                    alt="instructor-thumb"
                  />
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