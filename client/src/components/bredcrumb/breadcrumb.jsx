import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, subtitle, isDbbl = "", imageUrl }) => {
  return (
    <section
      className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay"
      style={{
        background: "#5f096f",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title mb-20">{title}</h3>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span className="dvdr">
                  <i className="fa-regular fa-angle-right"></i>
                </span>
                {isDbbl && (
                  <>
                    <span className="sub-page-black">{isDbbl}</span>
                    <span className="dvdr">
                      <i className="fa-regular fa-angle-right"></i>
                    </span>
                  </>
                )}
                <span className="sub-page-black">{subtitle}</span>
              </div>

            </div>

          </div>

        </div>

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginRight: "30px" }}>
        {/* Your other content here */}

        <div style={{ marginLeft: 'auto', marginTop: '20px' }}>
          {imageUrl && (
            <span>
              <img src={imageUrl} alt="Breadcrumb Image" style={{ width: '190px', height: 'auto', marginTop: '-210px' }} />
            </span>
          )}
        </div>
      </div>

    </section>
  );
};

export default Breadcrumb;
