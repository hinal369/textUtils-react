import { useState } from "react";

export default function TextForm({ heading, showAlert }) {
  const handleUppercaseClick = () => {
    if (!text) return;
    setText(text.toUpperCase());
    showAlert("Converted to uppercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase!", "success");
  };

  const handleCapitalizeClick = () => {
    const capitalizeWords = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setText(capitalizeWords.join(" "));
    showAlert("Capitalized the first letter of each word!", "success");
  };

  const handleRemoveExtraSpacesClick = () => {
    const removeSpace = text.split(" ").filter((element) => {
      return element.length !== 0;
    });
    setText(removeSpace.join(" "));
    showAlert("Remove extra spaces!", "success");

  };

  const handleClearTextClick = () => {
    setText("");
    showAlert("Clear Text!", "success");
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
            Uppercase
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 ms-2"
            onClick={handleLowercaseClick}
          >
            Lowercase
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 ms-2"
            onClick={handleCapitalizeClick}
          >
            Capitalize
          </button>
           <button
            type="submit"
            className="btn btn-primary mb-3 ms-2"
            onClick={handleRemoveExtraSpacesClick}
          >
            Remove Extra Spaces
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
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter text in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
