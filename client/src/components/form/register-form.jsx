import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";


const RegisterhtmlForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <>
      <section
        className="login-area pt-100 pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Sign up From Here</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="name">
                    Username <span>**</span>
                  </label>
                  <input id="name" type="text" placeholder="Enter Username" />
                  <label htmlFor="email-id">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email-id"
                    type="text"
                    placeholder="Email address..."
                  />
                  <label htmlFor="phone">
                    WhatsApp Number <span>**</span>
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />

                  <label htmlFor="pass">
                    Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    type="password"
                    placeholder="Enter password..."
                  />
                  <div className="mt-10"></div>
                  <button className="tp-btn w-100">Register Now</button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link href="/sign-in" className="tp-border-btn w-100">
                    login Now
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterhtmlForm;
