import React, { useState } from "react";

function OctalToBinaryCard() {
  const [octalNumber, setOctalNumber] = useState("");
  const [binaryNumber, setBinaryNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const octalRegex = /^[0-7]+$/;
    if (!octalRegex.test(octalNumber)) {
      alert("Please enter a valid octal number");
      return;
    }

    const decimalNumber = parseInt(octalNumber, 8);
    const binaryNumber = decimalNumber.toString(2);
    setBinaryNumber(binaryNumber);
  };

  const reset = () => {
    setOctalNumber("");
    setBinaryNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Octal to Binary Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="octalNumberOctalToBinaryCard">Octal Number:</label>
            <input
              className="form-control"
              type="text"
              value={octalNumber}
              id="octalNumberOctalToBinaryCard"
              onChange={(e) => setOctalNumber(e.target.value)}
              placeholder="Enter octal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="binaryNumberOctalToBinaryCard">
              Binary Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={binaryNumber}
              id="binaryNumberOctalToBinaryCard"
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

export default OctalToBinaryCard;
