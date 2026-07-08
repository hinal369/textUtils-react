import { useState } from "react";

export default function TextForm({ heading, showAlert }) {
  const [text, setText] = useState("");

  const wordCount = text
    .split(/\s+/)
    .filter((word) => word.length !== 0).length;
  const readTime = (0.008 * wordCount).toFixed(2);
  const isTextEmpty = text.trim().length === 0;

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercaseClick = () => {
    if (isTextEmpty) return;
    setText(text.toUpperCase());
    showAlert("Converted to uppercase!", "success");
  };

  const handleLowercaseClick = () => {
    if (isTextEmpty) return;
    setText(text.toLowerCase());
    showAlert("Converted to lowercase!", "success");
  };

  const handleCapitalizeClick = () => {
    if (isTextEmpty) return;
    const capitalizeWords = text.split(/\s+/).map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setText(capitalizeWords.join(" "));
    showAlert("Capitalized the first letter of each word!", "success");
  };

  const handleRemoveExtraSpacesClick = () => {
    if (isTextEmpty) return;
    const removeSpace = text.split(/[ ]+/).filter((word) => {
      return word.length !== 0;
    });
    setText(removeSpace.join(" "));
    showAlert("Remove extra spaces!", "success");
  };

  const handleClearTextClick = () => {
    if (isTextEmpty) return;
    setText("");
    showAlert("Clear Text!", "success");
  };

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
            disabled={isTextEmpty}
            className="btn btn-primary mb-3"
            onClick={handleUppercaseClick}
          >
            Uppercase
          </button>
          <button
            type="submit"
            disabled={isTextEmpty}
            className="btn btn-primary mb-3 ms-2"
            onClick={handleLowercaseClick}
          >
            Lowercase
          </button>
          <button
            type="submit"
            disabled={isTextEmpty}
            className="btn btn-primary mb-3 ms-2"
            onClick={handleCapitalizeClick}
          >
            Capitalize
          </button>
          <button
            type="submit"
            disabled={isTextEmpty}
            className="btn btn-primary mb-3 ms-2"
            onClick={handleRemoveExtraSpacesClick}
          >
            Remove Extra Spaces
          </button>
          <button
            type="submit"
            disabled={isTextEmpty}
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
          {wordCount} Words and {text.length} Characters
        </p>
        <p>{readTime} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {isTextEmpty
            ? "Enter text in the textbox above to preview it here."
            : text}
        </p>
      </div>
    </>
  );
}
