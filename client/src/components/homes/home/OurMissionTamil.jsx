import Link from "next/link";
import React from "react";

// category_data
const category_data = [
    {
        id: 1,
        img: "/assets/img/category/university.png",
        title: "சர்வதேச வேதாகமக் கல்லூரி / பல்கலைக்கழகம்",
        link: "/course-grid",
    },
    {
        id: 2,
        img: "/assets/img/category/project.png",
        title: " சர்வதேச வேத ஆராய்ச்சி மற்றும் வேதாகம மொழிபெயர்ப்பு பணி",
        link: "/course-grid",
    },
    {
        id: 3,
        img: "/assets/img/category/mic.png",
        title: "சர்வதேச போதகர்கள் கருத்தரங்கு",
        link: "/course-grid",
    },
    {
        id: 4,
        img: "/assets/img/category/event.png",
        title: "சர்வதேச பெண்கள் ஊழிய கருத்தரங்கு",
        link: "/course-grid",
    },
    {
        id: 5,
        img: "/assets/img/category/seminar.png",
        title: "சர்வதேச மிஷினரி கருத்தரங்கு",
        link: "/course-grid",
    },
    {
        id: 6,
        img: "/assets/img/category/workshop.png",
        title: "சர்வதேச வாலிபர்கள் கருத்தரங்கு",
        link: "/course-grid",
    },
    {
        id: 7,
        img: "/assets/img/category/family.png",
        title: "சர்வதேச கிறஸ்தவ குடும்ப கருத்தரங்கு",
        link: "/course-grid",
    },
    {
        id: 8,
        img: "/assets/img/category/leadership.png",
        title: "ஜெப முகாம்கள் நடத்தி ஜெப குழுக்களை உருவாக்குதல்",
        link: "/course-grid",
    },
    {
        id: 9,
        img: "/assets/img/category/avatar.png",
        title: "போ அல்லது அனுப்பு என்கிற மிஷினரி தரிசனத்தை திருச்சபைக்குள் உண்டாக்குதல்",
        link: "/course-grid",
    },
    {
        id: 10,
        img: "/assets/img/category/project.png",
        title: "தேவனை கூடி ஆராதிக்க இடம் இல்லாத பகுதிகளில் திருச்சபைகளை கட்டிக் கொடுத்தல்",
        link: "/course-grid",
    },
    {
        id: 11,
        img: "/assets/img/category/bible.png",
        title: "பரிசுத்த வேதாகமம் வாங்க முடியாதவர்களுக்கு இலவசமாய் கொடுத்தல்",
        link: "/course-grid",
    },
    {
        id: 12,
        img: "/assets/img/category/training.png",
        title: "மொழி வகுப்புகள்",
        link: "/course-grid",
    },
];


const OurMissionTamil = () => {
    return (
        <>
            <style jsx>{`
        @font-face {
          font-family: 'MyCustomFont';
          src: url('/assets/fonts/tamil.ttf') format('truetype');
        }

        .customfont {
          font-family: 'MyCustomFont';
        }
      `}</style>

            <section
                className="tp-category-area bg-bottom grey-bg pt-110 pb-80 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
                style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
            >
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="section-title mb-65">
                                <h2 className="tp-section-title customfont">எங்கள் பணி</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {category_data.map((item) => (
                            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card tp-cat-item mb-40 d-flex align-items-stretch" style={{ backgroundColor: "#5f096f" }}> {/* Use align-items-stretch */}
                                    <div className="tp-category-icon mr-15"
                                        style={{ height: "80px", width: '200px' }}>
                                        <img src={item.img} alt="category-img" />
                                    </div>
                                    <h4 className="tp-category-title customfont" style={{ marginTop: "1rem", }}>
                                        <Link href={item.link} style={{ color: "white" }}>{item.title}</Link>
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
};

export default OurMissionTamil;
