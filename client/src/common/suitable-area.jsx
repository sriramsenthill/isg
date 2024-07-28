import Link from "next/link";
import React from "react";

// suitable_data
const suitable_data = [
  {
    id: 2,
    title: (
      <>
        Do you want to <span>Learn</span> here?
      </>
    ),
    des: <>Course registration for the year 2025 are now open!</>,
    img: "/assets/img/bg/suit-bg-02.png",
  },
];

const SuitableArea = ({ style_2 }) => {
  return (
    <>
      <section
        className={`suitable-area  ${style_2 ? "bg-bottom grey-bg pt-115" : ""
          } pb-90 wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"
        style={{
          backgroundImage: style_2
            ? `url(/assets/img/bg/shape-bg-1.png)`
            : null,
        }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-25">New Courses Introduced</span>
                <h2 className="tp-section-title">
                  Registration Open for New Courses introduced by ISG
                </h2>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {suitable_data.map((item) => (
              <div key={item.id} className="col-xl-6">
                <div
                  className={`tp-suit mb-30 p-relative ${style_2 ? "white-bg" : ""
                    }`}
                >
                  <div className="tp-suit__content">
                    <h4 className="tp-suit__title">{item.title}</h4>
                    <p>{item.des}</p>
                    <div className="tp-suit__btn pt-5">
                      <Link href="/newCourse" className="tp-border-btn">
                        Register Now
                      </Link>
                    </div>
                  </div>
                  <div className="tp-suit__tech">
                    <img src={item.img} alt="suitable-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuitableArea;
