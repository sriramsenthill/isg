import React, { useState } from "react";
import axios from "axios";

const PostComment = () => {

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // State to hold form errors
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear previous error when user starts typing
    setFormErrors({ ...formErrors, [name]: "" });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    let hasErrors = false;
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        hasErrors = true;
      }
    }
    if (hasErrors) {
      setFormErrors(newErrors);
      return;
    }

    try {
      // Make a POST request to your backend route with form data
      const response = await axios.post("https://backend.isgbiblecollegeuk.com/chat", formData);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      // If the request is successful, redirect to the login page
      if (response.status === 204) { // Assuming 204 is the success status code
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately, e.g., show an error message
    }
  };


  return (
    <>
      <div className="postbox__comment-form">
        <h3 className="postbox__comment-form-title">Chat</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  onChange={handleInputChange}
                  required
                />
                <span className="error">{formErrors.name}</span>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email"
                  onChange={handleInputChange}
                  required
                />
                <span className="error">{formErrors.email}</span>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  placeholder="Subject"
                  onChange={handleInputChange}
                  required
                />
                <span className="error">{formErrors.subject}</span>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Enter your message ..."
                  onChange={handleInputChange}
                  required
                ></textarea>
                <span className="error">{formErrors.message}</span>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-btn">
                <button type="submit" className="tp-btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostComment;
