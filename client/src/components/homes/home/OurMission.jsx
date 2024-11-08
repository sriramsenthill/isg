import Link from "next/link";
import React from "react";

// category_data
const category_data = [
  {
    id: 1,
    img: "/assets/img/category/university.png",
    title: "International Bible College",
    link: "/course-grid",
  },
  {
    id: 2,
    img: "/assets/img/category/project.png",
    title: " Translation Project",
    link: "/course-grid",
  },
  {
    id: 3,
    img: "/assets/img/category/mic.png",
    title: "Pastors Seminars Worldwide",
    link: "/course-grid",
  },
  {
    id: 4,
    img: "/assets/img/category/event.png",
    title: "Women’s Ministry Events",
    link: "/course-grid",
  },
  {
    id: 5,
    img: "/assets/img/category/seminar.png",
    title: "Missionary Seminars",
    link: "/course-grid",
  },
  {
    id: 6,
    img: "/assets/img/category/workshop.png",
    title: "International Youth Workshops",
    link: "/course-grid",
  },
  {
    id: 7,
    img: "/assets/img/category/family.png",
    title: "Christian Family Gatherings",
    link: "/course-grid",
  },
  {
    id: 8,
    img: "/assets/img/category/leadership.png",
    title: "Prayer Camps Leadership",
    link: "/course-grid",
  },
  {
    id: 9,
    img: "/assets/img/category/avatar.png",
    title: "Missionary ‘Go or Send’",
    link: "/course-grid",
  },
  {
    id: 10,
    img: "/assets/img/category/project.png",
    title: "Church Building Projects",
    link: "/course-grid",
  },
  {
    id: 11,
    img: "/assets/img/category/bible.png",
    title: "Free Bibles Distribution",
    link: "/course-grid",
  },
  {
    id: 12,
    img: "/assets/img/category/training.png",
    title: "Workshop Training",
    link: "/course-grid",
  },
];

const OurMission = () => {
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
                <h2 className="tp-section-title">Our Mission</h2>
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
                    <div>
                      <img src={item.img} alt="category-img" />
                    </div>
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
                    <Link href={item.link} style={{ color: "white" }}>
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

export default OurMission;
