import React, { useState } from "react";

function DecimalToOctalCard() {
  const [decimalNumber, setDecimalNumber] = useState("");
  const [octalNumber, setOctalNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const decimalRegex = /^[0-9]+$/;
    if (!decimalRegex.test(decimalNumber)) {
      alert("Please enter a valid decimal number");
      return;
    }

    const octalNumber = parseInt(decimalNumber, 10).toString(8);
    setOctalNumber(octalNumber);
  };

  const reset = () => {
    setDecimalNumber("");
    setOctalNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Decimal to Octal Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="decimalNumberDecimalToOctalCard">
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberDecimalToOctalCard"
              onChange={(e) => setDecimalNumber(e.target.value)}
              placeholder="Enter decimal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="octalNumberDecimalToOctalCard">Octal Number:</label>
            <input
              className="form-control"
              type="text"
              value={octalNumber}
              id="octalNumberDecimalToOctalCard"
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

export default DecimalToOctalCard;
