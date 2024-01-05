import useSticky from '@/hooks/use-sticky';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import NavMenu from './nav-menu';
import Sidebar from './sidebar';

const HeaderTwo = () => {
   const { sticky } = useSticky();
   const [isActive, setIsActive] = useState(false);
   const [jwtToken, setJwtToken] = useState('');

   useEffect(() => {
      // Check for JWT token in local storage
      const token = localStorage.getItem('jwtToken');

      if (token) {
         // Set JWT token in state
         setJwtToken(token);
      }
   }, []);

   const welcome = () => {
      try {
         // Example: Display a welcome message with the user's name
         return "Welcome ISG User!";
      } catch (error) {
         console.error('Error:', error);

      }
   };

   const handleLogout = () => {
      // Clear the JWT token from local storage
      localStorage.removeItem('jwtToken');

      // Redirect to the sign-in page
      window.location.href = '/sign-in';
   };

   return (
      <>
         <header className="header_white_area d-none d-xl-block">
            <div className="header__area pt-40 pb-5">
               <div className="main-header">
                  <div className="container">
                     <div className="logo-area d-flex align-items-center justify-content-center">
                        <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-5 col-6">
                           <div className="logo-area d-flex align-items-center justify-content-center">
                              <div className="logo">
                                 <Link href="/">
                                    <img src="/assets/img/isg/logoAni.gif" style={{ height: "300px", width: "300px" }} alt="logo" />
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={`header-menu-area ${sticky ? "header-sticky" : ""}`} id="header-sticky">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-9 col-xl-9 col-lg-6 text-start">
                        <div className="main-menu main-menu-white">
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-6 d-flex align-items-center justify-content-end">
                        <div className="header-meta-green">
                           <ul>
                              {jwtToken ? (
                                 <>
                                    <li style={{ marginRight: '1rem' }}>{welcome()}</li>
                                    <li style={{ marginTop: '-10px' }}>
                                       <button
                                          className="btn"
                                          style={{
                                             backgroundColor: "#5f096f",
                                             color: "white",
                                             border: "none",
                                             padding: "6px 15px", // Adjust padding as needed
                                             borderRadius: "5px", // Adjust border radius as needed
                                          }}
                                          onClick={handleLogout}>Logout</button></li>
                                 </>
                              ) : (
                                 // If JWT token is not present, show sign-in link
                                 <li><Link href="/sign-in"><i className="fi fi-rr-user"></i></Link></li>
                              )}
                              <li><a href="#" className="tp-menu-toggle d-xl-none"><i className="icon_ul"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <div id="header-mob-sticky" className={`mobile-header-area mob-white-sticky d-xl-none ${sticky ? "header-sticky" : ""}`}>
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
                           {jwtToken ? (
                              <>
                                 <li>{welcome()}</li>
                                 <li style={{ marginTop: '5px' }}>
                                    <button
                                       className="btn"
                                       style={{
                                          backgroundColor: "#5f096f",
                                          color: "white",
                                          border: "none",
                                          padding: "6px 15px", // Adjust padding as needed
                                          borderRadius: "5px", // Adjust border radius as needed
                                       }}
                                       onClick={handleLogout}>Logout</button></li>
                              </>
                           ) : (
                              // If JWT token is not present, show sign-in link
                              <li><Link href="/sign-in"><i className="fi fi-rr-user"></i></Link></li>
                           )}
                           <li><a href="#" onClick={() => setIsActive(true)} className="tp-menu-toggle d-xl-none"><i className="icon_ul"></i></a></li>
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
