import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    // setTitle(event.target.value);
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <title>Title:</title>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;