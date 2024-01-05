import instructor_info_data from "@/src/data/instructor-data";
import Link from "next/link";
import React from "react";

const InstructorArea = () => {
  return (
    <>
      <section className="instructor-area pb-110" style={{ marginTop: "5rem", background: "#5f096f" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-65 text-center">
                <span className="tp-sub-title-box mb-15" style={{ color: "white", marginTop: "5rem" }}>Professors</span>
                <h2 className="tp-section-title" style={{ color: "white" }} >Our Professors</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {instructor_info_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12 mb-4">
                <div
                  className="card w-100 tp-instruc-item wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".2s"
                >
                  <div className="tp-instructor text-center p-relative">
                    <div
                      className="tp-instructor__thumb mb-3"
                      style={{ height: "400px" }}
                    >
                      <img
                        className="w-100 h-100"
                        src={item.img}
                        alt="instructor-profile"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="tp-instructor__content">
                      <span>{item.title}</span>
                      <h4 className="tp-instructor__title tp-instructor__title-info p-relative mb-2 mt-3">
                        <Link href="/professorProfile">{item.name}</Link>
                      </h4>
                      <div className="tp-instructor__stu-info"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="instructor-btn text-center mt-20">
                <Link className="tp-btn" href="/instructor">
                  All Professors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorArea;
