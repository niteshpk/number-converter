import React, { useState } from "react";

function HexadecimalToDecimalCard() {
  const [hexadecimalNumber, setHexadecimalNumber] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const hexadecimalRegex = /^[0-9A-Fa-f]+$/;
    if (!hexadecimalRegex.test(hexadecimalNumber)) {
      alert("Please enter a valid hexadecimal number");
      return;
    }

    const decimalNumber = parseInt(hexadecimalNumber, 16);
    setDecimalNumber(decimalNumber);
  };

  const reset = () => {
    setHexadecimalNumber("");
    setDecimalNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Hexadecimal to Decimal Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hexadecimalNumberHexadecimalToDecimalCard">
              Hexadecimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={hexadecimalNumber}
              id="hexadecimalNumberHexadecimalToDecimalCard"
              onChange={(e) => setHexadecimalNumber(e.target.value)}
              placeholder="Enter hexadecimal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="decimalNumberHexadecimalToDecimalCard">
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberHexadecimalToDecimalCard"
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

export default HexadecimalToDecimalCard;
