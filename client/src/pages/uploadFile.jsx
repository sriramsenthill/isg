import React, { useState } from "react";
import axios from "axios";

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      // Convert the file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have a server endpoint for handling form submissions
    const apiUrl = "http://localhost:3000/fileUpload";

    const chunkSize = 1024 * 1024; // 1 MB chunks

    const uploadFile = async () => {
      const file = formData.file;
      const totalChunks = Math.ceil(file.size / chunkSize);

      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const start = chunkIndex * chunkSize;
        const end = Math.min((chunkIndex + 1) * chunkSize, file.size);
        const chunk = file.slice(start, end);

        const formDataChunk = new FormData();
        formDataChunk.append("file", chunk);

        try {
          await axios.post(apiUrl, formDataChunk, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          console.log(`Chunk ${chunkIndex + 1} uploaded successfully`);
        } catch (error) {
          console.error("Error uploading chunk:", error);
        }
      }

      console.log("All chunks uploaded successfully");
    };
    uploadFile()
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const labelStyle = {
    display: "block",
    margin: "10px 0",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        File:
        <label style={labelStyle}>
          File (PDF/PPT, max 10MB):
          <input
            type="file"
            name="file"
            accept=".pdf, .ppt, application/pdf, application/vnd.ms-powerpoint, .pptx"
            onChange={handleChange}
            style={{ marginTop: "5px" }} // Adjust styling as needed
          />
        </label>
      </label>
      <br />
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default MyFormComponent;
