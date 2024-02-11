import freeCourse from "@/src/data/freeCourse";
import DownloadIcon from "@mui/icons-material/Download";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";
import "react-h5-audio-player/lib/styles.css";

const CourseArea = () => {

  const router = useRouter();

  const handleDownload = (fileName, filePath) => {
    // Create a link element
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', fileName); // Set the download attribute to force download
    document.body.appendChild(link);

    // Simulate a click on the link to trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <>
      <WrapperFour>
        <SEO pageTitle={"Library"} />
        <section className="course-area pb-120" style={{ marginTop: "5rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center mb-65">
                  <span className="tp-sub-title-box mb-15">Our Courses</span>
                  <h2 className="tp-section-title mb-20">
                    Free Courses
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mb-20">
              {freeCourse.slice(0, 9).map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="tpcourse mb-40 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".2s"
                  >
                    <div className="tpcourse__thumb p-relative w-img fix">
                      <Link href={item.link}>
                        <div style={{ width: "500px", height: "500px" }}>
                          <img
                            style={{ objectFit: "cover" }}
                            src={item.img}
                            alt="svasv"
                          />{" "}
                        </div>
                      </Link>
                      <div className="tpcourse__tag">
                        <Link href="/">
                          <i className="fi fi-rr-heart"></i>
                        </Link>
                      </div>
                      <div style={{ position: "absolute", bottom: 5, left: 5 }}>
                        <img
                          src={item.icon}
                          alt="course-avatar"
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                    <div className="tpcourse__content-2">
                      <div className="tpcourse__category mb-10">
                        <ul className="tpcourse__price-list d-flex align-items-center">
                          <li>
                            <Link className={item.ct_color} href={item.link}>
                              {item.course_title}
                            </Link>
                          </li>
                          <li>
                            <Link className={item.cn_color} href={item.link}>
                              {item.course_name}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tpcourse__ava-title mb-15">
                        <h4 className="tpcourse__title tp-cours-title-color">
                          <Link href={item.link}>{item.title}</Link>
                        </h4>
                      </div>
                      <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                        <ul
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <li>
                            <img
                              src="/assets/img/icon/c-meta-01.png"
                              alt="meta-icon"
                            />
                            <span>{item.cls_text}</span>
                          </li>
                          <div>
                            <button
                              className="btn"
                              onClick={() => handleDownload(item.fileName, item.filePath)}
                              style={{
                                backgroundColor: "#5f096f",
                                color: "white",
                                border: "none",
                                padding: "6px 15px",
                                borderRadius: "5px",
                              }}
                            >
                              <DownloadIcon />
                              &nbsp;Download
                            </button>
                          </div>
                        </ul>
                      </div>

                      <div className="tpcourse__rating ">
                        <div
                          className="tpcourse__pricing"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <Link href={item.link}>
                              <button
                                className="btn"
                                style={{
                                  backgroundColor: "#5f096f",
                                  color: "white",
                                  border: "none",
                                  padding: "6px 15px",
                                  borderRadius: "5px",
                                }}
                              >
                                Learn
                              </button>
                            </Link>
                          </div>
                          <div>
                            <button
                              className="btn"
                              onClick={() => {
                                router.push("/chat")
                              }}
                              style={{
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                padding: "6px 15px",
                                borderRadius: "5px",
                              }}
                            >
                              <ChatIcon />
                              &nbsp; chat
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </WrapperFour>
    </>
  );
};

export default CourseArea;
