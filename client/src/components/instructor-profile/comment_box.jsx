import React, { useState } from "react";

const CommentForm = () => {
  const [post, setPost] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(250);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setPost(input);
    const remaining = 250 - input.length;
    setCharactersLeft(remaining);

    if (remaining < 0 || remaining === 250) {
      // Handle the disabled state of the button
    } else {
      // Handle the enabled state of the button
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submitting the comment
    // Reset the form state after submission
    setPost("");
    setCharactersLeft(250);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control status-box"
            rows="3"
            placeholder="Enter your comment here..."
            value={post}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="button-group pull-right">
          <p className="counter">{charactersLeft}</p>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={charactersLeft < 0 || charactersLeft === 250}
          >
            Post
          </button>
        </div>
      </form>
      <ul className="posts">{/* Render the posted comments here */}</ul>
    </div>
  );
};

export default CommentForm;
