import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";
import { useSession } from "next-auth/react"; // Import useSession
import { signOut } from "next-auth/react";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);
  const { data: session } = useSession(); // Get the session

  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: "/" }); // Use the signOut function from next-auth
  };

  return (
    <>
      <header
        className="header_white_area d-none d-xl-block"
        style={{ background: "linear-gradient(to right, #a91c57, #5f0a6f)" }}
      >
        <div className="header__area pt-40 pb-5">
          <div className="main-header">
            <div className="container">
              <div className="logo-area d-flex align-items-center justify-content-center">
                <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-5 col-6">
                  <div className="logo-area d-flex align-items-center justify-content-center">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/img/isg/logoAni.gif"
                          style={{ height: "300px", width: "300px" }}
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <span
                    className="customfont"
                    style={{
                      fontSize: "2.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "MyCustomFont", // Apply custom font family
                      color: "white", // Additional styles
                      textAlign: "center", // Additional styles
                      fontWeight: "normal", // Additional styles
                    }}
                  >
                    ISG BIBLE COLLEGE UK
                  </span>
                  <style jsx>{`
                    @font-face {
                      font-family: "MyCustomFont";
                      src: url("/assets/fonts/EnglishTowne.ttf")
                        format("truetype");
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`header-menu-area ${sticky ? "header-sticky" : ""}`}
          id="header-sticky"
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-9 text-start">
                <div className="main-menu main-menu-white">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-6 d-flex align-items-center justify-content-end">
                <div
                  className="header-meta-green"
                  style={{
                    display: "flex",
                    position: "relative",
                    bottom: "4.5rem",
                  }}
                >
                  <ul>
                    {session ? (
                      <>
                        <li style={{ marginTop: "-10px" }}>
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#5f096f",
                              color: "white",
                              border: "none",
                              padding: "6px 15px", // Adjust padding as needed
                              borderRadius: "5px", // Adjust border radius as needed
                            }}
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      // If JWT token is not present, show sign-in link
                      <li>
                        <Link href="/sign-in">
                          <i className="fi fi-rr-user"></i>
                        </Link>
                      </li>
                    )}
                    <li>
                      <a href="#" className="tp-menu-toggle d-xl-none">
                        <i className="icon_ul"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="header-mob-sticky"
        className={`mobile-header-area mob-white-sticky d-xl-none ${
          sticky ? "header-sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-5">
              <div className="logo">
                <Link href="/">
                  <img src="/assets/img/isg/logoAni.gif" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-7 d-flex align-items-center justify-content-end">
              <div className="header-meta-green text-end">
                <ul>
                  {session ? (
                    <>
                      <li style={{ marginTop: "1px", marginRight: "1rem" }}>
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#5f096f",
                            color: "white",
                            border: "none",
                            padding: "6px 15px", // Adjust padding as needed
                            borderRadius: "5px", // Adjust border radius as needed
                          }}
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    // If JWT token is not present, show sign-in link
                    <li>
                      <Link href="/sign-in">
                        <i className="fi fi-rr-user"></i>
                      </Link>
                    </li>
                  )}
                  <li>
                    <a
                      href="#"
                      onClick={() => setIsActive(true)}
                      className="tp-menu-toggle d-xl-none"
                    >
                      <i className="icon_ul"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default HeaderTwo;
