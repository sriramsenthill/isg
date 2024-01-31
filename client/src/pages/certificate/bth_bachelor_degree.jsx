import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";

const data = [
  {
    img4: "/assets/img/isgdiocese/bth/1.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/2.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/3.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/4.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/5.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/6.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/7.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/8.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/9.jpeg",
  },
  {
    img4: "/assets/img/isgdiocese/bth/10.jpeg",
  },
];

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"bth_bachelor_degree"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img4} alt="category-img" />
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </WrapperFour>
  );
};

export default index;
