import React, { useState } from "react";

function BinaryToASCIICard() {
  const [binaryText, setBinaryText] = useState("");
  const [asciiText, setAsciiText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let asciiString = "";
    for (let i = 0; i < binaryText.length; i += 8) {
      const binaryChar = binaryText.substring(i, i + 8);
      const asciiChar = String.fromCharCode(parseInt(binaryChar, 2));
      asciiString += asciiChar;
    }
    setAsciiText(asciiString);
  };

  const reset = () => {
    setBinaryText("");
    setAsciiText("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Binary to ASCII Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="binaryTextBinaryToASCIICard">Binary Text:</label>
            <textarea
              className="form-control"
              rows="3"
              value={binaryText}
              id="binaryTextBinaryToASCIICard"
              onChange={(e) => setBinaryText(e.target.value)}
              placeholder="Enter binary text"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="asciiTextBinaryToASCIICard">ASCII Text:</label>
            <textarea
              className="form-control"
              rows="3"
              value={asciiText}
              id="asciiTextBinaryToASCIICard"
              disabled
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary mt-4" type="submit">
              Convert
            </button>
            <button
              className="btn btn-outline-primary mt-4"
              type="button"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BinaryToASCIICard;
