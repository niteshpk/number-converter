import React, { useState } from "react";

function OctalToDecimalCard() {
  const [octalNumber, setOctalNumber] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const octalRegex = /^[0-7]+$/;
    if (!octalRegex.test(octalNumber)) {
      alert("Please enter a valid octal number");
      return;
    }

    const decimalNumber = parseInt(octalNumber, 8);
    setDecimalNumber(decimalNumber);
  };

  const reset = () => {
    setOctalNumber("");
    setDecimalNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Octal to Decimal Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="octalNumberOctalToDecimalCard">Octal Number:</label>
            <input
              className="form-control"
              type="text"
              value={octalNumber}
              id="octalNumberOctalToDecimalCard"
              onChange={(e) => setOctalNumber(e.target.value)}
              placeholder="Enter octal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="decimalNumberOctalToDecimalCard">
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberOctalToDecimalCard"
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

export default OctalToDecimalCard;
