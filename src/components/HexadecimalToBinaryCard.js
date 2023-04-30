import React, { useState } from "react";

function HexadecimalToBinaryCard() {
  const [hexadecimalNumber, setHexadecimalNumber] = useState("");
  const [binaryNumber, setBinaryNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const hexadecimalRegex = /^[0-9A-Fa-f]+$/;
    if (!hexadecimalRegex.test(hexadecimalNumber)) {
      alert("Please enter a valid hexadecimal number");
      return;
    }

    const decimalNumber = parseInt(hexadecimalNumber, 16);
    const binaryNumber = decimalNumber.toString(2);
    setBinaryNumber(binaryNumber);
  };

  const reset = () => {
    setHexadecimalNumber("");
    setBinaryNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Hexadecimal to Binary Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hexadecimalNumberHexadecimalToBinaryCard">
              Hexadecimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={hexadecimalNumber}
              id="hexadecimalNumberHexadecimalToBinaryCard"
              onChange={(e) => setHexadecimalNumber(e.target.value)}
              placeholder="Enter hexadecimal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="binaryNumberHexadecimalToBinaryCard">
              Binary Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={binaryNumber}
              id="binaryNumberHexadecimalToBinaryCard"
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

export default HexadecimalToBinaryCard;
