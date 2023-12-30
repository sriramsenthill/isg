import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url('/assets/img/banner/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-bg ">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8 align-self-end">
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="banner-info d-none">
                  <ul>
                    <li>
                      <span>235K</span>Worldwide Students
                    </li>
                    <li>
                      <span>3.5K</span>Free Pro Courses
                    </li>
                    <li>
                      <span>
                        4.7<i className="fi fi-rr-star "></i>
                      </span>
                      Worldwide Review
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
