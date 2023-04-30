import React, { useState } from "react";

function BinaryToDecimalCard() {
  const [binaryNumber, setBinaryNumber] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const binaryRegex = /^[01]+$/;
    if (!binaryRegex.test(binaryNumber)) {
      alert("Please enter a valid binary number");
      return;
    }

    const decimalNumber = parseInt(binaryNumber, 2);
    setDecimalNumber(decimalNumber);
  };

  const reset = () => {
    setBinaryNumber("");
    setDecimalNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Binary to Decimal Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="binaryNumberBinaryToDecimalCard">
              Binary Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={binaryNumber}
              id="binaryNumberBinaryToDecimalCard"
              onChange={(e) => setBinaryNumber(e.target.value)}
              placeholder="Enter binary number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="decimalNumberBinaryToDecimalCard">
              {" "}
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberBinaryToDecimalCard"
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

export default BinaryToDecimalCard;
