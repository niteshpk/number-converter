import React, { useState } from "react";

function ASCIIToBinaryCard() {
  const [asciiText, setAsciiText] = useState("");
  const [binaryText, setBinaryText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let binaryString = "";
    for (let i = 0; i < asciiText.length; i++) {
      const binaryChar = asciiText[i]
        .charCodeAt(0)
        .toString(2)
        .padStart(8, "0");
      binaryString += binaryChar;
    }
    setBinaryText(binaryString);
  };

  const reset = () => {
    setAsciiText("");
    setBinaryText("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>ASCII to Binary Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="asciiTextASCIIToBinaryCard">ASCII Text:</label>
            <textarea
              className="form-control"
              rows="3"
              value={asciiText}
              id="asciiTextASCIIToBinaryCard"
              onChange={(e) => setAsciiText(e.target.value)}
              placeholder="Enter ASCII text"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="binaryTextASCIIToBinaryCard">Binary Text:</label>
            <textarea
              className="form-control"
              rows="3"
              value={binaryText}
              id="binaryTextASCIIToBinaryCard"
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

export default ASCIIToBinaryCard;
