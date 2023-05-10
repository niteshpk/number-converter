import React, { useState } from "react";

function HexadecimalToOctalCard() {
  const [hexadecimalNumber, setHexadecimalNumber] = useState("");
  const [octalNumber, setOctalNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const hexadecimalRegex = /^[0-9A-Fa-f]+$/;
    if (!hexadecimalRegex.test(hexadecimalNumber)) {
      alert("Please enter a valid hexadecimal number");
      return;
    }

    const decimalNumber = parseInt(hexadecimalNumber, 16);
    const octalNumber = decimalNumber.toString(8);
    setOctalNumber(octalNumber);
  };

  const reset = () => {
    setHexadecimalNumber("");
    setOctalNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Hexadecimal to Octal Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hexadecimalNumberHexadecimalToOctalCard">
              Hexadecimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={hexadecimalNumber}
              id="hexadecimalNumberHexadecimalToOctalCard"
              onChange={(e) => setHexadecimalNumber(e.target.value)}
              placeholder="Enter hexadecimal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="octalNumberHexadecimalToOctalCard">
              Octal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={octalNumber}
              id="octalNumberHexadecimalToOctalCard"
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

export default HexadecimalToOctalCard;
