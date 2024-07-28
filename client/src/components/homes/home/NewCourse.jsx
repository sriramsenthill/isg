import Link from "next/link";
import React from "react";

const category_data = [
    {
        id: 1,
        title: "Postgraduate Diploma in Theology (PGDip Theo) in Pastoral Studies"
    },
    {
        id: 2,
        title: "Certificate in Theology & Peace Studies"
    },
    {
        id: 3,
        title: "Certificate in Biblical Studies"
    },
    {
        id: 4,
        title: "Certificate in Pastoral Care"
    },
    {
        id: 5,
        title: "Certificate in Next Generation Ministry"
    },
    {
        id: 6,
        title: "Director of Christian Education (DCE)"
    },
    {
        id: 7,
        title: "Certificate in Catholic Studies"
    },
    {
        id: 8,
        title: "Certificate in Pursuit"
    },
    {
        id: 9,
        title: "Certificate of Christian Foundations"
    },
    {
        id: 10,
        title: "Certificate IV in Christian Ministry and Theology"
    },
    {
        id: 11,
        title: "Certificate of Christian Foundations"
    },
    {
        id: 12,
        title: "Biblical Studies Certificate"
    },
    {
        id: 13,
        title: "Introductory Certificate in Christian Studies (ICCS)"
    },
    {
        id: 14,
        title: "TRANSFORMATIONAL LEADERSHIP certificate"
    },
    {
        id: 15,
        title: "Postgraduate Certificate in Chaplaincy (PGCertChap) 1pm"
    },
    {
        id: 16,
        title: "Postgraduate Diploma in Chaplaincy (PGDpChep)"
    },
    {
        id: 17,
        title: "Certificate in Theology & Culture"
    },
    {
        id: 18,
        title: "Certificate in Christian Education"
    },
    {
        id: 19,
        title: "Certificate in Youth and Family Ministry"
    },
    {
        id: 20,
        title: "Certificate in Anglican Studies"
    },
    {
        id: 21,
        title: "Certificate in Christian Studies"
    },
    {
        id: 22,
        title: "Certificate in Church Planting"
    },
    {
        id: 23,
        title: "Certificate in Christian Formation & Counselling"
    },
    {
        id: 24,
        title: "Certificate in Christian Formation & Counselling"
    },
    {
        id: 25,
        title: "Certificate in Bible & Theology"
    },
    {
        id: 26,
        title: "Certificate of Pre-University"
    },
    {
        id: 27,
        title: "Certificate of Christian Leadership"
    },
    {
        id: 28,
        title: "Certificate Biblical Studies"
    },
    {
        id: 29,
        title: "Certificate Ill in Christian Ministry and Theology"
    },
    {
        id: 30,
        title: "Disciple Making Church Leadership Certificate"
    },
    {
        id: 31,
        title: "Disciple Maker Certificate"
    },
    {
        id: 32,
        title: "Certificate in Bible and Mission (CBM)"
    },
    {
        id: 33,
        title: "Graduate Certificate in Pentecostal Studies"
    },
    {
        id: 34,
        title: "Certificate in Christian Ministry"
    },
    {
        id: 35,
        title: "Certificate in Christian Ministry"
    },
    {
        id: 36,
        title: "Certificate in Biblical Studies"
    },
    {
        id: 37,
        title: "Certificate in Spirituality & Human Development"
    },
    {
        id: 38,
        title: "Certificate in Christian Foundations"
    },
    {
        id: 39,
        title: "Certificate in Church Ministry"
    },
    {
        id: 40,
        title: "Certificate in Biblical Studies Exclusively Online"
    },
    {
        id: 41,
        title: "Undergraduate Certificate of Christian Leadership"
    },
    {
        id: 42,
        title: "Undergraduate Certificate of Ministry Studies"
    },
    {
        id: 43,
        title: "The Professional Certificate in Pastoral Supervision"
    },
    {
        id: 44,
        title: "Spurgeon's College Certificate in Theology and Ministry"
    },
    {
        id: 45,
        title: "Certificate IV in Chaplaincy and l'astoral Care"
    },
    {
        id: 46,
        title: "Certificate Ill in Christian Ministry and Theology"
    },
    {
        id: 47,
        title: "Certificate of ligner Coucation in Theology, Ministry and Mission"
    },
    {
        id: 48,
        title: "GRADUATE CERTIFICATE IN MINISTRY"
    },
    {
        id: 49,
        title: "Certificate in Academic Studies in Theology"
    },
    {
        id: 50,
        title: "Level 1 certificate in Ministerial Studies"
    },
    {
        id: 51,
        title: "Certificate in General Studies"
    },
    {
        id: 52,
        title: "Certificate in Leadership Studies"
    },
    {
        id: 53,
        title: "CERTIFICATE OF HIGHER EDUCATION IN JEWISH EDUCATION"
    },
    {
        id: 54,
        title: "Ministry Preparation Program"
    },
    {
        id: 55,
        title: "Certificate in Bible"
    },
    {
        id: 56,
        title: "Certificate in Biblical Studies"
    },
    {
        id: 57,
        title: "HE CERT THEOLOGY"
    },
    {
        id: 58,
        title: "Certificate of Christian Ministries"
    },
    {
        id: 59,
        title: "Certificate of Higher Education Theology"
    },
    {
        id: 60,
        title: "Advanced CITE™️ Financial Analysis"
    },
    {
        id: 61,
        title: "CERTIFICATE IN APPLIED THEOLOGY"
    },
    {
        id: 62,
        title: "Certificate of Ministry"
    },
    {
        id: 63,
        title: "Spiritual Guidance Mentor Certificate"
    },
    {
        id: 64,
        title: "Certificate in Theology by Blended Distance Learning"
    },
    {
        id: 65,
        title: "Staft Ministry Certification"
    },
    {
        id: 66,
        title: "Worldview Studies Certificate"
    },
    {
        id: 67,
        title: "Certificate in Theological Studies"
    },
    {
        id: 68,
        title: "Certificate in Biblical Studies"
    },
    {
        id: 69,
        title: "Meryvale Certificate & Diploma in Youth Ministry & School Chaplaincy"
    },
    {
        id: 70,
        title: "Certificate in Intercultural Studies and Theology (1 year program)"
    }
];

const NewCourse = () => {
    return (
        <>
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
                                <h2 className="tp-section-title">We Have Introduced New Courses</h2>
                                <h6 >please click the course title to get enrolled in the course</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {category_data.map((item) => (
                            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                                <div
                                    className="card tp-cat-item mb-40 d-flex align-items-stretch"
                                    style={{ backgroundColor: "#5f096f" }}
                                >
                                    {" "}
                                    {/* Use align-items-stretch */}
                                    <div
                                        className="tp-category-icon mr-15"
                                        style={{ display: "flex", justifyContent: "space-between" }}
                                    >
                                        {/* <div>
                                            <img src={item.img} alt="category-img" />
                                        </div> */}
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "end",
                                            }}
                                        >
                                            <img
                                                src="/assets/img/isg/newLogo.png"
                                                alt="category-img"
                                                style={{ width: "55px", height: "55px" }}
                                            />
                                        </div>
                                    </div>
                                    <h4
                                        className="tp-category-title customfont"
                                        style={{ marginTop: "1rem" }}
                                    >
                                        <Link href="https://forms.zohopublic.in/sriramsenthilnathan/form/ParentFeedback/formperma/mU2KcN3DhEE_wZXlXObe6KO8U_HBec9b7zoS38jhzpo" style={{ color: "white" }}>
                                            {item.title}
                                        </Link>
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

export default NewCourse;
