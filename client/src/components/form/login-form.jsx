import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const handleLogin = async () => {
      try {
         const response = await axios.post('http://localhost:3000/signIn', {
            email,
            password,
         });

         const { token } = response.data;

         // Save the token to local storage
         localStorage.setItem('jwtToken', token);

         // Redirect to /bibleCourse
         window.location.href = '/bibleCourse';
      } catch (error) {
         console.error('Login failed:', error);

         // Update the state with the error message
         setError(error.response?.data.message || 'Login failed. Please try again.');
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
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           <img src='/assets/img/isg/logo.png' style={{ height: "150px", width: "150px" }} alt="Logo" />
                        </div>
                        <br></br>
                        <h3 className="text-center mb-60" style={{ color: "white" }}>Login From Here</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                           <label htmlFor="email" style={{ color: "white" }}>Email <span>**</span></label>
                           <input id="email" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                           <label htmlFor="pass" style={{ color: "white" }}>Password <span>**</span></label>
                           <input id="pass" type="password" placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                           <div className="mt-10"></div>
                           <button className="tp-btn w-100" onClick={handleLogin}>Login Now</button>
                           {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                           <div className="or-divide"><span>or</span></div>
                           <Link href="/register" className="tp-border-btn w-100">Register Now</Link>
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
