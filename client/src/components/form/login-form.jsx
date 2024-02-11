import Link from 'next/link';
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
   const [loginType, setLoginType] = useState('student'); // Default login type is 'normal'
   const [email, setEmail] = useState('');
   const [registerNumber, setRegisterNumber] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);

   const router = useRouter();

   const handleLogin = async (e) => {
      e.preventDefault();

      try {
         setLoading(true); // Set loading state to true

         let credentials = {};
         if (loginType === 'others') {
            credentials = {
               email,
               password,
            };
         } else if (loginType === 'student') {
            credentials = {
               REG_NO: registerNumber,
            };
         }

         const res = await signIn("credentials", {
            ...credentials,
            redirect: false,
         });

         if (res.error) {
            setError("Invalid Credentials");
            setLoading(false); // Set loading state to false
            return;
         }

         router.replace("/");
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false); // Set loading state to false in case of success or error
      }
   };


   return (
      <>
         <section className="login-area pt-100 pb-100 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s" style={{
            background: 'linear-gradient(135deg, #2c1448, #180e29)',
            color: 'white',
         }}>
            <div className="container" >
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <Link href="/" >
                           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <img src='/assets/img/isg/logoAni.gif' style={{ height: "350px", width: "350px" }} alt="Logo" />
                           </div>
                        </Link>
                        <br></br>
                        <h3 className="text-center mb-60" style={{ color: "white" }}>Login From Here</h3>
                        <form onSubmit={handleLogin}>
                           <label htmlFor="loginType" style={{ color: "white" }}>Login Type</label>
                           <select id="loginType" value={loginType} onChange={(e) => setLoginType(e.target.value)} style={{
                              width: "100%",
                              padding: "18px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              backgroundColor: "#fff",
                              color: "#333",
                              cursor: "pointer",
                           }}>
                              <option value="student">Student</option>
                              <option value="others">Others</option>
                           </select>
                           {loginType === 'others' ? (
                              <>
                                 <label htmlFor="email" style={{ color: "white" }}>Email <span>**</span></label>
                                 <input id="email" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                              </>
                           ) : (
                              <>
                                 <label htmlFor="registerNumber" style={{ color: "white" }}>Register Number <span>**</span></label>
                                 <input
                                    id="registerNumber"
                                    type="text"
                                    placeholder="Enter Register Number"
                                    value={registerNumber}
                                    onChange={(e) => setRegisterNumber(e.target.value.toUpperCase())}
                                 />
                              </>
                           )}
                           {loginType === 'others' ?
                              (
                                 <>
                                    <label htmlFor="pass" style={{ color: "white" }}>Password <span>**</span></label>
                                    <input id="pass" type="password" placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                                 </>
                              ) : (<></>)
                           }
                           <div className="mt-10"></div>
                           <button className="tp-btn w-100" type="submit" disabled={loading}>
                              {loading ? 'Loading...' : 'Login Now'}
                           </button>
                           {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                           <div className="or-divide" style={{ color: "black" }}><span>or</span></div>
                           <Link href="/register" className="tp-border-btn w-100">Register Now</Link>
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

export default LoginForm;
