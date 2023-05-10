import React, { useState } from "react";

function DecimalToHexadecimalCard() {
  const [decimalNumber, setDecimalNumber] = useState("");
  const [hexadecimalNumber, setHexadecimalNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const decimalRegex = /^[0-9]+$/;
    if (!decimalRegex.test(decimalNumber)) {
      alert("Please enter a valid decimal number");
      return;
    }

    const hexadecimalNumber = parseInt(decimalNumber, 10).toString(16);
    setHexadecimalNumber(hexadecimalNumber.toUpperCase());
  };

  const reset = () => {
    setDecimalNumber("");
    setHexadecimalNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Decimal to Hexadecimal Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="decimalNumberDecimalToHexadecimalCard">
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberDecimalToHexadecimalCard"
              onChange={(e) => setDecimalNumber(e.target.value)}
              placeholder="Enter decimal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="hexadecimalNumberDecimalToHexadecimalCard">
              Hexadecimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={hexadecimalNumber}
              id="hexadecimalNumberDecimalToHexadecimalCard"
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

export default DecimalToHexadecimalCard;
