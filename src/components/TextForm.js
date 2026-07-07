import { useState } from "react";

export default function TextForm({ heading }) {
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearTextClick = () => {
    setText("");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="col-mb-3">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={handleUppercaseClick}
          >
            Convert to uppercase
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 ms-2"
            onClick={handleLowercaseClick}
          >
            Convert to lowercase
          </button>
           <button
            type="submit"
            className="btn btn-primary mb-3 ms-2"
            onClick={handleClearTextClick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
