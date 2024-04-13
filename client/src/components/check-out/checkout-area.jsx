import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CheckoutArea = () => {
   const [formData, setFormData] = useState({
      country: '',
      name: '',
      fatherName: '',
      dob: '',
      married: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      email: '',
      whatsappNumber: '',
      churchName: '',
      churchRegisterNumber: '',
      churchAddress: '',
      churchPhoneNumber: '',
      churchMembers: '',
      churchExperience: '',
      courseCertificate: '',
      attestation: '',
      passportPhoto: '',
   });

   const [errors, setErrors] = useState({});

   const router = useRouter();

   const handleChange = async (e) => {
      const { name, value, files } = e.target;

      if (name === 'passportPhoto' && files && files.length > 0) {
         const file = files[0];
         const base64 = await convertToBase64(file);
         setFormData({ ...formData, [name]: base64 });
      } else {
         setFormData({ ...formData, [name]: value });
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Validate form fields
      const validationErrors = {};
      for (const [key, value] of Object.entries(formData)) {
         if (!value && key !== 'passportPhoto') {
            validationErrors[key] = `This Field is required.`;
         }
      }

      if (Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
         return;
      }

      try {
         console.log(formData);
         await axios.post('https://backend.isgbiblecollegeuk.com/registration', formData);
         router.push('/');
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <>
         <img src="/assets/img/isg/logoAni.gif" alt="logo" style={{ width: '150px', height: '150px' }} className="checkout-area wow ml-200 fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s" />
         <section className="checkout-area pb-70 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
            <div className="container">
               <form onSubmit={handleSubmit}>
                  <div className="row">
                     <div className="col-lg-6 col-md-12">
                        <div className="checkbox-form">
                           <h3>2025 Ordination and Student Graduate Registration</h3>
                           <h5>**⁠ ⁠Imparting BIBLICAL KNOWLEDGE**</h5>
                           <h5> ** ⁠Developing SPIRITUAL CHARACTER**</h5>
                           <h5>  **⁠ ⁠Improving MINISTERIAL SKILLS**</h5>
                           <br />
                           <div className="row">
                              <h8>Please Provide Your Details</h8>
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Country <span className="required">*</span></label>
                                    <select name="country" value={formData.country} onChange={handleChange}>
                                       <option value="">Select Country</option>
                                       <option value="United Kingdom">United Kingdom</option>
                                       <option value="United States">United States</option>
                                       <option value="India">India</option>
                                       <option value="Sri Lanka">Sri Lanka</option>
                                       <option value="Australia">Australia</option>
                                       <option value="South Wales">Wales</option>
                                       <option value="Germany">Germany</option>
                                       <option value="South Wales">France</option>
                                       <option value="Germany">Italy</option>
                                       <option value="South Wales">Singapore</option>
                                       <option value="Germany">Malaysia</option>
                                    </select>
                                    {errors.country && <div className="error" style={{ color: 'red' }}>{errors.country}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Name <span className="required">*</span></label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                    {errors.name && <div className="error" style={{ color: 'red' }}>{errors.name}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Father Name <span className="required">*</span></label>
                                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                                    {errors.fatherName && <div className="error" style={{ color: 'red' }}>{errors.fatherName}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Date of Birth</label>
                                    <input type="text" name="dob" value={formData.dob} onChange={handleChange} />
                                    {errors.dob && <div className="error" style={{ color: 'red' }}>{errors.dob}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Passport Photo</label>
                                    <input
                                       type="file"
                                       lable="Image"
                                       name="passportPhoto"
                                       id='file-upload'
                                       accept='.jpeg, .png, .jpg'
                                       onChange={(e) => handleChange(e)}
                                    />
                                    {errors.passportPhoto && <div className="error" style={{ color: 'red' }}>{errors.passportPhoto}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Are you married? <span className="required">*</span></label>
                                    <div>
                                       <div className="d-flex align-items-center justify-content-start">
                                          <input
                                             type="radio"
                                             id="married-yes"
                                             name="married"
                                             value="yes"
                                             checked={formData.married === 'yes'}
                                             onChange={handleChange}
                                             required
                                          />
                                          <label htmlFor="married-yes" className="mx-3">
                                             Yes
                                          </label>
                                          <input
                                             type="radio"
                                             id="married-no"
                                             name="married"
                                             value="no"
                                             checked={formData.married === 'no'}
                                             onChange={handleChange}
                                             required
                                          />
                                          <label htmlFor="married-no" className="mx-3">
                                             No
                                          </label>
                                       </div>
                                    </div>
                                    {errors.married && <div className="error" style={{ color: 'red' }}>{errors.married}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Address <span className="required">*</span></label>
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                                    {errors.address && <div className="error" style={{ color: 'red' }}>{errors.address}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>City <span className="required">*</span></label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                                    {errors.city && <div className="error">{errors.city}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>State <span className="required">*</span></label>
                                    <input type="text" name="state" value={formData.state} onChange={handleChange} />
                                    {errors.state && <div className="error" style={{ color: 'red' }}>{errors.state}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Postcode / Zip <span className="required">*</span></label>
                                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                                    {errors.postalCode && <div className="error" style={{ color: 'red' }}>{errors.postalCode}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Email Address <span className="required">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                    {errors.email && <div className="error" style={{ color: 'red' }}>{errors.email}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Whatsapp Number<span className="required">*</span></label>
                                    <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} />
                                    {errors.whatsappNumber && <div className="error" style={{ color: 'red' }}>{errors.whatsappNumber}</div>}
                                 </div>
                              </div>
                              <h6>Church Details</h6>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Church Name <span className="required">*</span></label>
                                    <input type="text" name="churchName" value={formData.churchName} onChange={handleChange} />
                                    {errors.churchName && <div className="error" style={{ color: 'red' }}>{errors.churchName}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Church Register Number</label>
                                    <input type="text" name="churchRegisterNumber" value={formData.churchRegisterNumber} onChange={handleChange} />
                                    {errors.churchRegisterNumber && <div className="error" style={{ color: 'red' }}>{errors.churchRegisterNumber}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Church Address <span className="required">*</span></label>
                                    <input type="text" name="churchAddress" value={formData.churchAddress} onChange={handleChange} />
                                    {errors.churchAddress && <div className="error" style={{ color: 'red' }}>{errors.churchAddress}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Church Phone Number <span className="required">*</span></label>
                                    <input type="text" name="churchPhoneNumber" value={formData.churchPhoneNumber} onChange={handleChange} />
                                    {errors.churchPhoneNumber && <div className="error" style={{ color: 'red' }}>{errors.churchPhoneNumber}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>No of Church Members <span className="required">*</span></label>
                                    <input type="text" name="churchMembers" value={formData.churchMembers} onChange={handleChange} />
                                    {errors.churchMembers && <div className="error" style={{ color: 'red' }}>{errors.churchMembers}</div>}
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>No of Years Experience in Church Ministry <span className="required">*</span></label>
                                    <input type="text" name="churchExperience" value={formData.churchExperience} onChange={handleChange} />
                                    {errors.churchExperience && <div className="error" style={{ color: 'red' }}>{errors.churchExperience}</div>}
                                 </div>
                              </div>
                              <h6>Certificate Details</h6>
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Select Course Certificate <span className="required">*</span></label>
                                    <select name="courseCertificate" value={formData.courseCertificate} onChange={handleChange}>
                                       <option value="">Select Course Certificate</option>
                                       <option value="Pastor Ordination">Pastor Ordination</option>
                                       <option value="Evangelist">Evangelist</option>
                                       <option value="Reverend Ordination">Reverend Ordination</option>
                                       <option value="Apostolic Ordination">Apostolic Ordination</option>
                                       <option value="Doctorate Ordination">Doctorate Ordination</option>
                                    </select>
                                    {errors.courseCertificate && <div className="error" style={{ color: 'red' }}>{errors.courseCertificate}</div>}
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Attestation by college <span className="required">*</span></label>
                                    <select name="attestation" value={formData.attestation} onChange={handleChange}>
                                       <option value="">Select Attestation</option>
                                       <option value="Bth Bachelor's Degree">Bth Bachelor's Degree</option>
                                       <option value="Mth Master's Degree">Mth Master's Degree</option>
                                       <option value="Diplomo in Theology">Diplomo in Theology</option>
                                       <option value="Diplomo in Theology">Diploma in Divinity - D.D.</option>
                                       <option value="Diplomo in Theology">Bachelor in Divinity - B.D</option>
                                       <option value="Diplomo in Theology"> Master of Divinity - M.D</option>
                                    </select>
                                    {errors.attestation && <div className="error" style={{ color: 'red' }}>{errors.attestation}</div>}
                                 </div>
                              </div>
                              <h5>**⁠A PAYMENT IS REQUIRED TO PROCEED, CONTACT THE BELOW NUMBER FOR PAYMENT INFO**</h5>
                              <h6>ISG DEAN K.JOHN DONALD: +91-9884585263</h6>
                              <h6>ISG PRINCIPLE S .DAYAMALAR: +91-919600044625</h6>
                              <h6>ISG ASSISTANT PRINCIPLE SANTHI EBENEZER: +91-9487783048</h6>
                              <div className="order-button-payment mt-20">
                                 <button type="submit" className="tp-btn">
                                    Submit Application
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </section>
      </>
   );
};

export default CheckoutArea;

function convertToBase64(file) {
   return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
         resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
         reject(error)
      }
   })
}