import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";


const RegisterhtmlForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        name: name,
        email: email,
        number: phoneNumber,
        password: password,
      });

      // If the request is successful, redirect to the login page
      if (response.status === 200) {
        window.location.href = "/sign-in";
      }
    } catch (err) {
      // If there is an error, update the state with the error message
      setError(err.response.data.error);
    }
  };

  return (

    <>
      <section
        className="login-area pt-100 pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".5s"
        style={{
          background: 'linear-gradient(135deg, #2c1448, #180e29)',
          color: 'white',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <Link href="/" >
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src='/assets/img/isg/logoAni.gif' style={{ height: "350px", width: "350px" }} alt="Logo" />
                  </div>
                </Link>
                <br></br>
                <h3 className="text-center mb-60" style={{ color: "white" }}>Sign up From Here</h3>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name" style={{ color: "white" }}>
                    Name <span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="email-id" style={{ color: "white" }}>
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email-id"
                    type="text"
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="phone" style={{ color: "white" }}>
                    WhatsApp Number <span>**</span>
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />

                  <label htmlFor="pass" style={{ color: "white" }}>
                    Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="mt-10"></div>
                  <button className="tp-btn w-100">Register Now</button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link href="/sign-in" className="tp-border-btn w-100">
                    login Now
                  </Link>
                  <Link href="/" className="tp-border-btn w-100">Go To Home</Link>

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
