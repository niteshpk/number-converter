import React, { useState } from "react";

function DecimalToBinaryCard() {
  const [decimalNumber, setDecimalNumber] = useState("");
  const [binaryNumber, setBinaryNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const decimalRegex = /^[0-9]+$/;
    if (!decimalRegex.test(decimalNumber)) {
      alert("Please enter a valid decimal number");
      return;
    }

    const binaryNumber = parseInt(decimalNumber, 10).toString(2);
    setBinaryNumber(binaryNumber);
  };

  const reset = () => {
    setDecimalNumber("");
    setBinaryNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Decimal to Binary Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="decimalNumberDecimalToBinaryCard">
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberDecimalToBinaryCard"
              onChange={(e) => setDecimalNumber(e.target.value)}
              placeholder="Enter decimal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="binaryNumberDecimalToBinaryCard">
              Binary Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={binaryNumber}
              id="binaryNumberDecimalToBinaryCard"
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

export default DecimalToBinaryCard;
